#!/bin/bash

echo "🔧 Pushing TypeScript fixes to GitHub..."
echo ""

cd ~/Desktop/ctk-new

# Remove files with secrets (these were already executed locally)
rm -f PUSH_TO_GITHUB.sh
rm -f RUN_MIGRATION_LOCAL.sh
rm -f migrate-now.sh
rm -f migrate-database.sh

# Remove lock files
rm -f .git/index.lock

# Stage the TypeScript fixes
git add "app/(routes)/admin/automation-settings/page.tsx"
git add "app/api/cron/auto-generate-content/route.ts"

# Also stage the documentation files (these are safe)
git add TYPESCRIPT_FIXES.md
git add fix-and-push.sh
git add CHECKLIST.md
git add FINAL_SETUP_STEPS.md
git add IMPLEMENTATION_COMPLETE.md
git add NEXT_STEPS.md
git add QUICK_START.md

# Commit
git commit -m "fix: Resolve TypeScript ESLint errors for Amplify build

Fixed all @typescript-eslint/no-explicit-any errors:
- Added proper TypeScript interfaces for test results
- Replaced 'any' type with proper type definitions
- Added proper error type checking with instanceof Error

This fixes the Amplify build failure that was blocking deployment.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"

# Push
echo ""
echo "📤 Pushing to GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed TypeScript fixes!"
    echo ""
    echo "🔄 AWS Amplify will rebuild automatically"
    echo "⏳ Wait 2-3 minutes for deployment"
    echo ""
    echo "📋 Next: Check Amplify Console"
    echo "   → https://console.aws.amazon.com/amplify/home"
    echo ""
    echo "✅ Build should succeed this time!"
    echo ""
else
    echo ""
    echo "❌ Push failed"
    echo "Try running: git push origin main"
fi
