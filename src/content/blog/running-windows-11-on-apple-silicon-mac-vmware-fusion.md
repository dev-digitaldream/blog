---
title: "Running Windows 11 on Apple Silicon Mac with VMware Fusion"
description: "A practical look at Windows 11 Arm with VMware Fusion 26H1: installation, compatibility, limitations, and comparisons with UTM and Parallels."
date: "2026-01-11"
updated: 2026-09-13
updateNote: "The guide was updated for VMware Fusion 26H1. Windows Arm, shared-folder, and nested-virtualization limitations are now stated explicitly."
category: "blog"
tags: ["vmware", "windows-11", "apple-silicon", "virtualization", "mac"]
excerpt: ""
metaTitle: "Windows 11 Arm on Mac with VMware Fusion 26H1"
metaDescription: "Install Windows 11 Arm on an Apple Silicon Mac with free VMware Fusion 26H1: licensing, compatibility, performance, and real limitations."
cover: "/blog/faire-tourner-windows-11-sur-un-mac-apple-silicon-avec-vmware-fusion/vmware.webp"
lang: en
translation: faire-tourner-windows-11-sur-un-mac-apple-silicon-avec-vmware-fusion
---

*When an old enterprise software world still manages to surprise*

VMware is one of those names I associate with server rooms, critical environments, and difficult licensing. After Broadcom acquired VMware, commercial changes around its enterprise products only reinforced that image.

Fusion moved in the opposite direction. Since November 2024, VMware Fusion Pro has been free for personal, educational, and commercial use. The current release, Fusion 26H1, retains that model.

This makes it a serious way to run Windows 11 on an Apple Silicon Mac, provided the implications of Windows on Arm are understood.

## Why keep Windows on a Mac

The need is rarely ideological. It may come from business software available only on Windows, an administration tool never ported to macOS, or a test environment that does not justify a second computer.

Intel Macs could boot Windows directly through Boot Camp. Apple Silicon uses a different Arm architecture. Fusion does not translate an entire x86 operating system: it virtualizes a system designed for the same architecture as the Mac. These machines therefore require **Windows 11 Arm64**.

Windows 11 Arm can then run many x86 and x64 applications through its own emulation layer. That compatibility applies to applications, not to operating systems or every hardware driver.

## Fusion is free, Windows is not

The [VMware announcement](https://blogs.vmware.com/cloud-foundation/2024/11/11/vmware-fusion-and-workstation-are-now-free-for-all-users/) confirms that Fusion Pro is free for all users and retains the features of the former paid edition. Without a remaining support contract, help mainly comes from documentation and the community.

Downloads still require a free Broadcom portal account. VMware adopted calendar-based versioning with 25H2. [Fusion 26H1](https://blogs.vmware.com/cloud-foundation/2026/05/14/announcing-vmware-workstation-and-fusion-26h1/) is the release published in the first half of 2026.

The free hypervisor does not include Windows. Microsoft requires a separate Windows 11 Pro license for every instance, including a virtual machine. A Windows 11 Pro key can activate either the Arm or x64 edition.

## Installing Windows 11 Arm

Fusion includes a **Get Windows from Microsoft** option that downloads the correct Arm64 image. This avoids accidentally using an incompatible x86 ISO.

VM creation remains familiar: select resources, create the virtual disk, and start installation. Windows 11 requires TPM 2.0. Fusion provides a virtual TPM, which requires VM encryption. Its password should be kept with the VM backups.

VMware Tools adds drivers and improves integration after installation. On Apple Silicon, that integration still differs from what Fusion historically offered on Intel Macs.

## What works well

Windows 11 Arm is now entirely usable for office work, administration tools, browsers, conventional business software, and many x86 or x64 applications. Recent Fusion releases support snapshots, virtual networking, USB, and DirectX 11 acceleration.

The combination works well for an isolated environment opened for a specific task. Snapshots make it easy to roll back after a test or risky update.

Application emulation still has a cost. A native Arm64 application remains preferable when available, especially for demanding workloads.

## Limitations to understand first

VMware’s [compatibility documentation](https://knowledge.broadcom.com/external/article/315609) prevents several surprises:

- an Apple Silicon Mac cannot run an x86 Windows, Windows XP, or Windows 7 VM through Fusion;
- Fusion shared folders are not supported for Windows Arm guests;
- Unity Mode is unavailable;
- Windows device drivers must be available for Arm64;
- nested virtualization is unsupported.

That last limitation rules out WSL2, Windows Sandbox, and some capabilities based on Hyper-V or VBS. For Linux development inside Windows, it may be enough to disqualify Fusion on Apple Silicon.

Games and applications relying on anti-cheat drivers, kernel drivers, or newer graphics features also need individual verification. “Most applications work” does not mean every Windows program is compatible.

## UTM for preserving an old machine

UTM addresses a different need in my work. I use it to preserve an old Windows XP machine cloned from a workstation nearing the end of its life. It contains software that is now difficult to find but still manages communication between older equipment and a newer monitoring system.

Rewriting that software would make little sense. It is stable, does its job, and the controlled machines are also approaching retirement. Virtualizing the existing system was the most pragmatic way to make it portable and easy to back up.

UTM can emulate another CPU architecture through QEMU, which Fusion cannot do on Apple Silicon. Performance and integration are weaker, but that flexibility remains valuable for preserving an old system.

## Parallels remains more integrated

Parallels offers a more guided installation and deeper macOS integration. That polish matters when Windows is used throughout the working day. The product remains commercial and is generally sold as a subscription.

Fusion feels more austere, but covers many occasional professional needs at no cost. The choice depends on the required level of integration and essential Arm features, not only the price.

## A strong tool within a defined scope

VMware Fusion 26H1 does run Windows 11 Arm for free on an Apple Silicon Mac. It is a mature, maintained hypervisor that can also be used commercially.

The possible cost of a Windows license remains, and critical dependencies should be checked before moving a workstation: application architecture, drivers, USB devices, WSL2, Sandbox, and shared folders.

For opening business software, maintaining a test environment, or handling an occasional intervention, the compromise remains compelling. Fusion does not remove the limitations of Windows on Arm. It gives them a stable and understandable framework.
