# Saved editing preferences

These product requirements were requested by the project owner on 17 October 2026.

- Show the active speaker. When a different person starts speaking, switch directly to that person's face with a hard cut.
- Do not add a pan, drag, slide, zoom, dissolve, or other animated transition between speakers. Do not add a transition delay.
- Keep a shot steady while the same person speaks. Small tracking corrections belong within that shot and must never carry the camera between different people.
- When the source contains two side-by-side screens, show both simultaneously in vertical output: left screen on top, right screen below. Retain both complete pictures and their shared source audio.
- Preserve the order of sources that are already top/bottom. Allow a divider adjustment for unequal panel sizes.
- Retain the full-scene option so demonstrations, other people, and objects can stay visible.
- Keep exact time-range clipping, optional captions, caption templates, custom text, and uploaded music available with these layouts.

Automatic layout and active-speaker identification currently use visual heuristics. Review the generated output; use the explicit Two screens or Full scene setting when automatic detection is wrong. Speaker changes are sampled at 4 Hz and confirmed retrospectively, so their timing is approximate. These limitations do not change the requested hard-cut editing rule.

The owner supplied an exported clip showing intermittent incorrect framing. Tracking version 3 resets the crop independently at detected source-camera cuts, refines those boundaries to the source frame grid, retains identities through short face-detection gaps, and compares aligned lip movement with head/lighting changes removed. Face size is only an initial tie-breaker; it cannot by itself trigger a speaker switch. Short occlusions and ambiguous motion should keep the current shot. A source-camera cut must not leave even one rendered frame at the old crop. Old clips must be re-analyzed once when exported with Speaker cuts. An already-cropped export cannot recover the people or content removed from its original source.
