# Skychrome v2.0.0 — ready-to-host website

This folder contains the complete browser game. No Python or Node.js installation is needed to host or play the compiled website.

## Update your existing Netlify website

1. Download the `skychrome-website` branch ZIP from GitHub and extract it.
2. Open your existing Netlify site, go to **Deploys**, and upload the extracted folder containing `index.html`, `assets/`, and `account-config.json`.
3. Refresh your game website. The flight deck should show **v2.0.0**. Choose Campaign, Ranked, or Quick flight and press **Launch mission**.

Launch requests real browser fullscreen. If the browser does not allow it, the game starts in its window. Escape exits fullscreen and pauses; P pauses/resumes.

## New in v2.0.0

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

Mouse aims; left click or Space fires; WASD / arrows steer; Shift boosts; E launches a guided missile; P / Escape pauses. Touch controls appear on phones. Green gates restore hull and boost. Terrain/water contact destroys your jet; an aircraft collision destroys both jets.

Low, Balanced, and High remain fixed graphics presets. Automatic resolution is a separate option, off by default. Selecting a preset disables Auto and restores full preset sharpness. Start with Low on slower computers. The settings dialog identifies software rendering when browser hardware acceleration is unavailable.

The renderer retains its existing pixel/entity/effect limits, batching, and light water shader. Skin rewards add no downloaded textures or aircraft models. The account SDK is loaded only when the account service is configured.

Validation: **56 automated gameplay/progression/profile/cloud/Postgres tests, 26 regression browser checks, and 20 new-feature browser checks pass.** The new-feature browser tests cover real fullscreen, live campaign victories and reward gifts, persistence, ranked penalties, and the actual Supabase SDK with simulated provider responses. Live Google/Facebook/email login must be checked after activating your projects. No physical 4 GB or 8 GB PC was available; see [docs/PERFORMANCE.md](docs/PERFORMANCE.md) for software-rendering measurements and their limits.

For GitHub Pages, choose `skychrome-website` and `/ (root)` under repository Settings → Pages → Deploy from a branch. Asset paths support subdirectory hosting.
