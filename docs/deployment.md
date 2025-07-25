# 🚀 Deployment Guide

Production deployment guide for the Starborn Dominion constitutional framework.

## 🌟 Quick Deploy

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project root
vercel

# Custom domain setup
vercel domains add starborn-dominion.dev
```

### Netlify
```bash
# Build command: npm run build
# Publish directory: dist
# Environment: Node.js 18+

# CLI deployment
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## 📦 Build Optimization

### Production Build
```bash
# Create optimized build
npm run build

# Verify build
npm run preview
ls -la dist/
```

### Performance Checklist
- [ ] Bundle size < 300KB gzipped
- [ ] First paint < 1.5s
- [ ] Lighthouse score > 95
- [ ] Mobile performance optimized

## 🔧 Environment Configuration

### Build Variables
```bash
# Optional build-time variables
VITE_APP_VERSION="1.0.0"
VITE_BUILD_DATE="2025-01-25"
```

### Production Settings
- Enable compression (gzip/brotli)
- Set appropriate cache headers
- Configure CDN for static assets
- Enable HTTPS with stellar security

---

**"Deploying the future of interplanetary governance"**