---
title: "Self-Hosted PaaS: The Cloud Experience Without the Bill"
description: "An overview of self-hosted PaaS solutions to get the public cloud developer experience without the invoice shock."
date: "2026-01-01"
updated: 2026-09-13
category: "blog"
tags: ["PaaS", "self-hosting", "Docker", "Dokploy", "Coolify", "CapRover"]
excerpt: ""
metaTitle: "Self-Hosted PaaS: The Cloud Experience Without the Bill"
metaDescription: "An overview of self-hosted PaaS solutions to get the public cloud developer experience without the invoice shock."
cover: ""
lang: en
translation: paas-auto-heberges-lexperience-cloud-sans-la-facture-2026
---
![Self-hosted platform interfaces](/blog/paas-auto-heberges-lexperience-cloud-sans-la-facture-2026/image2.webp "Self-hosted PaaS")

I have always appreciated the promise made by platforms such as Heroku, Vercel, and Render: connect a repository, start a deployment, and forget almost everything else. That convenience becomes less comfortable when services multiply, the bill becomes difficult to predict, or a platform limit forces the architecture to change.

I eventually returned to my own VPS instances without wanting all the manual administration that usually comes with them. Self-hosted PaaS platforms occupy that middle ground. They automate builds, domains, certificates, and container lifecycles while leaving the server and data under my control.

The promise is attractive. It does not remove the need for backups, security, or monitoring the machine.

## What running the server actually changes

A properly sized VPS can host several applications and internal tools for a fixed cost. Docker standardized much of the runtime, while buildpacks, Nixpacks, and modern reverse proxies made deployment far less improvised.

A workflow close to “git push, then deploy” can now run on a server rented from almost any provider.

The trade-off remains clear: when the disk fills up, Docker stops responding, or a backup fails, no managed service automatically takes responsibility. The PaaS simplifies operations, but the server remains mine to maintain.

I have not used every platform below under the same conditions or for the same amount of time. I group them by approach, separating the ones that fit my workflow from those designed for different priorities.

## Dokploy: a modern interface over familiar components

Dokploy is close to what I was looking for on my VPS instances. The interface remains readable, and deployments rely on familiar components such as Docker, Docker Compose, buildpacks, and Nixpacks.

I can keep several applications on one machine without manually maintaining every proxy and certificate configuration. The system remains close enough to Docker for me to understand what is happening when something breaks.

That balance matters more in my workflow than the length of its feature list.

## Coolify: many possibilities in one interface

Coolify covers a broad range of needs. Its catalog makes it easier to deploy applications, databases, and common supporting services. The rich interface feels closer to a public cloud platform.

That breadth also means more components and settings. On a small machine, or for a service where every detail needs to remain predictable, I prefer fewer layers. Coolify appears better suited when a complete interface and a large choice of ready-to-run templates matter more than minimalism.

## CapRover: visually older, still understandable

CapRover uses Docker Swarm with Nginx in front. Its interface feels less modern, but its behavior is well understood, and the community catalog launches common services quickly.

I have used it for experiments and small deployments. It does not try to follow every new trend, which can become a strength when the priority is a simple and predictable platform.

Dokploy and CapRover provide different experiences, but they share an important quality: the server remains understandable instead of becoming a complete black box.

## Dokku and Piku: terminal before dashboard

Dokku brings the original Heroku idea to a personal server. A Git repository and a deployment command trigger the build, processes, and proxy. Its value lies in a text-based workflow that is easy to document and reproduce.

Piku takes minimalism further. It can work without making Docker the center of the architecture and targets machines where every resource matters. That approach fits small servers, ARM boards, and focused projects better than a team looking for a large dashboard.

These tools require more confidence with SSH. In return, they add fewer layers between the application and the operating system.

## SwiftWave: an option for small machines

SwiftWave uses Go and HAProxy with an emphasis on a small footprint. The approach is interesting when service density matters and the server has limited resources.

I see it as something to evaluate rather than an automatic replacement for more established platforms. Low memory use is only one criterion. Documentation, backups, upgrades, and the ability to diagnose a failure matter just as much in production.

## Cosmos and Cloudron optimize for different priorities

Cosmos Server places access security at the center of the experience. Its reverse proxy, centralized authentication, and private access model suit a homelab or services that should not be exposed without additional protection.

Cloudron takes another direction. It provides integrated applications, updates, backups, and even a mail stack. The service is paid, but its purpose is to reduce administration time for a small organization without a dedicated infrastructure team.

These products go beyond deploying a single application. They organize a larger part of the server and therefore require accepting more of their technical choices.

## My main criterion: understanding the failure

The decision depends less on the number of buttons than on the acceptable level of responsibility.

- **Dokploy** fits my need for a modern interface while remaining close to Docker.
- **CapRover** remains useful for familiar and straightforward deployments.
- **Coolify** is stronger when a rich catalog and interface are the priority.
- **Dokku** and **Piku** favor lightweight workflows driven from the terminal.
- **Cosmos Server** focuses on protected access to services.
- **Cloudron** trades some control and a subscription for less administration.
- **SwiftWave** is primarily worth evaluating when resources are severely limited.

I no longer look for a platform that promises to do everything. I look for one whose backups, updates, and failures I can understand.

A self-hosted PaaS can make a VPS as pleasant to use as a commercial platform. It does not turn infrastructure into a maintenance-free service. The real gain is choosing where the complexity lives, then keeping enough control to act when it returns.
