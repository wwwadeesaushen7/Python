# Skychrome v2.5.0 — ready-to-host website

This folder contains the complete browser game. No Python or Node.js installation is needed to host or play this compiled website.

## Update your existing Netlify website

1. Download the skychrome-website branch ZIP from GitHub and extract it.
2. If you enabled accounts, keep your configured `account-config.json` in the new folder.
3. Open your existing Netlify site → Deploys and upload the extracted folder containing `index.html`, `assets/`, `audio/` and `account-config.json`. Keep all these files/folders together.
4. Refresh your game website and check **v2.5.0** on the flight deck. Choose a mode and press PLAY.

Keeping the same website address retains browser saves and custom songs. Back up player progress from Player account before clearing website data or changing sites.

## New worlds, textures and mission variety in v2.5.0

- **Three new maps:** Glacier Reach (alpine fjords), Saffron Canyon (sandstone riverlands) and Ember Caldera (volcanic dusk). Each has different real terrain, collision geometry, horizon, water/light/haze, weather and environment sound. In **Quick flight → Select theatre**, all existing missions support all four maps. Map choice saves locally; campaign changes theatre every five levels and ranked rotates by rank.
- **Richer graphics:** aircraft panel seams, rivets and weathering; metal/canopy reflections; tiled rock detail and snow/sandstone/basalt tones. Small shared procedural textures need no downloads or extra reflection render passes.
- **Richer sound:** turbine/combustion layers, throttle spool, afterburner transients, map wind/rumble, canyon/glacier gun tails, distance attenuation and moving stereo/Doppler flybys. Sounds remain original synthesis rather than recordings; custom music still works.
- **Shorter early levels:** levels 1–5 have one stage; 6–20 two; 21–50 three; 51–80 four; 81–100 five. Ranked now has 3–5 varied stages, with harder AI and tighter routes as rank rises.
- **Varied objectives:** patrol, low terrain runs, timed reconnaissance in blue corridors and marked ace interceptions. Finish every displayed objective to pass. Scanning elsewhere does not count; missed passes get replacements. A gold ace has more hull and faster maneuvers; one missile impact still destroys it.
- **Replay contracts:** optional hull, cannon, perfect-route or boost goals award 800–1,000 bonus score on victory. Consecutive replays offer a different contract. Existing progress, 21 skins, gifts, accounts, controls, music and fullscreen recovery remain compatible.

See [docs/WORLDS.md](docs/WORLDS.md) and [docs/MISSIONS.md](docs/MISSIONS.md). For slower devices, use **Settings → Boost FPS**. Software-rendered opening samples measured about 58 FPS Low, 43 Balanced and 32 High; your device's results vary. Details: [docs/PERFORMANCE-2.5.0.md](docs/PERFORMANCE-2.5.0.md).

## Fullscreen and FPS fixes in v2.4.1

- P/the pause button keep fullscreen. If Escape or the browser leaves fullscreen, **Resume flight enters fullscreen again** and continues the same mission without resetting health, score or progress. Browsers without native fullscreen still resume in the game window.
- Water/sky rendering, HUD updates, layout reads and active-flight compositing now do less work. Fixed pixel budgets are lower to improve frame rate. All modes, skins, controls, weapons, AI, sounds, music and saves remain available.
- **Settings → Boost FPS** explicitly selects Low plus Automatic resolution for slower devices. Manual Low/Balanced/High stay fixed unless you enable Automatic resolution yourself; High never secretly switches to Low.
- In the same software-rendered fullscreen patrol, Low improved **42.0 → 59.8 FPS**, Balanced **28.9 → 47.5 FPS**, and High **18.5 → 37.2 FPS**. At identical 800×600 rendering resolution, Balanced improved **43.0 → 54.4 FPS**. These short cloud benchmarks are not minimum-FPS guarantees for your PC. Use Boost FPS for the most headroom. Details and limitations: [docs/PERFORMANCE-2.4.1.md](docs/PERFORMANCE-2.4.1.md).

## A game hangar lobby in v2.4.0

The lobby now fills the browser viewport like a game menu. Your equipped jet sits in a real 3D hangar, surrounded by player/rank tiles, mode selection, aircraft customization and a clear PLAY button. Drag the aircraft background to inspect it and use the reset icon to restore the view. Native lobby fullscreen is available from the top icon.

**Every existing feature remains available.**

- PLAY offers Campaign, Ranked and all Quick flight missions, with real briefings and objective totals.
- HANGAR, the skin-count tile and Customize open all 21 aircraft finishes, with the same unlock/reward rules. Equipping a skin updates the showroom immediately.
- The profile tile/P1 avatar opens account login, callsigns, cloud sync/conflicts and backup import/export. Campaign and rank tiles open the 100-level map and eight-rank ladder.
- MISSION LOG and PERSONAL BEST retain flight history. GUIDE and CONTROLS retain manuals, keyboard bindings and mobile preferences. GRAPHICS and Settings retain fixed presets and optional automatic resolution. Sound, music and personal lobby/match files remain available in Settings.
- Portrait, landscape, small phone and tablet layouts retain every menu destination; PLAY stays visible below an internally scrolling briefing. Returning from a sortie restores the hangar.
- Flight controls, enemy/weapon balance, 100 campaign levels, ranked progression, skin gifts, audio, local profiles and account integration retain their existing behavior.

