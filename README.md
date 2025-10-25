# Catifyy - Music Streaming Web Player 🎵

A beautiful, interactive music streaming web application with neumorphic design using the Deezer API for music playback.

## Project Structure

```
catifyy/
├── HTML Pages (8 pages)
│   ├── index.html          - Home page with trending songs & albums
│   ├── songs.html          - Song library with filtering
│   ├── albums.html         - Albums with player bar
│   ├── library.html        - User library overview
│   ├── liked.html          - Liked songs page
│   ├── playlist.html       - User playlists with modal player
│   ├── create.html         - Create new playlists
│   ├── login.html          - Login page
│   ├── signup.html         - Registration page
│   └── about.html          - About page
│   └── contactus.html      - Contact page
│
├── Stylesheets
│   ├── index.css           - Main styling
│   └── create.css          - Playlist creation page styles
│
├── JavaScript
│   └── music-api.js        - Deezer API integration
│
├── Media
│   ├── images/             - Album & artist artwork
│   └── audio/              - Local audio files (optional, for testing)
│
├── Configuration
│   ├── .gitignore          - Git ignore rules
│   ├── DEPLOYMENT.md       - Deployment guide
│   └── audio/README.md     - Audio setup guide
```

## Features

### 🎵 Music Playback
- Streaming via Deezer API (30-second previews)
- Multiple player instances on different pages
- Bottom player bar on all pages
- Play/pause/next/previous controls
- Progress slider with time display

### 💾 User Library
- **Liked Songs**: Save favorite songs with timestamps
- **Playlists**: Create and manage custom playlists
- **Collaboration**: Invite friends to playlists
- **Search**: Real-time song search functionality

### 🎨 User Interface
- Neumorphic design system
- Responsive mobile layout
- Smooth animations and transitions
- Keyboard shortcuts (Space, Arrow keys)
- Visual playing indicators

### 📱 Pages Overview

| Page | Features |
|------|----------|
| **Index** | Trending songs, albums, artist cards |
| **Songs** | Filtered library, play controls, like button |
| **Albums** | Album grid with auto-playing songs |
| **Liked** | Saved songs with shuffle option |
| **Playlists** | User created playlists, modal player |
| **Create** | Playlist creation with image upload |
| **Library** | Statistics and collection overview |

## Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **API**: Deezer API (no authentication required)
- **Storage**: Browser LocalStorage
- **Design**: Neumorphic design system
- **Icons**: Font Awesome 6.7.2

## Installation & Setup

### Local Development
```bash
# Clone the repository
git clone https://github.com/niharika27-hub/catifyy.git
cd catifyy

# Start local server
python -m http.server 8000

# Open in browser
http://localhost:8000/index.html
```

### Deployment
See **DEPLOYMENT.md** for detailed deployment instructions

**Quick Deploy to Vercel:**
1. Go to https://vercel.com
2. Connect GitHub account
3. Select `catifyy` repository
4. Click Deploy
5. Done! Your site will be live

## Data & LocalStorage

### Stored Data
- **catifyy_liked_songs**: Array of liked songs with timestamps
- **catifyy_playlists**: Array of user-created playlists

### Data Structure
```javascript
// Liked Song
{
  title: "Song Title",
  artist: "Artist Name",
  artwork: "./images/song.jpg",
  likedAt: 1729876543210
}

// Playlist
{
  id: 1234567890,
  name: "Playlist Name",
  description: "Description",
  cover: "base64-encoded-image",
  songs: [{title, artist, artwork}, ...],
  collaborators: ["Friend 1", "Friend 2"],
  createdAt: "2025-10-25T10:30:00Z",
  songCount: 5
}
```

## Music API Integration

### Deezer API Features
- ✅ No authentication required
- ✅ 30-second song previews
- ✅ Album artwork
- ✅ Artist information
- ✅ Song search functionality

### API Methods
```javascript
const api = new MusicAPI();

// Search for a song
const track = await api.searchSong('Gul', 'Anuv Jain');

// Get chart/popular songs
const popular = await api.getChart(25);

// Get artist top tracks
const topTracks = await api.getArtistTopTracks(artistId, 10);
```

## File Sizes & Performance

| Item | Size |
|------|------|
| Repository | 17 MB |
| HTML Files | ~2.5 MB |
| CSS Files | ~200 KB |
| JavaScript | ~50 KB |
| Images | ~14 MB |
| Audio (optional) | 87 MB |

**Notes:**
- Audio files are stored locally only (not in git)
- API streams music, no downloads needed
- Optimized for fast loading
- Mobile responsive

## Browser Support

- Chrome/Brave: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Edge: ✅ Full support
- Mobile: ✅ Responsive design

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| **Space** | Play/Pause |
| **→** | Next song |
| **←** | Previous song |
| **Esc** | Close modals |

## Troubleshooting

### Songs Not Playing
- Check browser console for API errors
- Verify internet connection
- Try refreshing the page
- Some songs may not be on Deezer

### Data Not Saving
- Ensure LocalStorage is enabled in browser
- Check browser privacy settings
- Clear cookies and try again

### Images Not Loading
- Verify `images/` folder exists
- Check image file names (case-sensitive)
- Inspect network tab in DevTools

## Future Enhancements

- [ ] User authentication & accounts
- [ ] Full song uploads (requires backend)
- [ ] Social sharing features
- [ ] Offline mode with caching
- [ ] Mobile app (React Native)
- [ ] Dark mode toggle
- [ ] Lyrics display
- [ ] Song recommendations

## License

This project is open source and available under the MIT License.

## Credits

- **API**: Deezer API
- **Icons**: Font Awesome
- **Design**: Neumorphic Design System
- **Developer**: Niharika

## Contact & Support

- GitHub: https://github.com/niharika27-hub/catifyy
- Issues: https://github.com/niharika27-hub/catifyy/issues
- Email: Contact via About page

---

**Deployed at**: [Your Vercel/GitHub Pages Link]

Last Updated: October 25, 2025
