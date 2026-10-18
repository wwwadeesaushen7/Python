# Skychrome v2.3.1 — ready-to-host website

This folder contains the complete browser game. No Python or Node.js installation is needed to host or play this compiled website.

## Update your existing Netlify website

1. Download the skychrome-website branch ZIP from GitHub and extract it.
2. If you enabled accounts, keep your configured `account-config.json` in the new folder.
3. Open your existing Netlify site → Deploys and upload the extracted folder containing `index.html`, `assets/`, `audio/` and `account-config.json`. Keep all these files/folders together.
4. Refresh your game website and check **v2.3.1** on the flight deck. Choose a mode and press Launch mission.

Keeping the same website address retains browser saves and custom songs. Back up player progress from Player account before clearing website data or changing sites.

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

- **Campaign:** 100 sequential levels with 4–8 stages, longer routes and harder objectives/AI as levels rise. Win to unlock the next level; earn stars and eleven milestone skin gifts.
- **Ranked:** a solo AI ladder through Cadet, Bronze, Silver, Gold, Platinum, Diamond, Ace and Legend. Complete 6–9 extended combat/route stages. Wins earn 120–150 RP; defeat, leaving or interruption costs up to 45 RP. Seven rank skins remain earned after demotion. This is not online PvP.
- **Quick flight:** Azure Horizon patrol, Crimson Skies combat, and peaceful Open Horizon free flight.
- **21 skins:** three starters plus campaign/rank gifts. Player profiles retain completed levels, best results, RP, XP, statistics, cosmetics and recent flights; export/import backups from Player account.

## Sound and personal music

Layered aircraft/weapon audio includes distinct cannon bursts and directional enemy fire. Engine/music briefly lower while firing so cannons stay audible. Lobby and match have different original themes. Settings → Your soundtrack accepts separate local music files up to 50 MB per track; files stay in this browser and are never uploaded. See [docs/AUDIO.md](docs/AUDIO.md). Keep `audio/` when deploying.

## Activate login and cloud saves

Guest saves work immediately on this device. **Email/Gmail links, Google, Facebook and account cloud saves require your own activated Supabase project; providers are not active in the download.**

Follow [docs/ACCOUNTS.md](docs/ACCOUNTS.md), run [docs/supabase.sql](docs/supabase.sql), and configure the two public values in `account-config.json`. Never place private service-role/provider/SMTP secrets in website files. Keep your configured `account-config.json` during future updates. Guest and signed-in saves remain separate; moving guest progress to an account requires confirmation.

## Performance and validation

Low, Balanced and High remain fixed graphics presets. Automatic resolution is separate and off by default. Begin with Low on slower devices. RAM alone does not determine frame rate; browser hardware acceleration and graphics hardware matter. Projectile, particle and pixel budgets remain bounded; fewer active enemies reduce combat clutter and work. See [docs/PERFORMANCE.md](docs/PERFORMANCE.md) for earlier measured results and their limits.

v2.3.1 passed **80 automated tests, 29 general browser checks and 20 mobile-control browser checks**. Tests cover every campaign/rank's arrival limits and weapon balance, one real guided missile killing a full-health opponent, cursor visibility, complete multi-stage gameplay, collisions, settings and multi-touch controls. No physical 4 GB/8 GB PC or phone was available for hardware validation. Live account providers must be checked after project activation.

For GitHub Pages, select skychrome-website and / (root) under repository Settings → Pages → Deploy from a branch. Asset paths support subdirectory hosting.
