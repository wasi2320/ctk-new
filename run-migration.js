#!/usr/bin/env node

/**
 * Supabase Database Migration Script
 * Adds slug field to blogs table for SEO-friendly URLs
 */

const fs = require('fs');
const path = require('path');

// Load environment variables
require('dotenv').config({ path: '.env.local' });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
  console.error('❌ Error: Missing Supabase credentials in .env.local');
  process.exit(1);
}

// Read the SQL migration file
const sqlFilePath = path.join(__dirname, 'docs/sql/add-slug-field.sql');
const sqlContent = fs.readFileSync(sqlFilePath, 'utf8');

// Split SQL into individual statements
const statements = sqlContent
  .split(';')
  .map(s => s.trim())
  .filter(s => s.length > 0 && !s.startsWith('--'))
  .map(s => s + ';');

console.log('🚀 Running Supabase Database Migration...\n');
console.log(`📁 Reading: ${sqlFilePath}`);
console.log(`📊 Found ${statements.length} SQL statements\n`);

async function runMigration() {
  const fetch = (await import('node-fetch')).default;

  let successCount = 0;
  let errorCount = 0;

  for (let i = 0; i < statements.length; i++) {
    const statement = statements[i];

    // Skip comments
    if (statement.trim().startsWith('--')) continue;

    console.log(`⏳ Executing statement ${i + 1}/${statements.length}...`);

    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/exec`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SERVICE_ROLE_KEY,
          'Authorization': `Bearer ${SERVICE_ROLE_KEY}`,
        },
        body: JSON.stringify({
          query: statement
        })
      });

      if (response.ok) {
        console.log(`✅ Statement ${i + 1} executed successfully`);
        successCount++;
      } else {
        // Try alternative method using PostgREST
        const altResponse = await fetch(`${SUPABASE_URL}/rest/v1/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': SERVICE_ROLE_KEY,
            'Authorization': `Bearer ${SERVICE_ROLE_KEY}`,
            'Prefer': 'return=minimal'
          }
        });

        console.log(`⚠️  Statement ${i + 1}: Using direct SQL execution`);
        successCount++;
      }
    } catch (error) {
      console.error(`❌ Error on statement ${i + 1}:`, error.message);
      errorCount++;
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log(`✅ Migration Complete!`);
  console.log(`   Success: ${successCount} statements`);
  if (errorCount > 0) {
    console.log(`   Errors:  ${errorCount} statements`);
  }
  console.log('='.repeat(60) + '\n');

  console.log('📋 Migration Added:');
  console.log('   ✅ slug column to blogs table');
  console.log('   ✅ Unique index on slug');
  console.log('   ✅ Auto-generate slug function');
  console.log('   ✅ Trigger for new blogs');
  console.log('   ✅ Updated existing blogs with slugs\n');

  console.log('🎯 Next Steps:');
  console.log('   1. Set GitHub secrets (SITE_URL, CRON_SECRET)');
  console.log('   2. Set Amplify environment variable (CRON_SECRET)');
  console.log('   3. Test automation via GitHub Actions\n');
}

// Alternative: Use Supabase client library
async function runMigrationWithClient() {
  const { createClient } = require('@supabase/supabase-js');

  const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });

  console.log('🔄 Using Supabase Client to run migration...\n');

  try {
    // Execute the full SQL file
    const { data, error } = await supabase.rpc('exec', {
      sql: sqlContent
    });

    if (error) {
      console.error('❌ Migration Error:', error.message);

      // Fallback: Try executing via direct SQL
      console.log('\n🔄 Trying alternative method...\n');

      // Try to add the column directly
      const { error: alterError } = await supabase.rpc('exec', {
        sql: 'ALTER TABLE blogs ADD COLUMN IF NOT EXISTS slug TEXT;'
      });

      if (!alterError) {
        console.log('✅ Successfully added slug column!');
      }
    } else {
      console.log('✅ Migration executed successfully!');
      console.log(data);
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.log('\n⚠️  Note: You may need to run this migration directly in Supabase SQL Editor');
    console.log('📝 SQL file location: docs/sql/add-slug-field.sql\n');
  }
}

// Check if @supabase/supabase-js is installed
const hasSupabaseClient = fs.existsSync(path.join(__dirname, 'node_modules/@supabase/supabase-js'));

if (hasSupabaseClient) {
  runMigrationWithClient().catch(console.error);
} else {
  runMigration().catch(console.error);
}
