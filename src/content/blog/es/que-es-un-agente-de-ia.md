---
title: "¿Qué es un agente de IA? Una definición práctica para builders"
description: "Un agente de IA es un modelo de lenguaje que decide qué herramientas llamar en un ciclo hasta cumplir una meta. Qué significa en la práctica y cuándo lo necesitas."
date: 2026-11-26
tags: [agentes-ia, llm, herramientas]
translation: what-is-an-ai-agent
---

Un **agente de IA** es un modelo de lenguaje en un ciclo: lee una meta, decide qué herramienta llamar, mira el resultado y repite hasta cumplir la meta o rendirse.

## Agente vs. flujo de trabajo

- **Flujo de trabajo:** tú escribes los pasos. El modelo resuelve uno a la vez (resumir esto, clasificar aquello). Predecible y barato.
- **Agente:** el modelo elige los pasos. Más flexible, pero más lento, más caro y más difícil de probar.

Empieza con un flujo. Usa un agente solo cuando el camino no se pueda conocer de antemano.

## Las tres partes

1. **Un modelo** que pueda llamar herramientas.
2. **Herramientas:** funciones que el modelo puede invocar (buscar, consultar una base de datos, enviar un WhatsApp).
3. **Un ciclo** con condición de parada y presupuesto (máximo de pasos, máximo de costo).

## Cuándo lo necesitas

- La tarea tiene muchos caminos válidos (investigación, depuración, triaje de soporte).
- Las entradas son desordenadas y el siguiente paso depende de lo que acabas de aprender.

## Cuándo no

- Los pasos son fijos. Usa un flujo de trabajo.
- Los errores son caros e irreversibles. Agrega primero una aprobación humana.

*¿Tienes un problema de negocio para resolver con IA? [Escríbeme](mailto:orlando@gadmin.app).*
