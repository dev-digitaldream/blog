---
title: "De-Googling: How I Migrated Drive, Photos, and Gmail to More Private and Sovereign Solutions"
description: "Step by step: how I went from Google (Drive, Photos, Gmail) to more private, self-hosted, and European alternatives."
date: "2025-11-16"
updated: 2026-09-13
category: "blog"
tags: ["degoogling", "privacy", "self-hosting", "Immich", "kDrive", "rclone"]
excerpt: ""
metaTitle: "De-Googling: Leaving Drive, Photos, and Gmail"
metaDescription: "Step by step: how I went from Google (Drive, Photos, Gmail) to more private, self-hosted, and European alternatives."
cover: ""
lang: en
translation: degooglisation-comment-jai-migre-drive-photos-et-gmail-vers-des-solutions-plus-privees-et-souveraines
---
De-Googling is no longer a fringe subject. Documents, photos, email, history, and everyday habits can easily end up with one provider. Everything works well, sometimes almost too well, until that dependence begins to raise practical questions.

I did not reject Google overnight or begin with an ideological purge. I moved gradually, following my actual needs, technical constraints, and the alternatives that were genuinely available. Some decisions were straightforward. Others remain much more nuanced.

## Why I reduced my dependence on Google

My motivation is primarily practical. Centralizing so much personal and professional data in one ecosystem reduces room to move. Replacing one service becomes harder when every other service is connected to it.

I therefore try to retain more control, favor European or self-hosted solutions when they meet the need, and limit the commercial analysis of my content.

That does not mean replacing every service at any cost. When no credible alternative fits my workflow, I continue to use Google. This migration is a progression rather than an absolute rule.

## 1. From Google Drive to kDrive with rclone

Google Drive held more than 1.5 TB of personal and professional documents. Downloading everything at home before uploading it elsewhere would have taken a long time, saturated my connection, and created more opportunities for interruption.

I rented a low-cost VPS for a few hours instead, installed rclone, configured Google Drive and kDrive as two remote destinations, and started the transfer directly from the datacenter.

Throughput was much better and my own internet connection remained available. The complete migration took around two to three hours.

I chose kDrive as a European alternative hosted in Switzerland. There is no partnership behind that choice, and it does not make the service perfect. It simply fits my current priorities better.

## 2. From Google Photos to a QNAP NAS with Immich

Google Photos remains one of the most convenient services on the market. It is fast, reliable, and difficult to replace without accepting a few compromises.

For privacy reasons, I still brought my photo library back to a QNAP NAS and installed Immich as the interface. The process involved a Google Takeout export, a local import, external access through Cloudflare Tunnel without opening ports directly, and automatic backup to kDrive over WebDAV.

This setup requires more attention. The NAS runs constantly, makes noise, and remains less convenient than Google Photos. It is consistent with my choice to self-host, however, and gives me more control over the files.

## 3. A gradual move away from Gmail

Email is the most difficult part. A new address affects contacts, existing accounts, and years of habits. This is not a change that can be completed over a weekend.

I considered Infomaniak Mail, but its five-address limit did not fit my needs at the time. I moved my mailboxes to a shared hosting account with cPanel instead.

This setup lets me create the addresses I need and use standard IMAP and SMTP configuration. It is not perfectly organized yet, but it works and reduces my dependence on Gmail.

## 4. What I still keep at Google

Some tools remain difficult to replace. Google Sheets is one of them. I have not found an alternative that combines collaboration, integrations, script automation, and APIs at the level required by my workflow.

Google Photos also remains present in a limited capacity. Moving the files does not prevent me from recognizing how effective the service is.

The goal is therefore not complete abandonment. I want to reduce exposure and avoid making one provider essential to my entire setup.

## A realistic de-Googling process

The result is a series of gradual decisions: Drive to kDrive, Photos to QNAP and Immich, Gmail to independent email hosting, backups split between the NAS and a European cloud, and protected remote access through Cloudflare Tunnel.

This setup is neither simpler nor perfect. It remains consistent with what I am trying to achieve: keeping enough convenience while regaining control of the data that matters.

![My setup after moving data away from Google](/blog/degooglisation-comment-jai-migre-drive-photos-et-gmail-vers-des-solutions-plus-privees-et-souveraines/degoogl.webp "De-Googling")