The showroom shares the flight aircraft's geometry/materials and uses the same renderer/context and graphics pixel budgets. It adds no external texture/model downloads, real-time shadow maps or post-processing. Idle lobby rendering remains capped at 30 FPS; reduced motion disables the small idle aircraft movement. See [docs/LOBBY.md](docs/LOBBY.md) for the complete feature navigation guide.

## Less crowded combat and stronger weapons

- At most **3 active enemies in Campaign/Quick flight**, or **4 in Ranked**, instead of the old ten-aircraft cap.
- Enemies arrive **one at a time**: campaign arrivals are 6–8 seconds apart; Azure patrol uses 8 seconds and Crimson uses 6.5 seconds. Ranked arrivals are 5.1–6.5 seconds apart. Full airspace does not queue a burst of reinforcements.
- Reinforcements pause after completing a stage's combat goal, then resume in the next stage. Existing enemy jets finish their attack runs. Complete every stage's combat AND gate goals to pass; waiting never wins.
- Cannons deal **3 damage per round**, three times the previous damage. Both rounds hitting delivers six damage per volley. Enemies retain their 16–34 hull, varied flight roles and evasive turns.
- **One missile impact destroys any enemy jet**, including a full-health opponent at the highest rank. Missiles keep their normal homing, travel time and seven-second recharge.
- The mouse arrow is hidden over active airspace while the aiming reticle remains visible. Pausing, dialogs and results restore the cursor; menu buttons remain usable.

Long mission routes, stage counts, level/rank objectives, player progress, rewards, audio and mobile control preferences are retained. See [docs/MISSIONS.md](docs/MISSIONS.md).

## Controls

**PC:** WASD/arrows steer; mouse aims; left mouse/Space fires cannons; Shift boosts; Q/E rolls; F launches a missile; P/Escape pauses. Release Q/E to recover to level flight. Keyboard bindings can be customized in All controls.

**Mobile:** left stick steers, right stick aims and fires independently. Release the right stick to hold your sight. LOCK tracks a visible enemy's lead, NEXT switches targets, dragging the aim stick takes over, and CENTER resets the sight. Separate FIRE, BOOST, MISSILE and ROLL buttons are available. Tap ☷ to change sensitivity, dead zone, stick size, handedness, tracking and aim-and-fire. Mobile layouts support portrait, landscape and smaller screens, with a viewport-filling fallback when native fullscreen is unavailable. See [docs/MOBILE.md](docs/MOBILE.md).

Water/terrain contact destroys your jet; an aircraft collision destroys both jets. Green gates restore hull and boost. Fullscreen launch has a windowed fallback; opening settings or losing focus pauses the flight.

## Modes, progression and gifts

- **Campaign:** 100 sequential levels, from 1–2 early stages to five advanced stages, with varied objectives and harder AI as levels rise. Win to unlock the next level; earn stars and eleven milestone skin gifts.
- **Ranked:** a solo AI ladder through Cadet, Bronze, Silver, Gold, Platinum, Diamond, Ace and Legend. Complete 3–5 varied combat/route stages. Wins earn 120–150 RP; defeat, leaving or interruption costs up to 45 RP. Seven rank skins remain earned after demotion. This is not online PvP.
- **Quick flight:** Azure Horizon patrol, Crimson Skies combat, and peaceful Open Horizon free flight.
- **21 skins:** three starters plus campaign/rank gifts. Player profiles retain completed levels, best results, RP, XP, statistics, cosmetics and recent flights; export/import backups from Player account.

## Sound and personal music

Layered aircraft/weapon audio includes distinct cannon bursts and directional enemy fire. Engine/music briefly lower while firing so cannons stay audible. Lobby and match have different original themes. Settings → Your soundtrack accepts separate local music files up to 50 MB per track; files stay in this browser and are never uploaded. See [docs/AUDIO.md](docs/AUDIO.md). Keep `audio/` when deploying.

## Activate login and cloud saves

Guest saves work immediately on this device. **Email/Gmail links, Google, Facebook and account cloud saves require your own activated Supabase project; providers are not active in the download.**

Follow [docs/ACCOUNTS.md](docs/ACCOUNTS.md), run [docs/supabase.sql](docs/supabase.sql), and configure the two public values in `account-config.json`. Never place private service-role/provider/SMTP secrets in website files. Keep your configured `account-config.json` during future updates. Guest and signed-in saves remain separate; moving guest progress to an account requires confirmation.

## Performance and validation

Low, Balanced and High remain fixed graphics presets. Automatic resolution is separate and off by default. Use Settings → Boost FPS on slower devices, or choose Low for a fixed render resolution. RAM alone does not determine frame rate; browser hardware acceleration and graphics hardware matter. Projectile, particle and pixel budgets remain bounded; fewer active enemies reduce combat clutter and work. See [docs/PERFORMANCE.md](docs/PERFORMANCE.md) for earlier measured results and their limits.

v2.5.0 passed **88 automated tests and 126 browser checks**: 8 maps/variety, 9 fullscreen/FPS controls, 16 lobby, 29 general gameplay, 20 mobile controls, 23 audio/music and 21 progression/account checks. Checks cover every lobby entry point, native fullscreen and return, drag inspection, skin preview/persistence, small-screen layouts, live gameplay and collisions, full multi-stage victories and reward gifts, touch input, music files, profiles, backups and the real Supabase SDK against simulated provider responses. Live providers still require project activation. No physical 4 GB/8 GB PC or phone was available for hardware validation. Live account providers must be checked after project activation.

For GitHub Pages, select skychrome-website and / (root) under repository Settings → Pages → Deploy from a branch. Asset paths support subdirectory hosting.
