---
title: "The BaaS Fog: Two Years Searching for a Database"
description: "Firebase, Supabase, Neon, Convex: two years testing BaaS for a real-time app. What nobody tells you about the trade-offs."
date: "2026-03-29"
tags: ["baas", "supabase", "firebase", "architecture", "backend"]
cover: "https://pub-8d35cf03c12f4e258a891dd5fc8f9fe4.r2.dev/blog/baas-cover.webp"
lang: en
translation: le-brouillard-des-baas-deux-ans-a-chercher-une-base-de-donne
category: "blog"
excerpt: ""
metaTitle: "The BaaS Fog: Two Years Searching for a Database"
metaDescription: "Firebase, Supabase, Neon, Convex: two years testing BaaS for a real-time app. What nobody tells you about the trade-offs."
---

![The BaaS Fog: Two Years Searching for a Database](https://pub-8d35cf03c12f4e258a891dd5fc8f9fe4.r2.dev/blog/baas-cover.webp)

Two years ago, I left the safety of traditional hosting and started a new adventure. The requirements were simple, on the surface: a real-time, multi-platform application with moderate business logic. Choosing a database and associated services (the "Backend-as-a-Service" or BaaS thing) would become a decision that weighed heavily on the project's trajectory. What I thought was a simple question of data storage turned into a deep reflection on the philosophy of software development.

I wanted to focus on the front end, on the user experience. I did not want to set up servers, manage database migrations, or secure APIs. That is the dream these platforms sell. But between the promise and reality, there is a gulf of trade-offs.

## Firebase: The Seductive Power of the Black Box

The starting point of my search was Firebase. It was, and still is, the reference. The real-time API is incredibly powerful. Writing a listener on a collection and watching data appear live in the app, without ever touching a line of backend code, gives you an immediate sense of power.

But Firebase is a closed ecosystem. For months, I lived with that feeling of lightness, but also unease. What happens when I need a complex query that does not fit the Firestore query mold? I found myself doing data processing on the client side, which is never a good idea for sensitive or large data. And then there is the cost question. The bill can spiral if you are not watching reads and writes like a hawk.

That is when I started looking for alternatives. I wanted the simplicity of Firebase, but with the robustness of a real relational database. I wanted SQL.

## Supabase: The Best Balance

**Supabase** was my first serious attempt. The pitch is appealing: "Open source, a Firebase alternative." You create a project, and in a few minutes you have a Postgres database, an auto-generated API, and authentication.

I spent several weeks building a prototype. The feel is different from Firebase. You feel less like you are in a walled garden. Being able to write SQL views, stored functions, and use Postgres's powerful security rules (RLS) is a relief. You have control. But that freedom comes at a cost in complexity. The auto-generated API is handy, but it is sometimes less intuitive than Firebase's very high-level SDK.

## Neon: The Foundation for Tinkerers

**Neon** is a serverless Postgres engine. It separates storage from compute, which enables interesting features like branching databases, similar to Git. It is a fascinating technology, very performant, but at this stage it is more of a foundation than a complete solution. If you go with Neon, you still need to assemble the other bricks yourself.

## Convex: Effortless Sync at the Cost of Freedom

**Convex** is the most different of all. It does not give you direct access to a SQL database. It is a document-oriented data synchronization system where you define mutations and queries in a TypeScript backend.

The development experience is incredibly smooth. Typing is everywhere, from backend to frontend. Data updates in real time without me having to think about it. But you have to go through mutations, losing direct flexibility in exchange for simplicity and safety. It is a conscious trade-off.

## The Lesson Learned

After two years of experimentation, there is no "best" service. There are tools for different project philosophies.

- **Firebase**: from concept to product in record time, if you accept the closed ecosystem.
- **Supabase**: if you like SQL, want to keep control, and do not want to manage infrastructure.
- **Convex**: if you are a TypeScript team that wants seamless backend/frontend synchronization.
- **Neon**: if you have the expertise to build the missing pieces on a serverless Postgres foundation.

The choice is not about technology, but about pragmatism. It is about weighing what you are willing to sacrifice: your development time, your control over data, the simplicity of the architecture, or cost predictability. The real win is not picking the right tool, but understanding the trade-offs you make when you choose it.
