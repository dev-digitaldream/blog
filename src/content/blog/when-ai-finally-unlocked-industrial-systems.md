---
title: "When AI Finally Unlocked Locked-Down Industrial Systems"
description: "Ten years of roadblocks, poorly documented protocols, and plenty of trial and error. How AI changed our work with closed industrial systems."
date: 2026-05-24
lang: en
draft: false
translation: quand-lia-debloque-enfin-des-systemes-industriels-fermes
category: blog
tags: [ai, llm, reverse-engineering, industry, ghidra, codex, automation, gmktec]
cover: "/uploads/ia-industrie/atelier-investigation.webp"
excerpt: "For years, we adapted our work to the limits of a closed system. With LLMs, some of those limits are finally starting to give way. Not without mistakes, or work on our side."
---

For more than ten years, some parts of our infrastructure seemed impossible to improve without going through the manufacturer. An aging industrial system, little documentation, proprietary protocols, and habits picked up because there was no better option. Every change meant time, approvals, and sometimes substantial costs. Some seemingly simple changes came with bills running into tens of thousands of euros.

Over the years, we had adapted the way we worked to the system’s limitations. We had ideas for modernizing interfaces, automating processing, and simplifying internal data flows. But without understanding what happened behind the scenes, progress was slow. The cost mattered, of course. So did the feeling of being stuck.

Then AI tools started helping us with problems I had not really expected them to handle. Honestly, I did not think I would see some of those roadblocks give way so quickly.

## An evening spent understanding a data flow, then starting over

Before that, we were already doing reverse engineering: network captures, session analysis, manual comparisons, and searches for structures in obscure formats. We made progress, but it took a lot of time. Nobody seemed to have a complete picture of certain exchanges anymore.

There were entire evenings when we thought we had finally understood a structure, only to realize the next morning that our hypothesis was completely wrong. That kind of discovery puts enthusiasm back in its place pretty quickly.

At the time, I mainly saw AI as a tool for editing emails, translating, or summarizing documents. Around me, its professional uses often stopped there. Early versions of ChatGPT could explain a piece of code or suggest a lead, but struggled with our technical context.

Gradually, the models and the tools around them evolved. DeepSeek, GLM, MiniMax, Codex, and MCP connections to [Ghidra](https://github.com/NationalSecurityAgency/ghidra) changed how we approached the work. We could compare data flows, look for recurring structures, connect behaviors, and discuss hypotheses with an assistant that followed the reasoning better.

Sessions we had been observing for a long time started to reveal their logic. Some structures finally made sense. We still had to check the proposed leads, but spent less time figuring out where to start on our own.

I am deliberately keeping the protocols and procedures vague. Some systems are still in production, and I want to respect the people and organizations involved. What I want to describe here is the change in our work, without exposing the details of the infrastructure.

## My toolbox, on good days and bad

No single model was really enough. I ended up using several tools in parallel, each with its strengths, limitations, and sometimes completely invented reasoning.

I use [OpenCode](https://opencode.ai/) a lot, with a whole fleet of Chinese models: DeepSeek, GLM, MiniMax, and others that are less well known. With the plans I was using, about ten dollars a month already provided capabilities that felt almost absurd for the price.

That did not make the results reliable by default. After several thousand lines, some models started making things up or lost the original technical context. On work spread over several days, those limits became obvious quickly. We also lost hours following reasoning that had been invented from start to finish.

Claude Sonnet and Opus often impressed me when analyzing behavior or reframing complex hypotheses. They came with another frustration: spending five hours on a difficult problem and getting cut off mid-session because the usage limit had been reached. The problem itself had not planned on taking a break.

Then Codex took on a role I had not anticipated. At first, I mainly saw it as a conventional coding assistant. Yet it started helping me analyze files from embedded Linux, understand binary structures, and explore recompilation options. Tasks I would not have imagined tackling alone a few years earlier became accessible, at least enough to start working on them.

Even with embedded systems specialists, some subjects remained difficult. I am not claiming everything became easy. But in my experience, the barrier to entry clearly shifted.

## Domain knowledge does not appear out of nowhere

Above all, this work reminded me how central knowledge of the system remains. We have to explain what we observe, the expected result, the real constraints, and the hypotheses already tested. A vague question about a file does not convey ten years of field experience.

Models can suggest leads. It is up to us to guide them, compare their suggestions with observed behavior, and notice when the reasoning drifts away from the problem.

Our goal has always been to understand these old systems so we can modernize them, improve data flows, automate tasks, and reduce some long-standing dependencies. We wanted our tools to be more maintainable. Domain knowledge gives that work direction; without it, it is very easy to spend time on a convincing answer that serves no purpose.

That same need to build useful everyday tools also led me to create [macSCP for my file transfers on Mac](/blog/macscp-file-transfer-tool-missing-on-mac/).

## Obsidian, so I do not have to start over tomorrow

Another problem appeared fairly quickly: memory. With several sessions, multiple agents, and analyses running for days, sometimes in parallel, I could no longer keep everything in my head.

I started collecting discoveries, hypotheses, captures, correlations, and observed behaviors in [Obsidian](https://obsidian.md/). I also kept useful answers from the different models there.

Obsidian almost became the “persistent brain” around the LLMs. Conversations move on and context limits kick in, but the notes remain. In this kind of work, being able to find what we have understood and what is still a hypothesis quickly becomes as useful as the model itself.

## A little Linux machine, always within reach

I also adapted my setup. My Mac works well for a great many things, but some recompilation tasks and embedded Linux environments were difficult to handle natively.

So I invested in a <a href="https://amzn.to/4wLBzKf" rel="nofollow">small Chinese GMKtec mini PC</a> (Amazon affiliate link), dedicated to this work. “Wild, bro ;)” A simple machine, always on, able to compile, test, and run tools directly under Linux. I did not need a huge server.

With [Tailscale](https://tailscale.com/), that mini PC became my remote lab, accessible from the different places where I work. In my setup, it made accessing that environment much simpler.

I did avoid some fully autonomous or overly opaque agent solutions, though. With sensitive data and production systems, I want to keep track of what the tools do and what I share with them. Those questions are part of the work, just as much as the results.

## The roadblocks are starting to give way

What fascinates me is being able to make progress with a small team on subjects that once seemed reserved for a handful of specialists or the manufacturer. The experience accumulated in the field has new ways to make itself useful.

AI helps us explore more leads and organize information that is difficult to connect. It can also waste our time. Evenings spent on a bad hypothesis have not disappeared; we simply have better tools to work with, provided we keep using our judgment.

From the outside, AI still often looks like an advanced office assistant. In our daily work, it is already starting to change how we understand old systems, reverse-engineer them, and prepare to modernize them.

After several months of work, there are still moments when I struggle to believe that some roadblocks that had stood for more than ten years are finally starting to give way. For me, that is where the change lies: regaining some independence over the tools we use every day.
