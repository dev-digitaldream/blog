---
title: "Screen CMS"
description: "A digital signage CMS and Android TV player I built to regain control over a setup that previously depended on Xibo."
date: 2026-03-18
lang: en
translation: screen-cms
---

## Why this project exists

Xibo does its job, but I wanted a solution that was easier to understand, maintain, and adapt to our needs. Screen CMS aims to manage content across several displays without carrying the full complexity of a general-purpose platform.

The project brings together two parts: a web CMS for preparing screens and a lightweight Android application for displaying them on a television, tablet, or compatible device.

## The CMS

The server is built with Node.js, Express, EJS, and SQLite. Each screen has its own address and configuration. The back office currently manages:

- several independent screens;
- administrator and editor accounts;
- images, internal news, and RSS feeds;
- weather data through Open-Meteo;
- indicators, a scrolling ticker, and YouTube playlists;
- an emergency mode that can display a message across every screen;
- an audit log of actions performed in the administration area.

The application can work on its own. It can also provide a web page to an existing Xibo display, allowing a gradual migration instead of replacing the whole installation at once.

## The Android TV player

The player is a separate Kotlin application included in the same project. It displays a CMS screen in full-screen mode and starts automatically with the device. A PIN-protected long press opens its settings.

The player also handles retries after a network interruption and includes a watchdog service to restart the display if the application stops. It targets Android TV, Google TV, tablets, and some HDMI sticks running Android 5 or later.

## Current status

The project is private and still under development. The CMS foundation and Android player exist, but they still need to be tested on the devices and in the real conditions where they will run. Fleet deployment, device management, and kiosk-mode hardening are among the points to validate before it can become a complete Xibo replacement.

