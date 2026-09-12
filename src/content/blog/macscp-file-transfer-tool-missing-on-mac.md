---
title: "macSCP: I built the file transfer tool I was missing on Mac"
description: "Moving from Windows to Mac left a gap where WinSCP used to be. I built macSCP with AI assistance to handle my everyday file transfers."
date: 2026-09-12
lang: en
translation: macscp-outil-transfert-manquait-mac
draft: false
category: "blog"
tags: ["macOS", "SCP", "SFTP", "development", "AI"]
cover: "/blog/macscp/macscp-desktop.webp"
excerpt: "I now do 99% of my work on macOS. macSCP filled a practical gap: a straightforward interface for moving files to and from my Linux machines."
metaTitle: "macSCP: the file transfer tool I was missing on Mac"
metaDescription: "Moving from Windows to macOS, building macSCP with Claude Code and then Codex, with Chinese models via the excellent OpenCode along the way, and using it to transfer files to my Linux machines."
---

Before leaving Windows as my main operating system for work (in my personal life, I have been an Apple guy since the Intel beta tests and the first Hackintoshes; yes, I am that old, kid), I had one remaining problem to solve: getting back what I used WinSCP for, on macOS. My files on one side, a remote machine on the other, and a graphical interface to move files between them without going through the terminal. I wanted to change operating systems without giving up all my habits.

That is where the idea of a WinSCP for Mac came from. I searched and tried several apps, both paid and free. Much to my surprise, no SCP client for Mac, or maybe I just did a bad job of looking!! And since we live in an amazing time, I decided to build it with AI assistance. First, put together a specification for the features I wanted, rather than a copy of WinSCP: I would not use all its features; it is a beast of a program. Then I got started with Claude Code, back when it did not kick me out after two exchanges; next came Chinese models through the excellent OpenCode. But once Codex came out, and starting with version 5.5, I went for the subscription for 100, and I have no regrets: it is a monster! And that is before even getting to version 6 Astra, which blows everything else on the market away for my use, while I wait for other competitors to catch up. And no, I am not buttering up Sam Altman, unless he offers me unlimited access for a few years ;) But credit where it is due: the teams at OpenAI have done a fantastic job on the coding and testing tools. My application is not perfect, and I am well placed to know that. But I actually use it: it retrieves my logs, sends the ones I need, and has become part of my daily routine. There is something particularly satisfying about that when it is a tool I built myself.

## Windows kept a spare key

I now do 99% of my work on macOS. The remaining one percent has its own little home: a [Windows 11 virtual machine in VMware](/blog/running-windows-11-on-apple-silicon-mac-vmware-fusion/). I keep it to update hardware whose utilities are available on neither Linux nor macOS. Replacing an entire working environment, then keeping an operating system around for a few update utilities: computing has an eye for detail.

That VM is useful, so it stays. My goal was to work on a Mac while keeping the tools I needed. File transfers were part of that, and WinSCP was my reference point.

Connecting to a Linux machine, browsing its directories, retrieving logs, and sending the files needed for an update: that was the everyday work macSCP had to support. I wanted to see where the files were, select the right ones, and transfer them through a straightforward interface.

## Two panes, and familiar habits return

macSCP shows local and remote files in two panes. I can browse directories, upload a file, or download one while keeping both sides in view. It is a familiar arrangement, and that suits me. For this part of my work, I appreciate having my bearings.

<figure class="article-screenshot">
  <img src="/blog/macscp/macscp-desktop.webp" alt="macSCP on Mac, showing local files on the left and remote files on the right" width="1200" height="836" loading="lazy" decoding="async" />
  <figcaption>macSCP on Mac: local and remote files in two panes.</figcaption>
</figure>

There are also older machines running out-of-date versions. They do not get any newer just because I changed computers, which is rather uncooperative of them. Support for `SCP` transfers and certain older `SSH` servers was part of my original requirement. macSCP has a compatibility setting that lets me work with some of those machines. Those are the machines I use it with; I have not tested every possible server.

