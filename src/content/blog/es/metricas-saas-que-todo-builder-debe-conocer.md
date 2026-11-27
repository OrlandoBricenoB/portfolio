---
title: "Métricas SaaS para builders: MRR, churn, CAC, LTV y NRR explicados"
description: "Guía práctica de las métricas SaaS que miden el crecimiento real: MRR, ARR, churn, NRR, CAC, LTV, payback, ARPU, GMV, PLG y SLG, con fórmulas y ejemplos."
date: 2026-11-26
tags: [saas, métricas, crecimiento]
translation: saas-metrics-every-builder-should-know
cover: ../../../assets/blog/saas-metrics.webp
---

"Los usuarios crecen" no es una métrica. Estos son los números que inversionistas, compradores y tu propio equipo usan para saber si un negocio de software está sano. Apréndelos temprano; arreglarlos tarde es mucho más difícil.

## Ingresos recurrentes: MRR y ARR

**MRR (Monthly Recurring Revenue)** son los ingresos recurrentes predecibles de cada mes. Excluye pagos únicos de configuración y consultoría. Sigue sus movimientos:

- **New MRR:** de clientes nuevos.
- **Expansion MRR:** upsells y cross-sells.
- **Contraction MRR:** downgrades.
- **Churned MRR:** cancelaciones.
- **Net New MRR:** New + Expansion − Contraction − Churned.

**ARR (Annual Recurring Revenue)** es MRR × 12 (más contratos anuales). Es el número con el que se valoran las empresas SaaS.

## Churn y NRR: ¿se quedan los clientes?

El **churn** es el porcentaje que pierdes en un período. El **logo churn** cuenta clientes; el **revenue churn** cuenta dinero. Perder el 5 % de los clientes cada mes significa reemplazar toda tu base en menos de dos años.

**NRR (Net Revenue Retention)** son los ingresos recurrentes que conservas de una cohorte existente tras sumar expansiones y restar cancelaciones:

```
NRR = (MRR inicial + Expansión − Contracción − Churn) / MRR inicial
```

Por encima de **100 %** creces aunque no cierres ningún cliente nuevo. El buen SaaS B2B vive entre 110 % y 130 %.

## Economía unitaria: CAC, LTV, payback

- **CAC (Customer Acquisition Cost):** gasto total de ventas y marketing ÷ clientes nuevos del período.
- **LTV (Lifetime Value):** ganancia bruta que genera un cliente en toda su vida. Fórmula rápida: `ARPA × margen bruto ÷ churn mensual`.
- **LTV:CAC:** lo saludable es **3:1 o más**. Por debajo de 1:1 pagas por perder dinero.
- **CAC payback:** meses de margen bruto necesarios para recuperar el CAC. Menos de 12 meses es sólido para SaaS de pymes.

**Ejemplo:** CAC $300, ARPA $50/mes, margen 80 %, churn mensual 3 %. LTV = 50 × 0,8 ÷ 0,03 ≈ $1.333. LTV:CAC ≈ 4,4:1. Payback = 300 ÷ 40 = 7,5 meses. Saludable.

## ARPU / ARPA y GMV

**ARPU / ARPA** es el ingreso mensual promedio por usuario o por cuenta. Te dice si debes subir de segmento o de precio.

**GMV (Gross Merchandise Value)** es el volumen bruto de transacciones que pasan por un marketplace o fintech. **No son tus ingresos**: tus ingresos son el GMV × **take rate**. Una plataforma con $1M de GMV y 10 % de take rate gana $100k.

## Cómo creces: PLG vs. SLG

- **PLG (Product-Led Growth):** el propio producto adquiere y convierte usuarios (freemium, prueba gratis, viralidad). Precio bajo, alto volumen.
- **SLG (Sales-Led Growth):** un equipo comercial (SDRs, Account Executives) cierra cuentas medianas y Enterprise. Precio más alto, ciclos más largos.

Muchas empresas empiezan con PLG y suman ventas cuando las cuentas crecen.

## Cuáles medir primero

Si tienes una hora al mes, mide: **crecimiento del MRR, logo churn, NRR y CAC payback**. Suma el resto al escalar. Mide siempre por **cohorte**; los promedios esconden problemas.

Siguiente: **cómo la caja, el runway y el burn deciden cuánto sobrevives**.
