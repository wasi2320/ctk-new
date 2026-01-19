#!/bin/bash

echo "🚀 CodetoKloud AI & SEO Deployment Script"
echo "=========================================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Are you in the project root?"
    exit 1
fi

echo "📋 Step 1: Checking git status..."
git status

echo ""
read -p "Do you want to proceed with deployment? (y/n) " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]
then
    echo "❌ Deployment cancelled"
    exit 1
fi

echo ""
echo "📦 Step 2: Adding files to git..."
git add .

echo ""
echo "📝 Step 3: Creating commit..."
git commit -m "feat: Add AI blog/case study generators + advanced SEO

✨ New Features:
- AI blog generator with SEO optimization
- AI case study generator with Mermaid diagrams
- Schema markup (Organization, Service, Article, Breadcrumb)
- Enhanced meta tags for better search visibility
- Optimized robots.txt and dynamic sitemap
- New admin tools for content creation

📊 SEO Improvements:
- Structured data for all pages
- Better search result snippets
- Improved crawling and indexing
- Target keyword optimization

📚 Documentation:
- Complete implementation guide
- Deployment checklist
- Usage instructions

🎯 Impact:
- Reduce blog writing time from hours to minutes
- Auto-generate case studies from project data
- Improve search rankings and organic traffic
- Create SEO-optimized content at scale"

echo ""
echo "🌿 Which branch do you want to deploy to?"
echo "1) staging (recommended for testing)"
echo "2) main (production - use only after staging tests pass)"
read -p "Enter choice (1 or 2): " branch_choice

if [ "$branch_choice" = "1" ]; then
    BRANCH="staging"
    echo ""
    echo "🔄 Pushing to staging branch..."
    git push origin staging

    echo ""
    echo "✅ Deployment to staging complete!"
    echo ""
    echo "🧪 Next steps:"
    echo "1. Wait 2-3 minutes for deployment"
    echo "2. Visit your staging URL"
    echo "3. Test /admin/blog-generator"
    echo "4. Test /admin/case-study-generator"
    echo "5. Verify schema markup (view page source)"
    echo "6. If all tests pass, run this script again and choose option 2 for production"

elif [ "$branch_choice" = "2" ]; then
    echo ""
    echo "⚠️  WARNING: You are about to deploy to PRODUCTION!"
    echo ""
    read -p "Have you tested on staging? (y/n) " -n 1 -r
    echo ""

    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ Please test on staging first!"
        exit 1
    fi

    BRANCH="main"
    echo ""
    echo "🚀 Deploying to production (main branch)..."
    git push origin main

    echo ""
    echo "✅ Deployment to production complete!"
    echo ""
    echo "📊 Post-deployment checklist:"
    echo "1. Visit https://codetokloud.com"
    echo "2. Verify homepage loads without errors"
    echo "3. Test /admin/blog-generator"
    echo "4. Test /admin/case-study-generator"
    echo "5. Submit sitemap to Google Search Console"
    echo "6. Test rich results: https://search.google.com/test/rich-results"
    echo ""
    echo "📈 Start creating content and watch your SEO grow!"
else
    echo "❌ Invalid choice. Deployment cancelled."
    exit 1
fi

echo ""
echo "🎉 Deployment successful to $BRANCH branch!"
echo ""
echo "📖 For detailed instructions, see:"
echo "   - AI_IMPLEMENTATION_GUIDE.md"
echo "   - DEPLOYMENT_CHECKLIST.md"
echo "   - IMPLEMENTATION_SUMMARY.md"
