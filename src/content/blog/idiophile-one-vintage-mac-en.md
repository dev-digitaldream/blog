---
title: "Idiophile One: I built a free Mac audio player inspired by vintage hi-fi"
description: "Vintage amplifiers, glowing VU meters, and a desire to recreate their charm on a Mac: how my free, open-source audio player Idiophile One came to life."
date: 2026-10-18
lang: en
draft: false
category: "blog"
tags: ["macOS", "audio", "audiophile", "vintage hi-fi", "open source", "AI"]
cover: "/uploads/idiophile-one/idiophile-one-blue-glass.webp"
sticker: best-of-the-best
stickerRotation: -14
stickerScale: 1.04
translation: "idiophile-one-lecteur-audiophile-vintage-mac"
excerpt: "I wanted to bring back the big, glowing needles of old amplifiers without buying a full hi-fi system. That bit of nostalgia became Idiophile One, a free Mac player that also takes the audio signal path seriously."
metaTitle: "Idiophile One: free vintage-style audiophile player for Mac"
metaDescription: "Why I built Idiophile One: vintage VU meters, DACs, verifiable bit-perfect playback, EQ, internet radio and DLNA. Free, open-source Mac audio player in alpha."
---

I recently found myself browsing listings for old hi-fi amplifiers, those beautiful machines from the 1970s and 1980s, back when Technics, Pioneer, Sansui and the others made equipment with real character. And suddenly the nostalgia kicked in: the huge faceplates, the knobs, the warm backlighting and, above all, those magnificent **wide, illuminated needle meters** dancing along to the music. You could almost feel every drum hit and bass note just by watching the needles move. None of that was essential to listening to a record, of course, but it had so much charm! These days we can make tiny devices with astonishing technical performance. Still, I sometimes miss being able to *see* the music as well as hear it.

Buying a vintage amplifier crossed my mind. Except I don't have the space, I don't really have the time to restore a decades-old piece of equipment and, to be perfectly frank, I hardly listen to music anymore. It would be a shame to buy a massive amplifier just to admire its meters three times a year. So I wondered: why not recreate that front panel on my Mac? A virtual player with proper VU and PEAK meters, a spectrum analyzer and the atmosphere of old-school hi-fi. At first, all I wanted was to bring back something I used to love. Then, inevitably, the project started growing.

And that's where **Idiophile One** comes in. Before the audiophiles reach for their pitchforks, I probably owe them a small apology for the name! I have nothing against the pursuit of good sound reproduction, quite the opposite. But you do see some spectacular nonsense online: power cables costing thousands, accessories making extraordinary promises, and ordinary Netgear network switches dressed up as audiophile equipment and resold at absurd prices. At some point you start wondering whether electrons need a membership card to travel properly. **Idiophile** is a little joke about those excesses, not an attack on people who genuinely love music. Quite the opposite: I wanted to offer something **free, open source and subscription-free**, where technical claims can be checked rather than merely printed on a pretty box.

And since I'm a **vibe coder**, not a professional developer, I decided to build this player with the help of AI, just as I have with my other little projects. My original specification could almost fit into one sentence: a Mac player that looks like a beautiful vintage hi-fi system. But once I started looking seriously at what happens between a music file and a digital-to-analog converter, or DAC, I discovered a whole world of formats, sample rates, processing and trade-offs. The project that was supposed to make a few needles move became an audio player with genuine technical ambitions. That's me all over: I set out to build a front panel and end up inspecting the journey of individual audio samples.

## Beautiful needles, but not just for show

![Idiophile One in Blue Glass finish, playing FLAC through a FiiO USB DAC](/uploads/idiophile-one/rack-idle.webp)

Idiophile One looks like a network player or integrated amplifier, with **VU and PEAK meters**, a spectrum analyzer and three finishes: **Champagne, Black and Blue Glass(Mc..sh;)**. I wanted an interface worth looking at, without putting the decoration ahead of the music. There's also a mini player which, according to the project's measurements, uses roughly **2% of one CPU core**. Help is available in French and English.

I wasn't trying to copy a particular piece of equipment or reproduce every feature of an expensive audiophile app. I wanted to recapture a feeling with something I could actually use on my Mac. And if I was going to make a player, it might as well explain what it does to the audio signal.

![Idiophile One in its three finishes: Champagne, Black and Blue Glass](/uploads/idiophile-one/idiophile-one-finishes.webp)

## The famous bit-perfect question: why not verify it?

The term **bit-perfect** is everywhere in audiophile circles. The basic idea is simple: send audio samples to the DAC without changing them. But plenty can happen between a file and a computer's audio output. So Idiophile One tries to make that journey visible instead of just lighting up a reassuring indicator.

