/**
 * Music API Integration for Catifyy
 * Uses Deezer API for free 30-second song previews
 * No API key required for basic usage
 */

class MusicAPI {
  constructor() {
    this.baseUrl = 'https://api.deezer.com';
    this.corsProxy = 'https://corsproxy.io/?'; // Updated CORS proxy
  }

  /**
   * Search for a song by title and artist
   * @param {string} title - Song title
   * @param {string} artist - Artist name
   * @returns {Promise<Object>} Song data with preview URL
   */
  async searchSong(title, artist) {
    try {
      const query = encodeURIComponent(`${title} ${artist}`);
      const url = `${this.baseUrl}/search?q=${query}&limit=5`; // Get more results for better matching
      
      console.log('🔍 Searching Deezer API:', title, '-', artist);
      
      const response = await fetch(url);
      
      if (!response.ok) {
        console.error('❌ Deezer API response not OK:', response.status);
        return null;
      }
      
      const data = await response.json();
      console.log('📦 Deezer API returned', data.data ? data.data.length : 0, 'results');
      
      if (data.data && data.data.length > 0) {
        // Try to find the best match
        let track = data.data[0];
        
        // Look for exact or close title match
        const titleLower = title.toLowerCase().trim();
        const artistLower = artist.toLowerCase().trim();
        
        for (const t of data.data) {
          const trackTitleLower = (t.title || '').toLowerCase().trim();
          const trackArtistLower = (t.artist && t.artist.name ? t.artist.name : '').toLowerCase().trim();
          
          // Exact match
          if (trackTitleLower === titleLower && trackArtistLower === artistLower) {
            track = t;
            console.log('✅ Exact match found!');
            break;
          }
          
          // Partial match
          if ((trackTitleLower.includes(titleLower) || titleLower.includes(trackTitleLower)) &&
              (trackArtistLower.includes(artistLower) || artistLower.includes(trackArtistLower))) {
            track = t;
            console.log('✅ Partial match found');
            break;
          }
        }
        
        // Verify preview URL exists
        if (!track.preview || track.preview === '') {
          console.log('⚠️ Track found but no preview available');
          return null;
        }
        
        const result = {
          id: track.id,
          title: track.title,
          artist: track.artist.name,
          album: track.album.title,
          album_cover: track.album.cover_medium,
          artworkLarge: track.album.cover_xl,
          preview_url: track.preview, // 30-second preview URL
          duration: track.duration,
          link: track.link
        };
        console.log('✅ Successfully found:', result.title, 'by', result.artist);
        console.log('🎵 Preview URL:', result.preview_url);
        return result;
      }
      
      console.log('⚠️ No results found on Deezer for:', title, artist);
      return null;
    } catch (error) {
      console.error('❌ Error searching song:', error);
      return null;
    }
  }

  /**
   * Get song by Deezer track ID
   * @param {number} trackId - Deezer track ID
   * @returns {Promise<Object>} Song data
   */
  async getTrackById(trackId) {
    try {
      const url = `${this.baseUrl}/track/${trackId}`;
      const response = await fetch(url);
      const track = await response.json();
      
      return {
        id: track.id,
        title: track.title,
        artist: track.artist.name,
        album: track.album.title,
        artwork: track.album.cover_medium,
        preview: track.preview,
        duration: track.duration
      };
    } catch (error) {
      console.error('Error getting track:', error);
      return null;
    }
  }

  /**
   * Search multiple songs in batch
   * @param {Array} songs - Array of {title, artist} objects
   * @returns {Promise<Array>} Array of song data with preview URLs
   */
  async searchMultipleSongs(songs) {
    const promises = songs.map(song => this.searchSong(song.title, song.artist));
    const results = await Promise.all(promises);
    return results.filter(result => result !== null);
  }

  /**
   * Get chart/popular songs
   * @param {number} limit - Number of songs to fetch
   * @returns {Promise<Array>} Popular songs
   */
  async getChart(limit = 25) {
    try {
      const url = `${this.baseUrl}/chart/0/tracks?limit=${limit}`;
      const response = await fetch(url);
      const data = await response.json();
      
      return data.data.map(track => ({
        id: track.id,
        title: track.title,
        artist: track.artist.name,
        album: track.album.title,
        artwork: track.album.cover_medium,
        preview: track.preview,
        duration: track.duration,
        position: track.position
      }));
    } catch (error) {
      console.error('Error getting chart:', error);
      return [];
    }
  }

  /**
   * Get artist's top tracks
   * @param {number} artistId - Deezer artist ID
   * @param {number} limit - Number of tracks to fetch
   * @returns {Promise<Array>} Artist's top tracks
   */
  async getArtistTopTracks(artistId, limit = 10) {
    try {
      const url = `${this.baseUrl}/artist/${artistId}/top?limit=${limit}`;
      const response = await fetch(url);
      const data = await response.json();
      
      return data.data.map(track => ({
        id: track.id,
        title: track.title,
        artist: track.artist.name,
        artwork: track.album.cover_medium,
        preview: track.preview,
        duration: track.duration
      }));
    } catch (error) {
      console.error('Error getting artist top tracks:', error);
      return [];
    }
  }
}

// Alternative: Jamendo API (Free, royalty-free music, no API key required)
class JamendoAPI {
  constructor() {
    this.baseUrl = 'https://api.jamendo.com/v3.0';
    // Free client ID for testing (get your own from https://devportal.jamendo.com/)
    this.clientId = 'YOUR_CLIENT_ID'; // Replace with your own
  }

  /**
   * Search for tracks
   * @param {string} query - Search query
   * @returns {Promise<Array>} Search results
   */
  async searchTracks(query) {
    try {
      const url = `${this.baseUrl}/tracks/?client_id=${this.clientId}&format=json&limit=20&search=${encodeURIComponent(query)}&audioformat=mp32`;
      const response = await fetch(url);
      const data = await response.json();
      
      return data.results.map(track => ({
        id: track.id,
        title: track.name,
        artist: track.artist_name,
        album: track.album_name,
        artwork: track.album_image,
        audio: track.audio, // Full MP3 URL (not just preview!)
        duration: track.duration,
        license: track.license_ccurl
      }));
    } catch (error) {
      console.error('Error searching Jamendo:', error);
      return [];
    }
  }
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MusicAPI, JamendoAPI };
}
