# Skychrome v2.2.0 — long operations and roll controls

Campaign and ranked games now use multi-stage operations. The new objective budgets replace the short v2.0 sorties; existing level unlocks, earned skins, profiles and account configuration remain compatible.

## Completing a mission

- Every stage has its own hostile and flight-gate objectives. Finish both to advance to the next stage.
- Finish every stage to win immediately. There is no forced minimum survival time or waiting period after the last objective.
- Extra kills in an early stage earn score but cannot satisfy later stage objectives. Enemy reinforcements remain active while you fly the route.
- Missing a gate does not fail the whole mission: replacement gates continue along that stage's route. A completed gate objective stops producing gates until the next stage.
- The countdown is the operation's failure deadline. Waiting until it expires never awards a win.
- The fullscreen HUD shows current stage goals, whole-operation totals, elapsed time, and your roll angle. Pause preserves the current flight.

## Campaign

There are still 100 levels. Counts, formation sizes, enemy hull, attack frequency/damage/aiming, and maneuvering increase as levels rise; gate clearance decreases. Both route length and objective budgets grow. Enemy counts, projectiles, effects and rendering pixels retain their existing caps.

| Operation | Stages | Hostiles | Gates | Cruise estimate | Deadline |
| --- | ---: | ---: | ---: | --- | --- |
| Level 1 | 4 | 32 | 28 | ~6 min | 11 min |
| Level 25 | 5 | 52 | 38 | ~8 min | 14 min |
| Level 50 | 6 | 73 | 50 | ~11 min | 18 min |
| Level 75 | 7 | 94 | 61 | ~14 min | 23 min |
| Level 100 | 8 | 116 | 72 | ~17 min | 27 min |

Estimates assume normal cruise speed and successful gates. Boost, missed gates, combat and pilot skill change the actual completion time. These are objectives to complete, not timers to wait out.

## Ranked

Ranked mode remains a solo ladder against AI pilots. Missions are longer and tougher than the previous version, with precision gates and combat in every stage. Every promotion increases the operation's demands.

| Rank | Stages | Hostiles | Gates | Cruise estimate | Deadline |
| --- | ---: | ---: | ---: | --- | --- |
| Cadet | 6 | 54 | 40 | ~9 min | 15 min |
| Bronze | 6 | 66 | 46 | ~11 min | 18 min |
| Silver | 7 | 78 | 52 | ~12 min | 20 min |
| Gold | 7 | 90 | 58 | ~14 min | 23 min |
| Platinum | 8 | 102 | 64 | ~15 min | 24 min |
| Diamond | 8 | 114 | 70 | ~17 min | 27 min |
| Ace | 9 | 126 | 76 | ~19 min | 30 min |
| Legend | 9 | 138 | 82 | ~20 min | 32 min |

Wins still award 120–150 RP. Defeats, quits, and interrupted ranked flights cost up to 45 RP. Earned rank skins remain unlocked after demotion.

## Rotate your jet

| Action | Default control |
| --- | --- |
| Roll left | Hold **Q** |
| Roll right | Hold **E** |
| Missile | **F** |
| Steer | **WASD** / arrows |
| Aim and fire | Mouse / left click or Space |
| Boost | Shift |
| Pause | P / Escape |

Q/E provide continuous 360-degree axial roll. Release either roll key to return smoothly to the normal level angle. Steering follows the aircraft's roll orientation, including inverted flight. The aiming camera stays level, and the cannon muzzles and collision probes rotate with the visible aircraft. Touchscreens have separate left/right roll buttons.

Old saved keys migrate automatically. The old default E missile moves to F. If F already has a custom action, an unused key is chosen for missiles and displayed in Controls and the missile HUD. Other custom bindings are retained where they do not conflict with the new roll keys.

## Update your site

Extract the new website ZIP and deploy the folder containing index.html to your existing Netlify site's Deploys page. If you activated accounts, keep your configured account-config.json in that folder. The same website address keeps browser saves. Refresh and check v2.2.0.
