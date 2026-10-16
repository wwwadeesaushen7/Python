# Skychrome v2.2.1 — ready-to-host website

This folder contains the complete browser game. No Python or Node.js installation is needed to host or play the compiled website.

## Update your existing Netlify website

1. Download the `skychrome-website` branch ZIP from GitHub and extract it.
2. If you already enabled accounts, keep your configured `account-config.json` in the new folder. Open your existing Netlify site, go to **Deploys**, and upload the extracted folder containing `index.html`, `assets/`, `audio/`, and `account-config.json`.
3. Refresh your game website. The flight deck should show **v2.2.1**. Choose Campaign, Ranked, or Quick flight and press **Launch mission**.

Launch requests real browser fullscreen. If the browser does not allow it, the game starts in its window. Escape exits fullscreen and pauses; P pauses/resumes.

## Cannon sound update in v2.2.1

Hold **left mouse** or **Space** for sharp twin-cannon bursts with a muzzle crack, low pressure thump, mechanical ring and short tail. These replace the quiet generic shot effect. Enemy cannons have quieter sounds placed in their direction. Engine and music briefly lower while you fire so the cannon stays audible, then return smoothly after release. Sound effects volume and master mute control gunfire. Three short samples are generated once and reused within the existing 24-voice limit.

## Tougher opponents, roll recovery and audio in v2.2.0

- **Armored enemies:** 16–34 hull points. A single missile or cannon volley cannot destroy them. Aim steadily at the moving-target lead diamond; the target hull bar shows remaining strength.
- **Four AI roles:** interceptors, flankers, divers and sweepers change altitude and direction, make attack passes and perform evasive turns when hit. Aircraft bank and pitch with their movement.
- **Q / E rolls recover automatically:** release the key and the jet smoothly returns to level flight. The camera remains steady for aiming.
- **Layered aircraft and combat sound:** engine roar, turbine whine, wind, afterburner power, cannons, missiles, hits, explosions and nearby jet passes. Effects use stereo positioning and distance attenuation.
- **Separate original music:** Blue Horizon plays in the lobby; Afterburn plays during matches. Music crossfades when entering/leaving a flight and lowers during pause. Audio begins after your first click or tap.
- **Your own music:** open Settings → Your soundtrack. Choose separate Lobby and Match files (up to 50 MB each), preview them, or use the defaults. Supported formats depend on your browser; MP3 is a good choice. Files stay in this browser and are never uploaded. The status shows whether a file is saved or only available for this session.
- Master volume, sound effects volume and music volume are independent. Custom music streams through the browser; audio effects have a 24-voice limit. Enemy/projectile/rendering limits remain capped.

See [docs/AUDIO.md](docs/AUDIO.md) for music settings and local-file storage. Keep the `audio/` folder when uploading the website. Existing progress, account setup and rewards remain compatible.

## Long missions and flight controls

- **Campaign:** every level now has 4–8 stages. Complete both combat and gate goals in each stage, then finish all stages to win. Routes and objective counts grow with level, targeting roughly 6–17 minutes at normal cruise speed; boost and pilot skill change the actual time.
- **Ranked:** 6–9 extended stages with progressively tougher enemy formations and precision gates, targeting roughly 9–20 minutes at normal cruise speed.
- Higher levels/ranks increase targets, route length, enemy hull, squad size, attack frequency, damage, aim prediction, and maneuvers; gate clearance gets tighter. Enemy/projectile/effect/rendering limits remain bounded.
- Waiting never wins a mission. The timer is a failure deadline. Extra kills in an early stage cannot complete later stages; missed gates are replaced along the route.
- **Q / E rotate the jet left / right through 360°.** Release to smoothly return to level flight. Steering follows the jet's roll; the aiming camera stays level. Visible aircraft rotation, cannon muzzles, and ground/aircraft collisions use the roll orientation. Touchscreen roll buttons are included.
- **F launches missiles.** Old saved controls migrate automatically; if F already has a custom binding, Controls shows the selected replacement key. Fullscreen HUD shows stage goals, operation totals, and roll angle.

See [docs/MISSIONS.md](docs/MISSIONS.md) for objective counts, timing, controls, and completion rules. Existing player progress and earned rewards remain compatible.

## Progression and player accounts

- **100 campaign levels** across ten chapters, sequential unlocks, replay, three-star results, and a complete level map.
- **Ranked sorties against AI pilots**: Cadet, Bronze, Silver, Gold, Platinum, Diamond, Ace, and Legend. Wins earn 120–150 RP; a crash, loss, quit, or interrupted ranked flight costs up to 45 RP. This is a solo ladder, not online PvP.
- **21 jet skins**: three starters, eleven level-milestone gifts, and seven permanent rank rewards. Equip unlocked finishes in Customize; locked finishes show their requirements.
- **Player profiles** save callsigns, completed levels and best stars/scores, RP/peak rank, XP, flight statistics, equipped cosmetics, and the last 30 flights. Player account includes backup export/import.
- **Supabase integration** for Gmail/email login links, Google, Facebook, and account cloud saves. Guest and signed-in saves stay separate; moving guest progress into an account requires confirmation. Cloud revision checks prevent silent overwrites from another device.

## Activate login and cloud saves

Guest saves work immediately on this device. **The login providers and cloud saves require your own Supabase project and provider activation. They are not active in the download.**

Follow [docs/ACCOUNTS.md](docs/ACCOUNTS.md), run [docs/supabase.sql](docs/supabase.sql) in your Supabase project, and edit the two public values in `account-config.json` before uploading the folder. The guide includes email delivery, Google, Facebook, redirect URLs, and verification steps. Never place private service-role/provider/SMTP secrets in website files.

For future game updates, keep your configured `account-config.json` and the same website address. Guest progress belongs to that browser and origin; export a backup before clearing browser data or changing sites.

## Controls and performance

Mouse aims; left click or Space fires; WASD / arrows steer; Shift boosts; Q/E roll; F launches a guided missile; P / Escape pauses. Touch controls appear on phones. Green gates restore hull and boost. Terrain/water contact destroys your jet; an aircraft collision destroys both jets.

Low, Balanced, and High remain fixed graphics presets. Automatic resolution is a separate option, off by default. Selecting a preset disables Auto and restores full preset sharpness. Start with Low on slower computers. The settings dialog identifies software rendering when browser hardware acceleration is unavailable.

The renderer retains its existing pixel/entity/effect limits, batching, and light water shader. Skin rewards add no downloaded textures or aircraft models. The account SDK is loaded only when the account service is configured.

v2.2.1 validation: **74 automated gameplay/profile/cloud/Postgres tests and 23 audio/music browser checks pass.** Audio checks exercise actual output from mouse, Space and enemy firing, sustained fire, release, background ducking/recovery, independent muting, custom files, storage and phone layout. The v2.2.0 update also passed 27 general browser checks and 21 progression/account checks. Live account providers still require project activation. See [docs/PERFORMANCE.md](docs/PERFORMANCE.md) for software-rendering measurements and their limits.

For GitHub Pages, choose `skychrome-website` and `/ (root)` under repository Settings → Pages → Deploy from a branch. Asset paths support subdirectory hosting.
