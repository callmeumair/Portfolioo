# Deployment Guide

This guide covers how to deploy your portfolio website to various platforms.

## 🚀 Vercel (Recommended)

Vercel is the easiest way to deploy a Next.js application.

### Steps:

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import your repository
   - Vercel will automatically detect Next.js and configure the build

3. **Configure Environment Variables** (if needed):
   - Go to Project Settings → Environment Variables
   - Add any required environment variables

4. **Deploy**:
   - Click "Deploy"
   - Your site will be live at `https://your-project-name.vercel.app`

### Custom Domain:
- Go to Project Settings → Domains
- Add your custom domain
- Update DNS records as instructed

## 🌐 Netlify

### Steps:

1. **Build Command**: `npm run build`
2. **Publish Directory**: `.next`
3. **Environment Variables**: Add any required variables in Site Settings

## ☁️ AWS Amplify

### Steps:

1. **Connect Repository**: Link your GitHub repository
2. **Build Settings**: Use the default Next.js build settings
3. **Environment Variables**: Configure in the Amplify console

## 🐳 Docker Deployment

### Dockerfile:
```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

### Build and Run:
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## 📱 Mobile App Deployment

### PWA Configuration:
Add to `next.config.ts`:
```typescript
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
})

module.exports = withPWA({
  // your existing config
})
```

## 🔧 Pre-deployment Checklist

- [ ] Update all placeholder content with real information
- [ ] Add actual profile image (`public/profile.jpg`)
- [ ] Add actual resume PDF (`public/resume.pdf`)
- [ ] Update project URLs and GitHub links
- [ ] Test contact form functionality
- [ ] Verify all external links work
- [ ] Test responsive design on multiple devices
- [ ] Check performance with Lighthouse
- [ ] Verify SEO meta tags
- [ ] Test dark/light mode toggle
- [ ] Validate accessibility with screen readers

## 🚀 Performance Optimization

### Before Deployment:
1. **Optimize Images**:
   - Use WebP format when possible
   - Compress images without losing quality
   - Add proper alt text

2. **Bundle Analysis**:
   ```bash
   npm install -g @next/bundle-analyzer
   ANALYZE=true npm run build
   ```

3. **Lighthouse Audit**:
   - Run Lighthouse audit locally
   - Fix any performance issues
   - Aim for 90+ scores

## 🔒 Security Considerations

- [ ] Use HTTPS in production
- [ ] Set up Content Security Policy
- [ ] Validate all form inputs
- [ ] Use environment variables for sensitive data
- [ ] Regular dependency updates

## 📊 Analytics Setup

### Google Analytics:
1. Create GA4 property
2. Add tracking code to `layout.tsx`
3. Set up conversion tracking for contact form

### Vercel Analytics:
```bash
npm install @vercel/analytics
```

Add to `layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

## 🎯 SEO Optimization

### Before Going Live:
- [ ] Update all meta tags with real information
- [ ] Add structured data (JSON-LD)
- [ ] Create sitemap.xml
- [ ] Set up robots.txt
- [ ] Submit to Google Search Console
- [ ] Test social media previews

## 📈 Monitoring

### Error Tracking:
```bash
npm install @sentry/nextjs
```

### Uptime Monitoring:
- Set up UptimeRobot or similar service
- Monitor site availability
- Set up alerts for downtime

## 🔄 Continuous Deployment

### GitHub Actions:
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Vercel

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 🎉 Post-Deployment

1. **Test Everything**:
   - Visit your live site
   - Test all functionality
   - Check on different devices
   - Verify all links work

2. **Share Your Work**:
   - Update your LinkedIn profile
   - Share on social media
   - Add to your resume
   - Submit to design galleries

3. **Monitor Performance**:
   - Set up analytics
   - Monitor Core Web Vitals
   - Track user engagement
   - Regular performance audits

---

Your portfolio is now live! 🎉
