# Skychrome v1.1.1 — ready-to-host website

This folder contains the complete browser game. No Node.js or Python installation is needed to host or play this built website.

## Update your existing Netlify website

1. Download the skychrome-website branch ZIP from GitHub and extract it.
2. Open your existing site in Netlify, go to Deploys, and upload the extracted folder containing index.html and assets/.
3. Open your game website and refresh it. The flight deck shows v1.1.1.

## Graphics selection fix in v1.1.1

Low, Balanced, and High now stay at the selected preset's full resolution. Low FPS does not automatically reduce sharpness. Automatic resolution is a separate opt-in switch, off by default, including for settings saved by older versions. When enabled, its actual percentage is visible in Settings and the graphics badge. Selecting any preset disables automatic resolution and immediately restores full sharpness for that preset. Fixed High may produce a lower frame rate on slower hardware.

## Features from v1.1

- Lighter water rendering, batched terrain and aircraft, instanced effects, fixed pixel budgets, and optional adaptive resolution.
- Stable mouse aiming and click-to-fire; straight cannon shots converge on the sight. A lead diamond helps track moving enemies.
- Terrain, water, and wing impacts crash your jet. Colliding with an enemy jet destroys both aircraft, including during damage immunity.
- Low-altitude warning, explosion sequence, debrief, and retry.
- Pausing stops scene rendering. The menu preview is capped at 30 FPS.

Controls: mouse aims; left click or Space fires; WASD / arrows steer; Shift boosts; E launches a guided missile; P / Escape pauses. Touch controls appear on phones. Start with Low graphics on slower computers. The settings dialog reports software rendering if browser hardware acceleration is unavailable.

Validation: 36 graphics/gameplay/terrain tests and 26 production-browser checks pass. In the v1.1 cloud software-rendering benchmark with automatic resolution enabled, Balanced combat improved from 9.8 to 51.7 FPS; hardware results vary. See docs/PERFORMANCE.md for methods and limitations.

For GitHub Pages, choose skychrome-website and / (root) under repository Settings → Pages → Deploy from a branch. All asset paths support subdirectory hosting.
