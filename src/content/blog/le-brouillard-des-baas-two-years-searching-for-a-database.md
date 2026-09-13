---
title: "The BaaS Fog: Two Years Searching for a Database"
description: "Firebase, Supabase, Neon, Convex: two years testing BaaS for a real-time app. What nobody tells you about the trade-offs."
date: "2026-03-29"
updated: 2026-09-13
tags: ["baas", "supabase", "firebase", "architecture", "backend"]
cover: "https://pub-8d35cf03c12f4e258a891dd5fc8f9fe4.r2.dev/blog/baas-cover.webp"
lang: en
translation: le-brouillard-des-baas-deux-ans-a-chercher-une-base-de-donne
category: "blog"
excerpt: ""
metaTitle: "The BaaS Fog: Two Years Searching for a Database"
metaDescription: "Firebase, Supabase, Neon, Convex: two years testing BaaS for a real-time app. What nobody tells you about the trade-offs."
---
Two years ago, I left the safety of traditional hosting to build a real-time application across several platforms. The business logic was moderate and the original requirement sounded simple: store the data, keep it synchronized, and spend my time on the interface.

The backend choice ended up shaping the entire project. What looked like a database decision became a broader question: how much infrastructure should be delegated, and how much control is reasonable to lose in exchange?

BaaS platforms promise to remove server configuration, API maintenance, and database migrations. That promise is real, but every service fulfills it through a different set of trade-offs.

## Firebase: the immediate power of a black box

I started with Firebase. Its real-time model quickly makes much of the backend feel unnecessary. A listener on a collection is enough to display live data in the application without building an intermediate server.

That speed is extremely effective when moving from an idea to a prototype. It can also become a dependency. Once a query no longer fits the model expected by Firestore, the architecture can become awkward. I found myself moving some data processing to the client, which was not a satisfying answer for sensitive or larger datasets.

Costs require the same attention. A simple interface can hide a large number of reads and writes. Without monitoring those operations carefully, predicting the bill becomes difficult.

Firebase saved me a great deal of time at the beginning. It also taught me that a comfortable abstraction remains a black box until a project reaches its boundaries.

## Supabase: recovering SQL without recovering every server

I then looked for Firebase’s convenience with the strength of a relational database. Supabase became my first serious alternative.

Within minutes, a project has a Postgres database, a generated API, and authentication. After spending several weeks on a prototype, the difference from Firebase was clear. I could write views, use stored functions, and define row-level security policies with RLS.

That freedom creates a much stronger sense of control. It also requires a better understanding of the database. The generated API removes some work, but it can feel less intuitive than a highly abstracted SDK such as Firebase’s.

For my use case, Supabase offers the most natural balance between a managed service and a SQL foundation. It does not eliminate complexity. It makes that complexity more visible and easier to control.

## Neon: a Postgres foundation that needs other pieces

Neon approaches the problem differently. It provides serverless Postgres by separating storage from compute. Database branches resemble a Git workflow and create useful possibilities for development environments.

The approach is attractive, but Neon is primarily a foundation. Authentication, APIs, and synchronization still need to be selected and assembled around it.

That provides a great deal of freedom when the additional work is acceptable. Neon fits a project with an already defined architecture better than an application looking for a complete backend out of the box.

## Convex: smooth synchronization within its own model

Convex is the most different service in this group. It does not provide direct access to a SQL database. Data is handled through queries and mutations defined in a TypeScript backend.

The development experience is remarkably smooth. Types connect the backend to the frontend, and real-time updates arrive without adding a separate synchronization layer.

That simplicity depends on Convex’s framework. Every operation goes through its functions. I gain consistency and safety, but lose the freedom to work directly with a conventional relational database.

The trade-off can work very well for a TypeScript team that wants to move quickly. It is less suitable when portability and direct access to the data are priorities.

## No service wins every criterion

After two years of experiments, I did not find one universally better BaaS. I learned which kind of project each service suits.

- **Firebase** moves from concept to product very quickly when a closed ecosystem is acceptable.
- **Supabase** fits projects that value SQL, Postgres, and data control without wanting to operate all the infrastructure.
- **Neon** provides a strong serverless Postgres foundation when a team already knows which additional pieces it wants to assemble.
- **Convex** gives TypeScript projects coherent synchronization when its data and execution model are acceptable.

The decision is ultimately less about a feature list than about what the project can sacrifice: development time, control, architectural simplicity, or predictable costs.

The right choice is not the platform that promises to remove everything. It is the one whose constraints remain acceptable when the prototype becomes a real product.
