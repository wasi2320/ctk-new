#!/bin/bash

# Fix TypeScript errors and push to GitHub

echo "🔧 Committing TypeScript fixes..."
echo ""

cd ~/Desktop/ctk-new

# Remove any lock files
rm -f .git/index.lock

# Add the fixed files
git add "app/(routes)/admin/automation-settings/page.tsx"
git add "app/api/cron/auto-generate-content/route.ts"
git add "migrate-now.sh"

# Commit the fixes
git commit -m "fix: Resolve TypeScript ESLint errors

Fixed all @typescript-eslint/no-explicit-any errors:
- Added proper TypeScript interfaces for test results
- Replaced 'any' type with proper type definitions
- Added proper error type checking with instanceof Error

This fixes the Amplify build failure.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"

# Push to GitHub
echo ""
echo "📤 Pushing to GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed fixes to GitHub!"
    echo ""
    echo "🔄 AWS Amplify will now rebuild automatically"
    echo ""
    echo "⏳ Wait 2-3 minutes for deployment to complete"
    echo ""
    echo "📋 Next: Check Amplify Console to verify build succeeds"
    echo "   → https://console.aws.amazon.com/amplify/home"
    echo ""
else
    echo ""
    echo "❌ Push failed. Please check your internet connection."
fi
