# Deployment Guide

Learn how to deploy your portfolio to the web and make it live!

## Table of Contents

1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [Netlify Deployment](#netlify-deployment)
3. [Vercel Deployment](#vercel-deployment)
4. [GitHub Pages](#github-pages)
5. [Traditional Web Hosting](#traditional-web-hosting)
6. [Domain Setup](#domain-setup)
7. [Post-Deployment](#post-deployment)

---

## Pre-Deployment Checklist

Before deploying, make sure:

- [ ] All personal information is updated
- [ ] Profile image is in `assets/images/profile.jpg`
- [ ] All links are correct and working
- [ ] No broken images or 404 errors
- [ ] Mobile responsive design is working
- [ ] No console errors (check F12 DevTools)
- [ ] All buttons and navigation work
- [ ] Social media links are updated
- [ ] Email address is current

---

## Netlify Deployment (Recommended - Easiest)

### Step 1: Prepare Your Repository

```bash
# Initialize Git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"
```

### Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository (e.g., `portfolio`)
3. Follow the instructions to push your code

### Step 3: Deploy on Netlify

1. Visit https://netlify.com
2. Click "Sign up" (use GitHub account for easiest setup)
3. Click "New site from Git"
4. Select "GitHub"
5. Choose your `portfolio` repository
6. Basic build settings:
   - Build command: (leave empty)
   - Publish directory: `.` (root directory)
7. Click "Deploy site"
8. Wait for deployment to complete (2-5 minutes)

### Step 4: Verify Deployment

- Check the generated URL (something like `random-name.netlify.app`)
- Test all links and functionality
- Verify responsive design

### Step 5: Custom Domain (Optional)

1. In Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Enter your domain (e.g., `yourname.com`)
4. Follow DNS configuration instructions

---

## Vercel Deployment

### Step 1: Setup (Same as Netlify)

Push your code to GitHub as shown above

### Step 2: Deploy on Vercel

1. Go to https://vercel.com
2. Click "Sign Up" (use GitHub)
3. Click "New Project"
4. Import your repository
5. Framework: Select "Other"
6. Root directory: `.`
7. Click "Deploy"

### Step 3: Done!

Your site is live at `your-repo-name.vercel.app`

---

## GitHub Pages (Free, Simple)

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Name it `username.github.io` (replace username with your GitHub username)
3. Make it public
4. Create repository

### Step 2: Push Your Code

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/your-username.github.io.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to repository Settings
2. Scroll to "Pages" section
3. Source: Select "Deploy from a branch"
4. Branch: Select `main`
5. Folder: Select `root`
6. Save

### Step 4: Access Your Site

Visit: `https://your-username.github.io`

_Note: Takes a few minutes to activate_

---

## Traditional Web Hosting

### Using FTP (FileZilla)

1. **Get FTP Credentials**

   - From your hosting provider's control panel
   - Usually: FTP Host, Username, Password

2. **Download FileZilla**

   - https://filezilla-project.org/
   - Install and open

3. **Connect to Server**

   - File → Site Manager → New Site
   - Enter FTP credentials
   - Click "Connect"

4. **Upload Files**

   - Left side: Your computer (navigate to portfolio folder)
   - Right side: Remote server (public_html folder)
   - Drag files from left to right
   - Wait for upload to complete

5. **Verify Upload**
   - Visit your domain in browser
   - Check that `index.html` is in the root directory

### Using cPanel Upload (If Available)

1. Log in to cPanel
2. Go to "File Manager"
3. Navigate to `public_html`
4. Click "Upload" button
5. Upload all files
6. Set permissions (usually automatic)

---

## Domain Setup

### Using Netlify's Nameservers

1. Buy domain from registrar (GoDaddy, Namecheap, etc.)
2. In your domain registrar, change nameservers to:
   - `dns1.p05.netlify.com`
   - `dns2.p05.netlify.com`
   - `dns3.p05.netlify.com`
   - `dns4.p05.netlify.com`
3. Wait 24-48 hours for propagation
4. Add domain in Netlify dashboard

### Using A Records

1. Get your hosting's IP address
2. In domain registrar's DNS settings:
   - Type: `A`
   - Value: Your IP address
3. Wait for propagation (24-48 hours)

### Using CNAME Records

1. Get your hosting's CNAME value
2. In domain registrar's DNS settings:
   - Type: `CNAME`
   - Value: Provided by your host
3. Wait for propagation

---

## Post-Deployment

### Verify Everything Works

- [ ] Site loads on your domain
- [ ] All pages load correctly
- [ ] Links work properly
- [ ] Mobile view is responsive
- [ ] Images load
- [ ] Buttons are clickable

### Set Up SSL/TLS (HTTPS)

- Netlify/Vercel: Automatic
- GitHub Pages: Automatic
- Traditional hosting: Ask your provider (usually free)

### Setup Analytics (Optional)

#### Google Analytics

1. Go to https://analytics.google.com
2. Create property for your website
3. Copy tracking code
4. Add to `<head>` of `index.html`:

```html
<!-- Google Analytics -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "GA_MEASUREMENT_ID");
</script>
```

### Monitor Performance

- Check Google Search Console
- Monitor page speed with Lighthouse
- Check for broken links regularly

### Keep Updated

- Update content regularly
- Fix broken links
- Update projects
- Add new certifications
- Keep dependencies updated

---

## Troubleshooting Deployment

### Site Shows 404 Not Found

- Ensure `index.html` is in root directory
- Check file names (case-sensitive on Linux servers)
- Verify upload completed successfully

### Styles Not Loading

- Check that `css/styles.css` path is correct
- Hard refresh browser (Ctrl+Shift+R)
- Verify file was uploaded

### Images Not Showing

- Check image file paths
- Verify images are in `assets/images/` folder
- Ensure file names match exactly

### Domain Not Working

- Wait 24-48 hours for DNS propagation
- Check DNS settings in domain registrar
- Verify nameservers are correct

### Site Looks Different on Live

- Hard refresh browser
- Clear browser cache
- Check different browsers
- Test on different devices

---

## Environment Variables (If Needed)

Create `.env` file in root (for sensitive data like API keys):

```
REACT_APP_API_KEY=your_key_here
```

Note: Plain HTML/CSS/JS projects don't need this usually.

---

## SSL/HTTPS Setup

### Netlify

Automatic - enabled by default ✅

### Vercel

Automatic - enabled by default ✅

### GitHub Pages

Automatic - enabled by default ✅

### Traditional Hosting

1. Contact your provider
2. Usually free with cPanel
3. Or use Let's Encrypt (free)

---

## Continuous Deployment

### Auto-Deploy on Code Push

- Netlify: Automatic when you push to GitHub
- Vercel: Automatic when you push to GitHub
- GitHub Pages: Automatic when you push to main branch

To trigger:

```bash
git add .
git commit -m "Update portfolio"
git push
```

Your site updates automatically! ⚡

---

## Costs Overview

| Service       | Cost        | Setup     |
| ------------- | ----------- | --------- |
| Netlify       | Free        | 5 mins    |
| Vercel        | Free        | 5 mins    |
| GitHub Pages  | Free        | 10 mins   |
| Domain (.com) | $10-15/year | Registrar |
| Web Hosting   | $2-10/month | FTP       |

**Cheapest Start**: Free hosting + free domain forwarding

---

## Getting Help

If deployment fails:

1. Check the provider's error logs
2. Verify all files uploaded
3. Check file permissions (755 for folders, 644 for files)
4. Contact hosting provider support
5. Check provider's documentation

---

**Your portfolio is now live! 🎉**

Share your URL with the world and keep your portfolio updated regularly.

Good luck!
