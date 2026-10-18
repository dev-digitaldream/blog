---
title: "Idiophile One"
description: "My free, open-source macOS music player: a vintage hi-fi front panel with VU meters, an inspectable audio path, parametric EQ, and network sources."
date: 2026-10-18
lang: en
translation: idiophile-one
draft: false
cover: "/uploads/idiophile-one/idiophile-one-blue-glass.webp"
applicationCategory: "MultimediaApplication"
operatingSystem: ["macOS 14+", "Apple Silicon", "Intel"]
technologies: ["Swift", "SwiftUI", "AVAudioEngine", "Core Audio"]
repoURL: "https://github.com/dev-digitaldream/idiophile-one"
---

## Why I built it

I came across listings for old Technics, Pioneer, and Sansui amplifiers, the kind with big illuminated needles dancing along with the drums. I don't have the space or time to collect and restore those beautiful machines, so I decided to recreate that feeling on my Mac. It started as a virtual front panel with VU and PEAK meters, and gradually became a full-fledged music player.

And yes, **Idiophile** is a friendly jab at the excesses of the audiophile world: outrageously priced cables, miracle accessories, and ordinary network switches sold as special audiophile equipment. The app itself is free, subscription-free, and open source under GPL-3.0-or-later.

![Idiophile One in its three finishes: Champagne, Black, and Blue Glass](/uploads/idiophile-one/idiophile-one-finishes.webp)

## What works in the alpha

- A vintage-inspired hi-fi front panel, twin meters, spectrum analyzer, and three finishes: Champagne, Black, and Blue Glass.
- A local library with albums, artists, composers, genres, and tracks.
- Internet radio and DLNA / UPnP servers on your network.
- A parametric equalizer with up to 20 filters, AutoEq and Equalizer APO profile imports, and level-matched A/B comparison.
- **DIRECT** mode and an **Audio Path** panel showing the signal chain. **Verify** compares samples submitted to Core Audio against the source file, within the current engine's limits.

The **BIT-PERFECT** indicator only lights up when the conditions checked by the player are met. It cannot guarantee that no processing happens downstream of Core Audio, including inside a DAC or speakers. The Mac's built-in speakers cannot be treated as an end-to-end bit-perfect output.

## Before installing it

This is **alpha 0.1.0-alpha.2**. Expect bugs. It has been tested with only a small number of DACs. The engine currently uses 32-bit floating-point AVAudioEngine; sources above 24-bit precision are rounded to 24 bits, and the application makes that limitation visible. There is no DSD, room correction, or commercial streaming integration yet. The app is not notarized; the README explains how to authorize it on macOS.

**Download:** [GitHub releases](https://github.com/dev-digitaldream/idiophile-one/releases). If you find a bug or want to tell me which DAC you use, [open an issue on GitHub](https://github.com/dev-digitaldream/idiophile-one/issues).

[Read the full story behind Idiophile One, its vintage meters, technical decisions, and the limits of this alpha.](/blog/idiophile-one-vintage-mac-en/)
