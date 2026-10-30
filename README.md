# Skychrome v2.7.0 — ready-to-host website

This folder contains the complete browser game. No Python or Node.js installation is needed to host or play this compiled website.

## Update your existing Netlify website

1. Download the `skychrome-website` branch ZIP from GitHub and extract it.
2. If you enabled accounts, keep your configured `account-config.json` in the new folder.
3. Open your existing Netlify site → Deploys and upload the extracted folder containing `index.html`, `assets/`, `audio/` and `account-config.json`. Keep them together.
4. Refresh your game website and check **v2.7.0** on the flight deck. Choose a mode and press **PLAY**.

Keeping the same website address retains browser saves and custom songs. Export a player backup before clearing site data or changing sites. This download does not automatically deploy your Netlify site.

## New graphics and sound

- Physically based aircraft paint, roughness detail, map-specific reflections, a clear-coated canopy and High-quality panel relief.
- More natural theatre colors, a clearer sky and sun, layered mountains, finer terrain and separate grass/snow/sandstone/basalt texture detail.
- Animated water normals, viewing-angle reflections, sun glints, shallow shoreline color and moving surf.
- Bounded ground details plus expanding fire/smoke and smaller explosion sparks.
- Layered turbine and stereo afterburner audio, sharper cannon pressure/crack, metallic impacts, missile ignition, weightier explosions, moving flybys and map-specific outdoor reflections.
- Mission totals, gauges and messages now fit around long briefings on desktop and phones.

All art/sound additions are original procedural assets; they are not photographic scans or real aircraft recordings. See [docs/GRAPHICS-2.7.0.md](docs/GRAPHICS-2.7.0.md) and [docs/AUDIO.md](docs/AUDIO.md).

## Existing game features

All four maps, 100 campaign levels, the solo AI ranked ladder, varied patrol/recon/ace objectives, 21 skins and milestone gifts remain available. Profiles, guest/account separation, save backups, optional Supabase login/cloud saves, fullscreen recovery, desktop/mobile controls, separate lobby/match music and personal music files are retained.

- **Campaign:** complete every displayed objective to unlock the next level. Stages increase from 1–2 early on to five at advanced levels. Eleven milestone skins are earned through level 100.
- **Ranked:** a solo AI ladder from Cadet to Legend with tougher objectives and seven rank rewards. It is not online PvP.
- **Quick flight:** Azure Horizon patrol, Crimson Skies combat and peaceful Open Horizon, with all four selectable maps.
- **Combat:** up to three active enemies in campaign/quick flight, or four in ranked. Cannons deal three damage per round; one missile impact destroys an enemy. Ground contact crashes the player; ramming destroys both jets.
- **Physics:** assisted thrust/drag, climb and turn energy loss, roll lift loss, wind, braking and recoverable low-speed stalls. The aiming camera stays level.

## Controls

**PC:** WASD/arrows steer; mouse aims; left mouse/Space fires; Shift boosts; B brakes; Q/E rolls; F launches a missile; P/Escape pauses. Release Q/E to level out. Release the brake and boost to recover from a stall. All controls supports custom key bindings.

**Mobile:** separate steering and aim sticks, aim-and-fire, target tracking, FIRE/BOOST/BRAKE/MISSILE/ROLL/CENTER controls, and saved sensitivity, dead-zone, size and handedness preferences. See [docs/MOBILE.md](docs/MOBILE.md).

PLAY requests fullscreen; Resume restores fullscreen after a native exit when the browser permits it. Unsupported browsers use playable windowed flight.

## Sound, saves and accounts

Settings keeps independent master, effects and music volumes. Lobby and match have different built-in themes. **Your soundtrack** accepts separate local music files up to 50 MB per track; these stay in this browser and are never uploaded. Keep `audio/` when deploying.

Guest progress works immediately. Gmail/email links, Google, Facebook and cloud saves require your own activated Supabase project. Follow [docs/ACCOUNTS.md](docs/ACCOUNTS.md), run [docs/supabase.sql](docs/supabase.sql), and keep your configured public `account-config.json` during updates. Private provider/service credentials do not belong in website files.

## Performance and validation

Low, Balanced and High keep their fixed pixel budgets. Automatic resolution is separate and off by default. High never silently switches to Low. Use **Settings → Boost FPS** for slower devices; it explicitly selects Low plus Auto. The richer materials cost more GPU time, and High may run below 40 FPS on slow/software rendering.

This release passed **108 automated tests and 146 browser checks**. All four maps and shader variants, live gameplay, progression, accounts, music, mobile controls, fullscreen and resource cleanup were exercised. Provider responses were simulated; live accounts still need activation. See [docs/PERFORMANCE-2.7.0.md](docs/PERFORMANCE-2.7.0.md) for measured frame rates, the before/after comparison and hardware-testing limits.

For GitHub Pages, select `skychrome-website` and `/ (root)` under repository Settings → Pages → Deploy from a branch. Asset paths support subdirectory hosting.
