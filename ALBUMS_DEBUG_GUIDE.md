# 🔍 Albums Playback - Debugging Guide

## Problem: Songs Not Playing in Album Modal

### ✅ How to Debug

**Step 1: Open Browser Console**
- Press `F12` on your keyboard
- Click the "Console" tab

**Step 2: Click an Album**
1. Go to http://localhost:8000/albums.html
2. Click "P-POP Culture" or "YJHD" album
3. Modal should appear with songs
4. Check console for messages

**Step 3: Click a Song in the Modal**
1. Click any song number or play button
2. **Look at console for these messages (in order)**:

```
🎵 Playing song #1: [Song Title] by [Artist]
📂 Album: [Album Name]
🔢 Total songs in album: [Number]
🔍 Searching via API: [Title] - [Artist]
📦 API response: [Object with preview_url]
✅ Found on API: [URL]
▶️ Attempting to play audio...
✅ NOW PLAYING via API
```

---

## 🎯 Expected Behavior

| Step | What Should Happen | Check For |
|------|-------------------|-----------|
| Click album | Modal opens with song list | Modal visible, songs showing |
| Click song | Console shows 🎵 message | Check console output |
| API search | Deezer API responds | Should see 📦 message in 2-3s |
| Audio plays | 30-second preview starts | Look for ✅ NOW PLAYING |
| Player updates | Bottom bar shows now playing | Song title, artist, artwork |

---

## ❌ If Songs Don't Play - What to Check

### Check 1: Is MusicAPI Loaded?
```javascript
// In console, type:
typeof MusicAPI
// Should show: "function"
// If shows "undefined", script didn't load - refresh page
```

### Check 2: Is Music API Search Working?
```javascript
// In console, type:
const api = new MusicAPI();
api.searchSong('Die With a Smile', 'Lady Gaga, Bruno Mars').then(r => console.log(r))

// Should see result in 2-3 seconds:
// {id: [...], title: "Die With a Smile", preview_url: "https://...", ...}
```

### Check 3: Check Console Errors
Look for **red error messages** in console:
- **Network Error**: Check internet connection
- **CORS Error**: Browser blocking API (unlikely, Deezer allows)
- **Undefined variable**: Refresh page

### Check 4: Try These Known Working Songs
These should definitely play:
- **Die With a Smile** - Lady Gaga, Bruno Mars
- **Shape of You** - Ed Sheeran  
- **Gul** - Anuv Jain

---

## 🛠️ Common Issues & Fixes

### Issue: "⚠️ MusicAPI not loaded"
**Cause**: JavaScript file didn't load
**Fix**: 
1. Refresh the page (Ctrl+R or Cmd+R)
2. Check if `music-api.js` loaded:
   - Go to DevTools Network tab
   - Should see "music-api.js" with "200" status
3. If 404, file is missing - check file exists

### Issue: "⚠️ No preview URL found"
**Cause**: Song not on Deezer API
**Fix**:
1. Try different song
2. Try the "known working songs" above
3. Song might be region-locked

### Issue: "❌ Audio error"
**Cause**: Preview URL broken or browser blocked audio
**Fix**:
1. Check browser audio permissions
2. Try different browser
3. Try the test songs

### Issue: Nothing in Console
**Cause**: 
- Console not open when you clicked
- Clicked wrong element
- Page not fully loaded
**Fix**:
1. Refresh page (Ctrl+R)
2. Wait 2 seconds for full load
3. Open console BEFORE clicking
4. Click album again

---

## 📊 Testing Checklist

- [ ] Page loads: http://localhost:8000/albums.html
- [ ] Album cards visible
- [ ] Clicking album opens modal
- [ ] Songs display in modal with numbers
- [ ] Clicking song shows logs in console
- [ ] Console shows 🎵 message within 1 second
- [ ] API search completes (2-3 seconds)
- [ ] ✅ NOW PLAYING appears in console
- [ ] Audio plays (you hear sound)
- [ ] Bottom player bar shows song info
- [ ] Play/Pause button toggles state

---

## 📱 What's Happening Behind the Scenes

```
User clicks song in modal
         ↓
playSong(index) function called
         ↓
currentSongs array used to get song data
         ↓
MusicAPI.searchSong() called with title + artist
         ↓
Deezer API searched (takes 2-3 seconds)
         ↓
If found: preview_url returned
         ↓
new Audio(preview_url) creates audio element
         ↓
currentAudio.play() starts playback
         ↓
Player UI updates (title, artist, artwork)
         ↓
30-second preview plays ▶️
```

---

## 💡 Key Points

1. **API Search Takes Time**: 2-3 seconds is normal, be patient
2. **30-Second Previews**: Deezer API only gives short clips
3. **Not All Songs Available**: Regional songs may not be on Deezer
4. **Console is Your Friend**: Always check F12 console first
5. **Refresh If Stuck**: Press Ctrl+R to reload everything

---

## 🎵 Test Right Now

1. **Open**: http://localhost:8000/albums.html
2. **Press**: F12 (open console)
3. **Click**: "P-POP Culture" album
4. **Click**: First song in modal
5. **Watch**: Console for messages
6. **Listen**: For audio (30 second preview)

**If you see ✅ NOW PLAYING and hear music → Everything works!**

---

**Need More Help?**
- Check browser console for error messages (red text)
- Try different song from the list
- Refresh page and try again
- Make sure internet is connected

**Server Status**: ✅ Running on port 8000
