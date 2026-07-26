---
title: When AI Finally Unlocked Locked-Down Industrial Systems
description: Hands-on experience using LLMs, Ghidra, Codex and modern tools to
  understand and modernize closed industrial systems.
date: 2026-05-24
lang: en
draft: false
tags:
  - ia
  - llm
  - reverse-engineering
  - industrie
  - ghidra
  - codex
  - automatisation
  - gmkteck
cover: /uploads/Hero Image from Astroplux Clean.webp
---
For more than ten years, some parts of our infrastructure felt impossible to evolve without being completely dependent on an outside vendor.

Every change was expensive.  
Every upgrade took time.  
And some technical limitations had become so normal that nobody really tried to question them anymore.

Then LLMs arrived.

Not the marketing versions used to polish emails or generate LinkedIn posts.  
But the new tools that could analyze code, correlate data flows, assist with reverse engineering, and reason about complex systems.

And honestly, I did not expect to see this happen so fast.

For a long time, I saw AI the way most people around me did: a practical tool for fixing emails, translating text, or summarizing documents.

In my professional environment, that was usually as far as it went. A few colleagues used it to rephrase a message or save time on admin tasks, but rarely for anything deeper.

![Illustration AI and industrial systems](/uploads/ia-industrie/hero.webp)

And then something changed.

For over ten years, we had been working with an extremely closed industrial system. An old environment, poorly documented, built around proprietary protocols and heavy dependence on an outside vendor.

Every small change required time, approvals, sometimes very high costs. Some simple modifications were billed at tens of thousands of euros. Over the years, we had ended up adapting our working methods to the system's limitations.

The problem was not just the cost.

It was the feeling of being stuck.

We had ideas for modernizing interfaces, automating complex processes, simplifying internal workflows, and building a more modern platform around our business. But without real access to the system's internals, everything moved at a crawl.

For years, we worked around the system's limits.

Not with it.  
Around it.

For years, classic reverse engineering let us make some progress, but never enough.

Network captures, session analysis, manual correlations, strange behaviors, obscure formats... enormous amounts of time went into trying to understand data flows that nobody seemed to have a full picture of.

There were entire evenings where we thought we had finally understood a structure... only to realize the next day that our hypothesis was completely wrong.

The early versions of ChatGPT were impressive, but in this context they remained limited. The same went for the early competing models. They could help explain code or suggest a few hypotheses, but not really assist with complex engineering work.

Then, gradually, things evolved.

