# Audio assets for the JohnPat website
#
# ALBUM CATALOG PREVIEWS (required for /catalog playback):
#   public/audio/previews/NN-slug.mp3
#   See public/audio/previews/README.md for the full filename list.
#   These must be separate ~30-second MP3 clips.
#   Do NOT point the album player at full-length masters.
#
# FULL MASTERS:
#   Do not expose or link full-length WAV files in the catalog, HTML, or JS.
#   WAV masters under this folder are gitignored and must not be referenced
#   by the public album player.
#
# Legacy songwriter concept demos (song detail pages) may still reference
# MP3 paths under /audio/{slug}.mp3 when a track is marked released.
# Album catalog playback never uses those full files — only /audio/previews/.
