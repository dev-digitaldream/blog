---
title: "De-Googling: How I Migrated Drive, Photos, and Gmail to More Private and Sovereign Solutions"
description: "Step by step: how I went from Google (Drive, Photos, Gmail) to more private, self-hosted, and European alternatives."
date: "2025-11-16"
category: "blog"
tags: []
excerpt: ""
metaTitle: "De-Googling: How I Migrated Drive, Photos, and Gmail to More Private and Sovereign Solutions"
metaDescription: "Step by step: how I went from Google (Drive, Photos, Gmail) to more private, self-hosted, and European alternatives."
cover: ""
lang: en
translation: degooglisation-comment-jai-migre-drive-photos-et-gmail-vers-des-solutions-plus-privees-et-souveraines
---

De-googling is no longer a fringe topic. More and more people are looking to reduce their dependence on Google services, not out of ideology, but out of a need for control, privacy, and long-term consistency. Centralizing documents, photos, emails, and habits with a single provider always raises questions eventually.

On my end, this was not a sudden rejection or a radical purge. I moved forward gradually, based on actual usage, technical constraints, and what alternatives were really available. Some decisions are very clear, others are much more nuanced, and that is exactly what I am sharing here.

**Why de-Google?**

The question is not moral, it is practical. Google holds an enormous amount of personal and professional data: files, photos, emails, history, location, usage patterns. Everything works well, sometimes too well, but at the cost of total dependence on a single ecosystem.

De-googling is mostly about taking back control. Reducing that dependence, choosing European or self-hosted solutions when possible, and limiting the systematic analysis of your content for commercial purposes. That does not mean replacing everything at any cost. When no credible alternative exists, I still use Google, without guilt. The principle is simple: move forward step by step.

---

_1. Migrating Google Drive to kDrive (Infomaniak)_

Google Drive was hosting over 1.5 TB of personal and professional documents. A local migration would have been slow and unreliable. So I went with a more efficient approach.

The method is simple: rent a low-cost VPS for a few hours, install rclone, configure both remotes (Google Drive and kDrive), and launch the transfer directly from a datacenter. Result: high throughput, no saturation of my home connection, and a complete migration in two to three hours.

kDrive is a solid European alternative, hosted in Switzerland, with no commercial exploitation of your data. This choice is not linked to any partnership or sponsorship. It simply meets my needs.

---

_2. Leaving Google Photos: QNAP NAS + Immich_

Google Photos is objectively one of the best services on the market. Powerful, reliable, convenient. Despite that, for privacy reasons, I chose to bring my entire photo library back to a QNAP NAS using Immich as the interface.

Concretely, this means an export via Google Takeout, a local import into Immich, secure external access through Cloudflare Tunnel without opening ports, and automatic backup from the NAS to kDrive via WebDAV. The NAS runs 24/7, it is noisy, and it is clearly not the most convenient solution.

But it is consistent with a self-hosting choice. It is neither simpler nor more pleasant than Google Photos. It is simply more private.

---

_3. Gradual migration from Gmail_

Email is always the trickiest part of de-googling. Changing your address, notifying contacts, migrating usage patterns all take time.

I considered Infomaniak Mail, but the five-address limit did not fit my needs. So I chose to manage my mailboxes through a shared hosting plan with CPanel. This lets me create as many addresses as I need, keep full control, and use standard IMAP and SMTP configuration.

It is not perfectly structured yet, but it is functional and, most importantly, independent from Google.

---

_4. What I still keep at Google_

De-googling remains a gradual process. Some pieces are still hard to replace.

Google Sheets is one of them. No current alternative offers the same level of collaboration, integration, scripting automation, and API access. For this specific use case, I still use it.

Google Photos is also still around, but in a very limited way. Even after migration, I recognize its effectiveness and reliability. The goal is not total abandonment, but reducing exposure.

**Conclusion: a realistic and controlled de-googling**

De-googling is not a leap into the unknown. It is a series of progressive, deliberate decisions: Drive to kDrive, Photos to NAS and Immich, Gmail to an independent solution, backups split between NAS and European cloud, secure external access through Cloudflare Tunnel.

Each step aims for the same goal: keep control without sacrificing convenience entirely. It is not perfect, but it is consistent, and above all, sustainable.

![degoogl](/blog/degooglification-comment-jai-migre-drive-photos-et-gmail-vers-des-solutions-plus-privees-et-souveraines/degoogl.webp "degoogl")
