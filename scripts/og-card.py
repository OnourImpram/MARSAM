"""Build the 1200x630 social preview card from the approved portal artwork.

The approved square artwork is placed unchanged (uniform downscale only, no crop, stretch or recolour)
on a paper background sampled from its own outer edge, so the card cannot drift from the approved visual.
Usage: python scripts/og-card.py  ->  public/assets/og-card.jpg
"""
import pathlib
from PIL import Image

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "public/assets/heritage/approved-portal-960.webp"
OUT = ROOT / "public/assets/og-card.jpg"
W, H, SIDE = 1200, 630, 566

art = Image.open(SRC).convert("RGB")
edge = [art.getpixel((x, y)) for x in (2, art.width - 3) for y in (2, art.height - 3)]
paper = tuple(sum(c[i] for c in edge) // len(edge) for i in range(3))
card = Image.new("RGB", (W, H), paper)
card.paste(art.resize((SIDE, SIDE), Image.LANCZOS), ((W - SIDE) // 2, (H - SIDE) // 2))
card.save(OUT, "JPEG", quality=88, optimize=True, progressive=True)
print(OUT.relative_to(ROOT), card.size, "paper", paper)
