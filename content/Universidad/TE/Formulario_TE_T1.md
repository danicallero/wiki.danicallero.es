---
title: Formulario T1
tags:
  - Universidad
  - Tecnología-Electrónica
date: 2025-07-06
aliases: 
draft: false
---
# Tema 1: Circuitos eléctricos

[Descargar formulario](images/Formulario_TE_T1.pdf)

---
## 1. Conceptos básicos
### 1.1 Carga y corriente eléctrica
- **Carga eléctrica**: propiedad de las partículas. Unidad: culombio (C).
- **Corriente eléctrica**: flujo de carga por una superficie:

$$
I = \frac{\mathrm{d}Q}{\mathrm{d}t} \qquad [A].
$$

- Sentido convencional: flujo de carga positiva.

### 1.2 Campo y potencial eléctrico
- **Campo eléctrico**: fuerza por unidad de carga:

$$
\vec{E} = \frac{\vec{F}}{q} \qquad [N/C]
$$

- **Diferencia de potencial (ddp):** trabajo necesario para mover carga:

$$
V_{ab} = V_a - V_b = E \cdot d \qquad [V].
$$

### 1.3 Resistencia eléctrica y Ley de Ohm
- Relación entre tensión, corriente y resistencia (Ley de Ohm):
$$
V = I \cdot R
$$

- Resistencia de un conductor:
$$
R = \rho \cdot \frac{\ell}{S}\qquad [\Omega].
$$

- Potencia disipada:
$$
P = V \cdot I = I^2 \cdot R = \frac{V^2}{R} \qquad [W].
$$

---
## 2. Asociación de resistencias
### Serie
- Misma corriente. Suma de tensiones.
- Resistencia equivalente:

$$
R_{eq} = \sum_i R_i\qquad [\Omega].
$$

### Paralelo
- Misma tensión. Corrientes se suman.
- Resistencia equivalente:
$$
\frac{1}{R_{eq}} = \sum_i \frac{1}{R_i}\qquad [\Omega].
$$

>[!tldr] Para dos resistencias:
>$$
>R_{eq} = \frac{R_1 \cdot R_2}{R_1 + R_2}\qquad [\Omega].
>$$


---
## 3. Generadores y potencia
### Generador de tensión
- **Ideal**: $V = V_g\qquad [V].$
- **Real**: resistencia interna $R_g$
$$
V = V_g - I \cdot R_g\qquad [V].
$$

- Potencia entregada:
$$
P = V \cdot I\qquad [W].
$$

### Generador de corriente
- **Ideal**: $I = I_g\qquad [A].$
- **Real**: resistencia interna $R_g$ en paralelo
$$
I = I_g - \frac{V}{R_g}\qquad [A].
$$
- Potencia entregada:

$$
P = V \cdot I\qquad [W].
$$

---
## 4. Leyes de Kirchhoff
### Regla de los nudos (conservación de la carga)

$$
\sum I_{entrantes} = \sum I_{salientes}. \quad\text{Luego:} \quad \sum_i I_i = 0
$$

### Regla de las mallas (conservación de la energía)

$$
\sum V_i = 0
$$

- Tensiones en generadores según borne (+ / −).
- En resistencias: signo según sentido de la corriente.

---
## 5. Teoremas de circuitos
### Teorema de Thévenin
- Red equivalente: generador de tensión $V_{TH}$ en serie con resistencia $R_{TH}$.
- $V_{TH}$: tensión en circuito abierto.
- $R_{TH}$: resistencia equivalente con fuentes desactivadas.

### Teorema de Norton
- Red equivalente: generador de corriente $I_N$ en paralelo con $R_N$.
- $I_N$: corriente de cortocircuito.
- $R_N = R_{TH}$

### Teorema de superposición
- En circuitos lineales: respuesta total = suma de respuestas individuales.
- Al considerar cada fuente:
  - Tensión: se sustituye por cortocircuito.
  - Corriente: se sustituye por circuito abierto.

---
## 6. Equivalencia de generadores
### De generador de tensión a corriente:

$$
I_N = \frac{V_g}{R_g}, \qquad R_N = R_g
$$

### De generador de corriente a tensión:

$$
V_g = I_g \cdot R_g, \qquad R_g = R_g
$$

---

## 7. Resumen de fórmulas clave
- $I = \frac{\mathrm{d}Q}{\mathrm{d}t}$
- $V = I \cdot R$
- $P = V \cdot I = I^2 R = \frac{V^2}{R}$
- $R = \rho \cdot \frac{\ell}{S}$
- $R_{serie} = \sum R_i$
- $\frac{1}{R_{paralelo}} = \sum \frac{1}{R_i}$
- $V = V_g - I R_g$ (generador real de tensión)
- $I = I_g - \frac{V}{R_g}$ (generador real de corriente)

---

<div align="center">
Daniel Callero. <a href="https://wiki.danicallero.es/Universidad" class="es">wiki.danicallero.es</a>
</div>
