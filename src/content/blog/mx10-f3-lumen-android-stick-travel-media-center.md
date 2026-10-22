---
title: "MX10-F3: how I turned a €12 Android stick into a clean travel media center with Lumen"
description: "My Allwinner H313 MX10-F3 was a locked-down IPTV dongle stuck at 720p. FEL backup, cleanup, 1080p, OwnTV and my own Lumen TV launcher changed the experience."
date: 2026-10-22
updated: 2026-10-22
updateNote: "Clarified the eMCP memory layout, DRM limitations and certified Google TV alternatives, with a clearly disclosed affiliate link."
lang: en
translation: "mx10-f3-lumen-stick-android-12-euros"
draft: false
category: "blog"
tags: ["Android TV", "Allwinner", "H313", "Lumen", "ADB", "FEL", "OwnTV", "AI", "travel"]
cover: "/uploads/mx10-f3-lumen/01-lumen-paysage.webp"
excerpt: "I bought this MX10-F3 for about €12 to use on hotel and Airbnb TVs. Behind its hacked-together IPTV firmware I found a capable H313, root access, FEL recovery and enough headroom to turn it into a clean travel dongle with my own Lumen interface."
metaTitle: "MX10-F3 H313: from IPTV dongle to Lumen media center"
metaDescription: "A hands-on MX10-F3 Allwinner H313 rebuild: ADB/FEL access, full eMMC backup, debloat, 1080p, Widevine L3, OwnTV and my custom Lumen launcher."
---

When I travel, whether I am staying in a hotel or an Airbnb, I like having my own apps on the television. Hotel TV interfaces are often locked down, useful apps are missing, and some remotes feel as if they were designed after a very long meeting about human suffering. So I started carrying a tiny Android HDMI stick in my bag.

Mine is an **MX10-F3**, bought for roughly **€12** at the time. Yes, twelve euros. I recently found the same kind of listing closer to €30 depending on the promotion, so apparently even the bottom drawer of Chinese electronics has discovered inflation. At €12 I was willing to forgive a lot. At nearly €30, I would compare alternatives before ordering one today.

And there is quite a lot to forgive.

On paper it is a small Android dongle based on an **Allwinner H313**. In practice, my unit felt less like a general-purpose Android TV device and more like an IPTV terminal prepared for one very specific use. Very few apps, questionable system properties, a 720p interface and a software stack designed to launch a handful of preinstalled services rather than let the owner do whatever they want.

My goal was simple: plug it into a hotel TV, join Wi-Fi, launch YouTube, VLC, my streaming services or my own legal media sources, then put it back in my bag when I leave. I wanted something small and responsive, not a reverse-engineering project.

Naturally, it became a reverse-engineering project.

## Open it before changing it

The first useful surprise came when I opened the case.

<figure class="article-screenshot">
  <img src="/uploads/mx10-f3-lumen/mx10-f3-pcb.webp" alt="MX10-F3 circuit board with Allwinner H313 SoC and Samsung KMR8X0001M-B608 memory" width="1024" height="768" loading="lazy" decoding="async" />
  <figcaption>The MX10-F3 opened up: Allwinner H313 on the left, Samsung KMR8X0001M-B608 eMCP on the right.</figcaption>
</figure>

The SoC really is an **Allwinner H313**, a 64-bit quad-core Cortex-A53 with a Mali-G31 GPU. Allwinner rates it for H.265 decoding up to 4K60 and HDMI output up to 4K60. So the problem with my stick was not simply that the processor was hopelessly weak.

The second chip visible on my board is a **Samsung KMR8X0001M-B608**. Component catalogs identify it as an eMCP combining **16 GB of eMMC and 2 GB of LPDDR3**, two separate types of memory inside one package. This is not 16 GB shared with RAM: eMMC is persistent storage, while LPDDR3 is the working memory Android uses. The space available to the user will be smaller than the advertised storage capacity because of partitions and system files. That matters because the information reported by cheap boxes and marketplace listings can be creative. A part number printed directly on the package is a much better place to start.

Before doing anything else, I followed one rule that I strongly recommend with this kind of hardware: **do not flash or delete anything until you have a usable backup**. The stick may have cost only twelve euros, but finding the exact weird firmware later can be harder than finding another twelve euros.

## Finding a real way in

At first, the device looked deliberately unfriendly to tinkering. The USB port appeared to be power-only, the ADB shell looked restricted, and **FEL**, Allwinner's low-level recovery mode, was not immediately accessible.

After wasting some time on false leads, including identifying the wrong USB device on my PC, I discovered two very useful facts about my unit: **USB ADB worked**, and the device was already **rooted**.

