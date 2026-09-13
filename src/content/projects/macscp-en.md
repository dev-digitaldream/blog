---
title: "macSCP"
description: "A macOS application I built to transfer files between local machines, Linux servers, and S3 storage through a two-pane interface."
date: 2025-11-05
lang: en
translation: macscp
cover: "/blog/macscp/macscp-desktop.webp"
---

## The original need

After moving almost entirely from Windows to macOS, I missed the workflow I had with WinSCP: browsing local and remote files together, retrieving logs, and sending files needed for an intervention without doing everything in a terminal.

macSCP grew from that practical need. It does not try to reproduce every WinSCP feature. I build the functions that are genuinely useful in my daily work.

## What works today

- local and remote navigation in two panes;
- SCP and SFTP transfers;
- compatibility with some older SSH machines;
- access to Amazon S3 and compatible services;
- ZIP upload followed by extraction on the server;
- removal of unwanted files created by macOS and iOS;
- simple commands sent through a small terminal.

I use the application to retrieve logs, send updates, and work with Linux machines. Every possible configuration has not been tested.

## The mobile version

A separate iOS and iPadOS application is being modernized. It targets field work where an iPhone connected to a machine over Ethernet is more convenient than a laptop.

## Status

The project remains private and is not distributed. Credential and key handling, connections, and failure states need to be audited before any release. The name will also need to be reconsidered because I discovered another macSCP project while writing the article.

[The full story, screenshots, and current limitations are documented in the macSCP article.](/blog/macscp-file-transfer-tool-missing-on-mac/)
