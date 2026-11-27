---
title: "What is an AI agent? A practical definition for builders"
description: "An AI agent is a language model that decides which tools to call in a loop until a goal is met. Here is what that means in practice and when you need one."
date: 2026-11-26
tags: [ai-agents, llm, tool-use]
translation: que-es-un-agente-de-ia
---

An **AI agent** is a language model running in a loop: it reads a goal, decides which tool to call, looks at the result, and repeats until the goal is met or it gives up.

## Agent vs. workflow

- **Workflow:** you write the steps. The model fills in one step at a time (summarize this, classify that). Predictable and cheap.
- **Agent:** the model chooses the steps. More flexible, but slower, costlier and harder to test.

Start with a workflow. Reach for an agent only when the path can't be known in advance.

## The three parts

1. **A model** that can call tools.
2. **Tools:** functions the model can invoke (search, database query, send a WhatsApp message).
3. **A loop** with a stop condition and a budget (max steps, max cost).

## When you need one

- The task has many valid paths (research, debugging, support triage).
- Inputs are messy and the next step depends on what you just learned.

## When you don't

- The steps are fixed. Use a workflow.
- Mistakes are expensive and irreversible. Add a human approval step first.

*Have a business problem you want to solve with AI? [Email me](mailto:orlando@gadmin.app).*