The arrival of new models, especially some Chinese competitors like DeepSeek, GLM, and MiniMax, combined with tools like the MCP for [Ghidra](https://github.com/NationalSecurityAgency/ghidra), Codex, and the latest generations of reasoning models, completely changed how we worked.

For the first time, it felt like we had an assistant that could reason with us.

Not a magic tool.

Not an "analyze" button.

But something capable of:

- correlating behaviors,
- comparing data flows,
- detecting recurring structures,
- formulating credible hypotheses,
- accelerating weeks of human thinking.

And above all: capable of holding complex technical context over time.

Little by little, things that had seemed incomprehensible for years started to become clearer.

Some structures finally made sense.

Sessions we had been observing for a long time began to reveal their internal logic.

I will stay deliberately vague on several technical aspects, out of respect for the people involved and because some systems are still in production. The goal here is not to disclose protocols or sensitive information.

But rather to talk about a deeper shift.

For a long time, AI mainly helped us communicate better.

Today, it is starting to help us understand better.

And in some technical fields, that difference is enormous.

---

## No Single Model Was Really Enough

What is interesting today is not just that AI models exist.

It is the entire ecosystem that is starting to build up around them.

Over time, I ended up using several tools in parallel, each with its strengths and limits. A bit like a modern engineering toolbox.

For example, I use [OpenCode](https://opencode.ai/) extensively with a whole fleet of Chinese models like DeepSeek, GLM, MiniMax, and other sometimes lesser-known models that are extremely good at specific tasks.

For about ten dollars a month, honestly, it is almost absurd given what these tools already let you do.

Of course, not everything is perfect.

Sometimes models start hallucinating after several thousand lines or completely lose the initial technical context. You quickly hit the limits of context windows when working on complex projects that span several days.

Sometimes models would waste hours of our time with completely made-up reasoning.

On the other side, Claude Sonnet and Opus have often been impressive for reasoning, especially when analyzing behavior or reformulating complex hypotheses. But there is also this strange modern frustration: spending five hours working on a hard problem with a model... only to get cut off in the middle of a critical session because you hit a usage limit.

And then there was ChatGPT 5.5 and especially Codex.

Honestly, at first I did not think Codex would actually become useful in this kind of deeply technical workflow.

I saw it mostly as a "classic" development assistant.

Until the day it started helping me analyze files from an embedded Linux environment, understand certain binary structures, suggest credible recompilation approaches, and assist with tasks I would probably never have imagined doing alone just a few years ago.

Even with embedded systems specialists, some topics used to be extremely complex or reserved for a very niche few.

Today, the barriers are slowly shifting.

But there is something important that many people still do not understand: models are useless without domain knowledge.

The hardest part is not asking an AI a question.

The hardest part is:

- understanding the system,
- knowing how to clearly explain the context,
- communicating the real goal,
- formulating coherent hypotheses,
- guiding the models in a useful direction.

Because the goal here was never to "hack" anything.

The goal was to understand old systems in order to:

- modernize them,
- improve workflows,
- automate certain tasks,
- reduce legacy dependencies,
- make tools more maintainable.

That is a huge difference.

---

![Obsidian as a working memory](/uploads/ia-industrie/obsidian.webp)

## When Conversations Become Impossible to Track

Over time, I also realized another problem was emerging: memory.

When multiple sessions, agents, and analyses run for days, sometimes in parallel, it becomes impossible to keep everything in your head.

So I started using Obsidian as an external memory to centralize:

- discoveries,
- hypotheses,
- captures,
- correlations,
- observed behaviors,
- interesting responses from different models.

Eventually, [Obsidian](https://obsidian.md/) almost became the "persistent brain" around the LLMs.

I also had to adapt my personal infrastructure.

My Mac was excellent for a lot of things, but certain recompilation tasks or embedded Linux environments quickly became complicated to handle natively.

So I ended up investing in a [small Chinese mini PC](https://amzn.to/4wLBzKf) from GMKtec, dedicated solely to this work.

Nothing spectacular.

Not a huge server.

Just a simple machine, always on, always accessible, able to compile, test, and run certain tools directly under Linux.

With [Tailscale](https://tailscale.com/), this mini PC became a sort of permanent remote lab accessible from anywhere.

Honestly, it is probably one of the tools I recommend most today, simply because it simplifies architectures that would have been much more complicated before.

I also deliberately avoided certain fully autonomous or overly opaque agent solutions.

When you work with sensitive data, production systems, or industrial data flows, you think differently about privacy and data exposure.

---

## The Real Work Is Still Human

And that is probably what fascinates me most about this current period.

We might be in one of the first moments where an experienced engineer or technician can massively increase their capabilities without needing a huge team, a gigantic budget, or privileged access from the original manufacturer.

The most impressive thing about this shift is not that AI "finds the answers."

It is its ability to reduce the intellectual friction that has built up for years around complex, old, closed systems.

It does not replace field expertise.

It does not replace experience.

It does not replace the technical intuition built from years of watching a real system.

But it acts as an accelerator.

My feeling today is that many companies still completely underestimate what is happening in technical and industrial fields.

Because from the outside, AI still looks like an advanced office assistant.

While in reality, it is already starting to transform much deeper areas:

- reverse engineering,
- industrial maintenance,
- understanding legacy systems,
- interoperability,
- advanced automation,
- modernizing old infrastructure.

The most fascinating part of all this might not be the power of the models themselves.

It is the fact that, for the first time in a long while, some small technical teams can start understanding the systems they use every day again.

And in certain jobs, that autonomy is already changing a lot.

And honestly, even after months of work on this, there are still moments where I struggle to believe that some roadblocks that had been there for over ten years are finally starting to give way.