The app adjusts the output sample rate to match each file and selects the most precise available integer format. Its **DIRECT** mode requests exclusive output access and removes the equalizer and ReplayGain from the audio path. The **BIT-PERFECT** indicator only lights up when the player's defined conditions are satisfied; otherwise it stays off and explains why. **Audio Path** shows the stages between the file and the DAC, while **Verify** compares the samples passed to Core Audio against the file's samples. The point is to have something concrete to inspect, not to ask people to trust a little LED.

![Audio Path showing the signal chain from file to output](/uploads/idiophile-one/audio-path.webp)

There's an important distinction: verification covers the audio path under the application's control and the data passed to Core Audio. It does not measure the physical output of a DAC. Likewise, the Mac's built-in speakers apply their own processing, so they cannot guarantee end-to-end bit-perfect playback. For this kind of use, I recommend an **external USB DAC**. I'd rather spell out those limitations than sell digital magic. There's already plenty of that elsewhere.

## An equalizer, and a way to compare without cheating on volume

Not everyone has the same headphones, speakers or preferences. So I included a **parametric equalizer with up to 20 filters**, double-precision calculations, an exact bypass and automatic headroom. Settings are stored per audio output, so there's no need to rebuild the same corrections every time a device changes.

The app also imports **AutoEq** and **Equalizer APO** profiles from a file, drag-and-drop or the clipboard, and includes built-in headphone profiles. One feature I particularly care about is **level-matched A/B comparison while listening**. Our ears have a habit of preferring whatever plays a little louder. The aim here is to reduce that bias and compare settings on more equal terms. No need for a $3,000 cable to discover that the volume was simply higher.

![Parametric EQ editor with level-matched A/B comparison](/uploads/idiophile-one/eq-editor.webp)

## Local music, internet radio and files on the NAS

![Idiophile One compact mini-player with playback controls](/uploads/idiophile-one/compact.webp)

A beautiful player that could only open three files on the Desktop wouldn't be terribly useful. Idiophile One therefore includes a **music library** with albums, artists, composers, genres, tracks and instant search. I also added **internet radio** through the radio-browser.info directory: when a station offers several streams, the app selects the best one based on the advertised codec and bitrate.

There's also automatic **DLNA / UPnP** server discovery, making it possible to find music on a NAS without manually entering every address. It's a way to bring a local library, radio stations and network files together in one interface. They're different uses, but I thought it was a shame to need several applications just to find music that's already sitting at home.

![Network sources and internet radio in Idiophile One](/uploads/idiophile-one/network.webp)

## It's an alpha, not an audiophile miracle

To be clear, **Idiophile One is still at version 0.1.0-alpha.2**. Bugs are possible, and I've only tested it with a small number of DACs. For a first run, it's wise to keep the volume reasonable, especially with a powerful amplifier or sensitive headphones.

The current audio engine is based on **AVAudioEngine using 32-bit floating point**. This means integer sources above 24 bits cannot necessarily retain their original precision; the app reports that limitation. That's exactly why I don't want to suggest everything is bit-perfect under every condition. There is no **DSD** yet, no room correction and no streaming-service integration. The app isn't notarized yet either: macOS may require manual approval on first launch, with the steps documented in the README.

I'd rather show the current limitations than pretend I've built, between two AI conversations, the perfect player the entire industry was waiting for. Beautiful needles don't fix bugs.

## What I'd like to improve next

The next major step would be a **dedicated Core Audio engine**, with an integer signal path, support for 32-bit sources and exact gapless playback. I'd also like to build an **iPad version**, especially for USB-C DACs, then work on DSD and room correction. Those are goals, not features available today.

As for streaming, **Qobuz** and **Tidal** interest me, but only through their official programs and interfaces, subject to their approval. I have no plans to integrate **Deezer, Spotify or Apple Music** unless those services provide third-party apps with the audio-signal access this type of player needs. There's no point promising what the platforms don't allow.

## Free, open source, with plenty left to learn

Idiophile One is free and its source code is published under **GPL-3.0 or later**. It runs on **macOS 14 and newer**, on both **Apple Silicon and Intel Macs**. For now it's an alpha project, born from a little nostalgia and grown far more ambitious than expected. I'm not claiming to have revolutionized Mac audio, and I know it will take more work and real user feedback to learn where it holds up and where it needs fixing.

The app and source code are on [GitHub](https://github.com/dev-digitaldream/idiophile-one), along with the [downloads](https://github.com/dev-digitaldream/idiophile-one/releases) and a place to [report bugs](https://github.com/dev-digitaldream/idiophile-one/issues). Feedback about which DACs work will be especially useful, because I don't have a collection of converters to test against.

It all began with me browsing vintage amplifier listings and admiring their big glowing needles. Now I've got my own player, three finishes, an audio path to inspect and an already-growing list of future features. I still don't have room for a fifteen-kilo hi-fi system, but at least the meters can dance on my screen. That's a small victory in itself.