For FEL mode, the tool that finally made the process practical for me was **[Tenkai ROM Studio](https://xdaforums.com/t/tool-windows-v0-3-0-tenkai-rom-studio-universal-allwinner-firmware-suite-imagewty-rom-builder-magisk-root-patcher-unbrick-flasher.4799388/#post-90709062)**, which I found on XDA. A sincere thank you to its developer. On my unit it gave me a much cleaner route into Allwinner's low-level recovery path. Once the MX10-F3 was in FEL, it showed up with Allwinner's USB VID **1F3A**.

I am deliberately not turning this section into a universal “short these pads and flash this image” tutorial. These dongles often share commercial names while hiding different board revisions inside. A procedure that works on my MX10-F3 can turn another version into a tiny HDMI paperweight.

## Seventeen partitions before the first real change

Once I had low-level access, I backed everything up.

I dumped **all 17 eMMC partitions**, around **11.3 GB of data**, and verified the images with MD5 checksums. With the 16 GB Samsung eMCP identified on the board, that size finally made sense. More importantly, I had a safety net. If I broke something, I could restore my own firmware instead of hunting for a dubious image on an abandoned forum.

It was the least exciting part of the project, and probably the most important.

## Android, but not really Android TV

Once I started inspecting the software, the “prepared device” nature became obvious. My unit contained an unusually tiny system-app set compared with a normal Android TV installation, and some properties were spoofed all the way to identifying the device as a **Pixel 2**.

The interface was also locked to **720p**.

That was especially frustrating because the H313 itself can do far more. The bottleneck was clearly the vendor software stack and its configuration. I forced the output to **1920 × 1080**, adjusted density to **280 dpi**, and cleaned up a number of display settings. For my use, stable 1080p became the sensible target.

I also tested 4K. The kernel and HDMI path can genuinely reach it, which matches Allwinner's H313 specifications, but the Android layer on this firmware is hacked together enough that I would much rather have predictable 1080p than a “4K” checkbox for marketing purposes.

## Clean the attic before redesigning the living room

The debloat started with the vendor software. I removed about a dozen IPTV/vendor packages I did not need: preinstalled players, questionable stores and fake-looking firmware utilities.

I did this only after backing up the device and in a way I could reverse.

To see how much of the sluggishness was really caused by the launcher, I first tried **FLauncher**. On my stick, as a rough real-world measurement, a heavier Google TV-style launcher could sit around **365 MB of RAM**, while FLauncher was closer to **50 MB**. With only 2 GB available, that difference is immediately visible.

That experiment proved something important: the H313 was not the main problem. The device simply needed software that behaved as if RAM still had a price.

## Then I built Lumen

I had already started simplifying and rethinking this stick before the current wave of minimalist TV launchers became so visible. Later I came across **[FreeMyTV](https://freemytv.io/)**. I genuinely like its starting point: put the owner's apps back at the center, remove advertising, and make the home screen lighter. Some of those principles clearly inspired me.

But it was not quite what I wanted.

FreeMyTV mainly targets existing Google TV and Android TV devices with a reversible, no-root launcher replacement approach. I was working with an already-rooted, heavily modified Chinese dongle, a basic remote and a very specific use case: **hotel and Airbnb televisions**.

So I did what I increasingly seem to do: instead of continuing to adapt someone else's tool, I started building my own.

**Lumen** is my own launcher. It is not a FreeMyTV fork and it is not a theme on top of FLauncher. I used **GLM 5.3** and **Astra 6** as development partners to speed up experiments, fix remote-control behaviour and build the interface I actually wanted.

<figure class="article-screenshot">
  <img src="/uploads/mx10-f3-lumen/01-lumen-paysage.webp" alt="Lumen home screen on the MX10-F3 with YouTube, OwnTV, Apple TV, Prime Video, Netflix and VLC" width="1200" height="675" loading="lazy" decoding="async" />
  <figcaption>Lumen today: very little clutter, large remote-friendly targets and the apps I actually use.</figcaption>
</figure>

I wanted big elements readable from across the room, obvious focus states, discreet weather and time, and no sponsored rows deciding what I should watch.

Background landscapes can rotate automatically. In my current settings, rotation is configurable and caching avoids needlessly fetching the same data. I can also choose which apps appear on the home screen and change their order directly with the remote.

<figure class="article-screenshot">
  <img src="/uploads/mx10-f3-lumen/04-reglages-lumen.webp" alt="Lumen settings screen on the MX10-F3" width="1200" height="675" loading="lazy" decoding="async" />
  <figcaption>Lumen settings: backgrounds, posters, refresh, landscape rotation, clock and other options stay remote-friendly.</figcaption>
</figure>

<figure class="article-screenshot">
  <img src="/uploads/mx10-f3-lumen/05-choix-applications.webp" alt="Lumen screen for selecting and reordering home applications" width="1200" height="675" loading="lazy" decoding="async" />
  <figcaption>Choosing and reordering home-screen applications directly inside Lumen.</figcaption>
</figure>

I also wanted a little life on the home screen without rebuilding a giant billboard. Lumen can display a visual media highlight in the background while keeping the actual applications within one click.

<figure class="article-screenshot">
  <img src="/uploads/mx10-f3-lumen/03-lumen-series.webp" alt="Lumen showing a series background with streaming applications below" width="1200" height="675" loading="lazy" decoding="async" />
  <figcaption>A visual highlight, while the apps remain the center of the screen.</figcaption>
</figure>

## Replacing IPTV apps without promoting piracy

The original firmware had clearly been prepared around IPTV applications. I did not want to keep those.

I replaced that part of the setup with **[OwnTV](https://github.com/ahXN00/OwnTV)**, an open-source Android TV player that works with user-supplied M3U, Xtream or Stalker sources. Thanks to its developer too: it is modern, remote-first and a much better fit for the kind of clean setup I wanted on this dongle.

One important point: **OwnTV ships no channels, subscriptions, playlists or streams**. The project says so explicitly. There are public and legal streams on the web and on GitHub, and of course people may have their own legitimate sources, but this article is not a guide to turning a €12 stick into a piracy box. I use OwnTV as a player, with sources I am legally allowed to access.

Replacing suspicious preinstalled IPTV software with an open-source player does not magically make every playlist legal.

## Limits that Lumen cannot fix

There is a point where vibe coding ends and cryptographic keys begin.

My MX10-F3 is limited to **Widevine L3**. That DRM level can run many services, but it lacks the trusted certification chain required for every form of protected HD playback. In my testing, **Netflix remains limited to 480p**, regardless of what the H313 can decode or what resolution Lumen itself uses.

Can this limitation be bypassed? Security research sometimes demonstrates workarounds for individual protections, but the layers should not be confused. For example, [this Medium article](https://medium.com/@ysmtb24/i-broke-netflixs-screen-protection-in-one-line-of-code-9717f2e22062) describes how turning off hardware acceleration in an Electron application can make normally hidden video frames visible to screen capture. That is interesting for understanding browser rendering, but **it does not turn Widevine L3 into L1 or make my MX10-F3 a Netflix-certified HD or 4K device**. License enforcement, device attestation and each platform's quality restrictions are separate issues. I'm not claiming vulnerabilities can never exist, only that there is no simple, reliable, legitimate setting that replaces missing hardware and software certification.

That creates a funny situation: the SoC can decode 4K video, the HDMI output can go far beyond 480p, Lumen runs in 1080p, yet Netflix can still decide that the actual protected video stays in standard definition because the DRM chain is not certified.

It is a perfect example of the difference between **hardware capability** and a **certified consumer product**.

## Would I still recommend the MX10-F3 today?

At **€12**, yes, if you enjoy tinkering.

For that money my unit gave me an H313, 2 GB of RAM, 16 GB eMMC, Wi-Fi, HDMI and enough headroom to build exactly the travel device I wanted. The experiment alone was worth the price.

At around **€30**, I would be much more cautious.

Buy this kind of dongle knowing that the commercial name may not guarantee the board revision inside the package, Android properties can be spoofed, DRM certification is limited, and recovery can be painful if the firmware is unusual. If your only goal is good-quality Netflix in a hotel, a properly certified streamer is the more sensible purchase. **Strong** sells the [LEAP 41](https://www.strong-eu.com/products/receivers/srt-41), a certified Google TV stick advertised with Widevine L1 and Netflix and Prime Video certifications. **Xiaomi** offers the [TV Stick 4K (2nd Gen)](https://www.mi.com/be-fr/product/xiaomi-tv-stick-4k-2nd-gen/specs/), which runs Google TV; Xiaomi also lists Google, Netflix, Prime Video and YouTube software certifications in its [FAQ](https://www.mi.com/fr/support/faq/details/KA-873843/). Check the exact model and generation before buying, as names can be confusingly similar.

For anyone looking at alternatives, here is my <a href="https://link.amazon/B0bDe9k3G" rel="nofollow sponsored">Amazon affiliate link</a>. I couldn't verify the final product destination of that shortened URL, so I won't pretend to know its model, current price or certifications. I may earn a commission from eligible purchases made through that link, without an advertised extra cost to you.

For someone who enjoys opening devices, making backups, understanding them and tailoring the software, though, the MX10-F3 remains an entertaining little machine. The Allwinner H313 is far more capable than the original experience suggests.

## What this cheap stick actually taught me

I originally wanted nothing more than a small device to leave in my travel bag.

I ended up identifying components on a PCB, entering FEL, backing up seventeen partitions, cleaning an IPTV firmware, testing Widevine limitations and building my own TV launcher with help from several AI models.

The interesting part is not that I “made a cheap Chinese dongle fast.” It is that the project separated the hardware's real limits from the bad software layered on top of it.

The H313 did not become faster. The 2 GB of RAM did not double overnight. Netflix is still L3. But removing unnecessary software, using stable 1080p and designing an interface around the resources that actually exist made the exact same hardware **far nicer to use**.

Most importantly, Lumen now fits my real use case: I arrive at a hotel, plug in the stick, get my apps back and avoid spending twenty minutes wrestling with somebody else's Smart TV.

For something I paid twelve euros for, that feels like a pretty good result.
