# Deployment Guide

## How to Deploy Catifyy to Vercel

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Add New Project"
3. Select your `catifyy` repository
4. Click "Deploy" (no configuration needed!)
5. Wait 1-2 minutes for deployment
6. Your site will be live at: `https://catifyy.vercel.app`

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from your project directory
cd /c/Users/victus/Desktop/catifyy
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (select your account)
# - Link to existing project? N
# - Project name? catifyy
# - Directory? ./
# - Override settings? N
```

### Option 3: Deploy to GitHub Pages

1. Go to your repo: https://github.com/niharika27-hub/catifyy
2. Click "Settings" tab
3. Scroll to "Pages" section
4. Source: Deploy from branch "main"
5. Folder: / (root)
6. Click "Save"
7. Site will be live at: `https://niharika27-hub.github.io/catifyy`

## Important Notes

### ✅ What Works on Deployment:
- All pages (index, songs, library, playlists, etc.)
- Deezer API music streaming (30-second previews)
- Playlist creation and management
- Like/unlike functionality
- Search features
- Responsive design

### ⚠️ Limitations:
- Songs play for 30 seconds only (Deezer API free tier)
- Some songs may not be found on Deezer
- Internet connection required for music playback

### 🎵 How Music Works in Production:
1. User clicks a song
2. App searches Deezer API for matching track
3. If found: plays 30-second preview
4. If not found: shows error and skips to next song
5. No audio files are stored or downloaded

### 🔧 Troubleshooting:

**Problem: Songs not playing**
- Solution: Check browser console (F12) for API errors
- Deezer API should work without CORS issues
- Make sure you have internet connection

**Problem: Blank page on deployment**
- Solution: Check that all HTML files are in the root directory
- Verify vercel.json configuration (if using custom config)

**Problem: Images not loading**
- Solution: Check that image paths use relative paths (`./images/`)
- Verify images folder is committed to git

### 📱 Test Your Deployment:

After deploying, test these features:
1. Click songs on home page - should play via API
2. Create a playlist - should save in browser localStorage
3. Like songs - should persist after refresh
4. Open playlist - songs should be clickable and playable
5. Library page - should show stats and playlists

### 🚀 Performance Tips:

- Site should load in < 2 seconds
- First song may take 2-3 seconds to find via API
- LocalStorage works on all modern browsers
- Mobile responsive design works on all devices

## Support

If you encounter issues:
1. Check browser console for errors
2. Verify internet connection
3. Try different browsers
4. Clear browser cache and reload

Happy streaming! 🎵✨
