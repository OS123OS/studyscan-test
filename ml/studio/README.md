# 3D-Fotostudio (Testfotos für die Kantenerkennung)

Eigene, frei nutzbare Testfotos: WebGL2-Szenen in Chromium (Playwright).
Blattstapel mit Wölbung, Tischmuster, Bücher, Stifte, Handy, Laptop, Finger,
weiches Licht mit Schatten, Schatten des Fotografen, Glanz, Handy-Kamera-Effekte.

    node render.js <ordner> <von> <bis> [anteil-ohne-blatt]   # PNG + meta_*.json
    python3 gl_prep.py <ordner> <bench-ordner> [seed]          # für tool/edge_bench.dart

Chromium mit `--use-angle=swiftshader` (läuft ohne Grafikkarte), etwa 1,5 s je Bild.
Alles ist selbst erzeugt (keine fremden Bilder), also kommerziell nutzbar.
