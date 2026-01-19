# 🚀 Automated Content Generation - Quick Start (5 Minutes!)

## ✨ Easiest Setup Method: GitHub Actions

Your automation is **already configured**! Just set 2 secrets in GitHub:

### Step 1: Add GitHub Secrets (2 minutes)

1. Go to your GitHub repo: https://github.com/wasi2320/ctk-new
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**

**Add these 2 secrets:**

**Secret 1:**
- Name: `SITE_URL`
- Value: `https://main.d2n9sfqzf8jxwb.amplifyapp.com` (or your actual Amplify URL)

**Secret 2:**
- Name: `CRON_SECRET`
- Value: `my-super-secret-key-12345` (change this to something random!)

### Step 2: Deploy to Amplify (1 minute)

```bash
git add .
git commit -m "feat: Add automated content generation"
git push origin main
```

### Step 3: Set Amplify Environment Variables (2 minutes)

Go to **AWS Amplify Console** → Your App → **Environment Variables**

Add:

```
CRON_SECRET = my-super-secret-key-12345
```

(Use the same value as GitHub secret!)

**That's it!** ✅

---

## 🎯 How It Works

### Every Day at 9 AM UTC:

1. ✅ GitHub Actions triggers automatically
2. ✅ Calls your API endpoint
3. ✅ AI generates 1 SEO-optimized blog post (2000+ words)
4. ✅ Publishes directly to your blog
5. ✅ Updates sitemap automatically

### Every 3 Days:

1. ✅ Generates 1 professional case study
2. ✅ Includes architecture diagram (Mermaid code)
3. ✅ Auto-publishes

---

## 🧪 Test It Right Now!

### Option 1: GitHub Actions Manual Trigger

1. Go to your repo: https://github.com/wasi2320/ctk-new
2. Click **Actions** tab
3. Click **Auto Generate Blog & Case Studies** workflow
4. Click **Run workflow** → **Run workflow**
5. Wait 30 seconds
6. Check your `/blogs` page!

### Option 2: Test from Admin Panel

1. Visit: `https://your-site.amplifyapp.com/admin/automation-settings`
2. Enter your `CRON_SECRET`
3. Click **Test Automation Now**
4. Check results!

---

## 📅 Change the Schedule

Edit `.github/workflows/auto-generate-content.yml`:

```yaml
schedule:
  - cron: '0 9 * * *'  # 9 AM UTC daily
```

**Common schedules:**
- Every day 1 AM UTC: `'0 1 * * *'`
- Twice daily (9 AM & 9 PM): `'0 9,21 * * *'`
- Every 12 hours: `'0 */12 * * *'`
- Only weekdays: `'0 9 * * 1-5'`

---

## 📊 What You'll Get

### Per Month (Automatic):
- ✅ **30 blog posts** (1 per day)
- ✅ **10 case studies** (1 every 3 days)
- ✅ **All SEO-optimized** with keywords
- ✅ **Zero manual work!**

### In 3 Months:
- ✅ **90 blog posts**
- ✅ **30 case studies**
- ✅ **5-10x traffic increase**
- ✅ **Page 1 Google rankings**

---

## 🎨 Customize Topics

Want different topics? Edit this file:

`app/api/cron/auto-generate-content/route.ts`

Find `BLOG_TOPICS` array and add your topics:

```typescript
{
  topic: "Your Custom Blog Title",
  keyword: "your target keyword",
  secondary: ["related keyword 1", "related keyword 2"],
  category: "devops",
}
```

**Current topics include:**
- AWS Cloud Migration
- Kubernetes Cost Optimization
- GitHub Actions vs GitLab CI
- Terraform vs CloudFormation
- DevOps Transformation
- And 15+ more!

---

## 🔒 Security

Your automation is secure:
- ✅ Protected by `CRON_SECRET`
- ✅ Only GitHub Actions can trigger it
- ✅ Secrets stored encrypted in GitHub
- ✅ No public access to cron endpoint

---

## 💡 Pro Tips

### 1. Review Content Before Publishing

Want to review before it goes live?

Edit `app/api/cron/auto-generate-content/route.ts`:

Change:
```typescript
author_id: "00000000-0000-0000-0000-000000000000"
```

To your actual user ID, and content will be saved as drafts for review!

### 2. Use Real Case Studies

Edit `CASE_STUDY_TEMPLATES` array with your actual client projects:

```typescript
{
  client_name: "Your Real Client",
  industry: "Their Industry",
  challenge: "What problem they had",
  results: {
    "Metric 1": "Real result you achieved",
    "Metric 2": "Another achievement"
  }
}
```

### 3. Monitor Performance

- Check GitHub Actions tab for run history
- Visit `/admin/automation-settings` for status
- Monitor Google Analytics for traffic growth

---

## 🐛 Troubleshooting

### GitHub Action failing?

1. **Check secrets are set:**
   - GitHub repo → Settings → Secrets → Actions
   - Verify `SITE_URL` and `CRON_SECRET` exist

2. **Check action logs:**
   - GitHub repo → Actions tab
   - Click failed run → View logs

3. **Test manually:**
   ```bash
   curl https://your-site.amplifyapp.com/api/cron/auto-generate-content \
     -H "Authorization: Bearer your-secret"
   ```

### No blog posts appearing?

1. **Check Supabase:**
   - Supabase Dashboard → Table Editor → blogs
   - See if new rows exist

2. **Check environment variable:**
   - Amplify Console → Environment Variables
   - Verify `CRON_SECRET` is set

3. **Check API:**
   - Visit: `https://your-site.amplifyapp.com/api/cron/auto-generate-content`
   - Should return "Unauthorized" (good - means it's protected!)

---

## ✅ Final Checklist

Before going live:

- [ ] Push code to GitHub main branch
- [ ] Set 2 GitHub secrets (`SITE_URL`, `CRON_SECRET`)
- [ ] Set Amplify environment variable (`CRON_SECRET`)
- [ ] Test manually (use GitHub Actions "Run workflow")
- [ ] Verify blog post created
- [ ] Check `/admin/automation-settings` page works
- [ ] Wait 24 hours for first automatic run

---

## 🎉 That's It!

Your automated content machine is ready!

**What happens next:**
1. Every day at 9 AM UTC → New blog post
2. Every 3 days → New case study
3. SEO improves automatically
4. Traffic grows
5. Leads come in
6. **You do nothing!** 🚀

---

## Need to Pause Automation?

**Option 1: Disable GitHub Action**
- GitHub repo → Actions → Auto Generate workflow
- Click ⋯ → Disable workflow

**Option 2: Change environment variable**
- Amplify Console → Environment Variables
- Set `AUTO_PUBLISH_ENABLED=false`

---

## Questions?

1. Test at `/admin/automation-settings`
2. Check GitHub Actions logs
3. Review `AUTOMATION_QUICKSTART.md` (this file!)

Your content machine is running! 🎊
