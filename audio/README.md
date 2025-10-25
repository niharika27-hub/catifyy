# Audio Files

Place your MP3 files here with the exact names listed below. The player will automatically load and play them when you click the corresponding card.

## Required Audio Files:

### Trending Songs:
- `diewithasmile.mp3` - Die with a Smile by Lady Gaga
- `gul.mp3` - Gul by Anuv Jain
- `alagasman.mp3` - Alag Asman by Anuv Jain
- `forareason.mp3` - For a Reason by Karan Aujla

### Albums:
- `forareason.mp3` - P-POP CULTURE by Karan Aujla
- `jotum.mp3` - JO Tum Mere Ho by Anuv Jain
- `mismatched.mp3` - Mismatched by Anurag Saikia
- `yjhd.mp3` - Yeh Jawaani hai Deewani by Pritam

## How to Add Songs:

### Option 1: Copy from Downloads (Windows bash)
```bash
# Example: copy a file from Downloads and rename it
cp "/c/Users/yourname/Downloads/Die with a Smile.mp3" ./audio/diewithasmile.mp3
cp "/c/Users/yourname/Downloads/Gul.mp3" ./audio/gul.mp3
```

### Option 2: Drag and Drop (Windows Explorer)
1. Open this `audio` folder in Windows Explorer
2. Drag your MP3 files into this folder
3. Rename them to match the exact names listed above

## Testing:

After adding the files, serve the project:
```bash
python -m http.server 8000
```

Then open: http://localhost:8000/index.html

Click any card - if the audio file exists, it will play! If not, a simulated player will run (no actual audio).

## Notes:
- File names are case-insensitive on Windows but keep them lowercase for consistency
- Supported formats: .mp3, .m4a, .wav
- The player script checks `data-src` first, then falls back to filename matching