WinSCP itself supports the [SCP protocol](https://winscp.net/eng/docs/scp) and documents [older SSH algorithms](https://winscp.net/eng/docs/ssh_algorithms). It remains my reference because I used it on Windows. With macSCP, I wanted to bring that workflow to the Mac.

## One ZIP instead of thousands of small transfers

The requirement goes beyond moving a file from one pane to another. When I have thousands of small files to upload, waiting for each one to make the trip can take hours. I added the ability to transfer a ZIP archive and then extract it directly on the remote server. As for RAR, I have not found the right command yet, or maybe it is because it is a proprietary format!

For some of my operations, that has turned hours of waiting into a few seconds. That is my experience on my machines, not a speed guarantee for every transfer. But it is exactly the kind of improvement I wanted: finish the operation and get on with my work.

I also added a function to remove unwanted files created by macOS or iOS from the server. I want to send the files required for the job without leaving behind little Apple system files that have no place on those machines.

## I am a vibe coder, and I use what I build

I am not a developer. I am a vibe coder, even if the term is not to everyone’s taste. I started with Claude two years ago, with the chat, the hallucinations, and the very limited context window, then moved on to CLI tools such as Claude Code, then Gemini, and eventually OpenAI’s Codex, particularly since 5.5 and, as I write this post, the powerful 6 Astra. My starting point is the needs I encounter at work and the tools I wish I had available.

What motivates me is building something useful in our daily work. Transferring an update, retrieving logs, turning a tedious operation into a simple one: that is where I see the value of the time spent building the application.

I have also written about [what AI changed in my work with locked-down industrial systems](/blog/when-ai-finally-unlocked-industrial-systems/). With macSCP, that assistance takes a very tangible form: I can close the conversation, open the application, and transfer my files.

## There are also my VPS instances and S3

Despite its name, macSCP is no longer limited to `SCP`. It also supports `SFTP` transfers, which I use with my VPS instances, and Amazon S3 and compatible storage services.

For me, the benefit is having those connections in the same interface. The underlying workflows are still different: on a Linux machine, I browse directories; with S3, I work with object storage. The available operations depend on the service I connect to.

These features are present, but not every configuration has been tested. My own use establishes that the tool helps me, without guaranteeing the same outcome in every environment. And be careful about the security of your servers: I have not tackled that part yet. Before distributing the app, I still need to test for vulnerabilities and so on.

## On a job site, the iPhone is already in my pocket

I also built an application for iOS and iPadOS, which I am currently modernizing. I want the functions I need for field work in an interface suited to a phone or tablet. That work is still in progress.

All my coworkers have iPhones (some also have an iPad). On site, it is sometimes simpler to connect the phone to our equipment through an <a href="https://amzn.to/3USDyxU" rel="nofollow">RJ45 Ethernet adapter</a> (Amazon affiliate link) than to get a laptop out. The laptop is not always charged or up to date when it is needed. The phone is already there.

That everyday situation drives the mobile version: connecting to a Linux machine, retrieving logs, and sending update files from the device I have with me. I also have coworkers with the same needs in mind.

The mobile version started from macSCP’s transfer engine, in a separate project that evolves independently. The two applications do not automatically have identical features or behavior. Modernizing the mobile app is part of addressing those shared needs.

<figure class="article-screenshot">
  <img src="/blog/macscp/mobilescp-iphone-ethernet.webp" alt="iPhone connected to a UGREEN RJ45 Ethernet adapter on a workbench, with the MobileSCP server connection form open" width="640" height="480" loading="lazy" decoding="async" style="max-width: 640px" />
  <figcaption>MobileSCP on an iPhone with an RJ45 Ethernet adapter: setting up a connection from the phone.</figcaption>
</figure>

## What I am still missing

Right now, I have a small makeshift terminal for sending commands. It helps with simple actions, such as rebooting a machine. But I would like to go further with a more modern, more capable terminal.

I would also like to store the commands we use at work inside the application. For now, I still have to look them up in a separate document. Having them alongside my connections and files would remove another detour during a field operation.

There are bugs, too. The application occasionally misbehaves when I switch servers. It is rare in my use, but it is one of the things that needs fixing. Using my own tool every day gives me as many ideas for improvements as reasons to feel pleased with it.

## I have not decided what comes next

I am still considering whether to open up the code and share it on GitHub or offer the application through the App Store. Nothing has been decided about distribution, licensing, or timing. That decision will be the subject of a future post. For now, I would rather describe the application as I use it.

macSCP filled the gap in my file transfer workflow on Mac. I retrieve my logs, send my files, and keep working on macOS with a tool that suits me. There is still work to do, but I am glad I was able to build it with that assistance and put it to practical use.

As for Windows, it keeps its little VM for the hardware update utilities. We have reached an arrangement.
