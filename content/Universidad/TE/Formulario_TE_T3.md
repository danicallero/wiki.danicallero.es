---
title: Formulario T3
tags:
  - Universidad
  - Tecnología-Electrónica
date: 2025-07-06
aliases: 
draft: false
---
# Tema 3: Diodos de unión p-n

[Descargar formulario](images/Formulario_TE_T3.pdf)

---
## 1. Principios físicos
### 1.1 Bandas de energía
- En un átomo: niveles discretos (modelo de Bohr).
- En sólidos: aparecen bandas por interacción entre átomos cercanos.
- Tipos:
  - **Banda de Valencia (BV):** ocupada por electrones de valencia.
  - **Banda de Conducción (BC):** niveles energéticos para electrones libres.
  - **Banda Prohibida (BP):** energías no permitidas.
### 1.2 Clasificación de materiales
- **Aislantes:** BP ancha (> 3 eV).
- **Conductores:** BV y BC se solapan.
- **Semiconductores:** BP estrecha (~1 eV). Ej: Silicio (Si), Germanio (Ge).

---
## 2. Semiconductores
### 2.1 Intrínsecos (puros)
- Conducción térmica: generación de pares.
- Concentraciones:
$$
n = p = n_i
$$
>[!ojo] ¿Sabías que?
>Al aumentar la temperatura aumenta la concentración de portadores de carga ($n_i$). Luego, la capacidad conductora del material (electrones y huecos: $n$ y $p$) también.
- Ley de acción de masas:

$$
n \cdot p = n_i^2
$$

### 2.2 Extrínsecos (dopados)
- **Tipo n** (donadores, grupo V): $n \gg p$ (electrones mayoritarios).
- **Tipo p** (aceptadores, grupo III): $p \gg n$ (huecos mayoritarios).

---
## 3. Unión p–n
### 3.1 En circuito abierto
- Aparece zona de transición con iones fijos → campo interno.
- No hay tensión entre bornes: $V = 0$.
### 3.2 Polarizada directamente
- Se reduce la barrera de potencial:

$$
V_J = V_0 - V
$$
- El diodo **conduce** si $V > V_\gamma$.

### 3.3 Polarizada inversamente
- Se incrementa la barrera:

$$
V_J = V_0 + V
$$
- Flujo de portadores minoritarios → corriente inversa $I_0$.

---
## 4. Característica V–I del diodo
### 4.1 Ecuación de Shockley
$$
I = I_o \left (e^{\frac{V}{\eta V_T}} - 1
\right)
$$

- $I_0$: corriente inversa de saturación.
- $V_T$: tensión térmica:

$$
V_T = \frac{k \cdot T}{q} \approx \frac{T}{11600}
$$
- $\eta$: coef. de emisión (1 para Ge, 2 para Si).

### 4.2 Curva real
- Conducción efectiva a partir de $V_\gamma$:
  - Ge: $V_\gamma \approx 0.2$ V
  - Si: $V_\gamma \approx 0.6$ V
  - Zéner: $V_Z$ (en inversa)

---

## 5. Diodos especiales

### 5.1 Zéner
- Diseñado para trabajar en ruptura inversa.
- Corriente inversa se mantiene constante: $V \approx V_Z$.
- Potencia máxima:

$$
P_Z = V_Z \cdot I_{Z\text{max}}
$$
### 5.2 LED
- Diodo que **emite luz** al conducir en directa.
- Energía del fotón emitido:

$$
E = h \cdot f = \frac{h \cdot c}{\lambda}
$$
- Color depende del material:
  - GaAs: infrarrojo
  - AlGaAs: rojo
  - GaP: verde
  - InGaN: azul

### 5.3 Fotodiodo
- Polarizado en inversa.
- Incidencia de luz genera pares e⁻–h⁺ → fotocorriente proporcional a la intensidad luminosa.

### 5.4 Optoacoplador
- LED + fotodiodo / fototransistor.
- Transmite señal aislando galvánicamente dos circuitos.

---

## 6. Modelos lineales de diodos

### 6.1 Diodo p–n
- Modelo con $V_\gamma \neq 0$:
  - Si $V < V_\gamma$: abierto (DOFF)
  - Si $V \geq V_\gamma$: cortocircuito ideal (DON)
- Modelo ideal: $V_\gamma = 0$ (conduce desde $V = 0$)

### 6.2 Diodo Zéner
- Tres zonas:
  - $V > V_\gamma$: directa
  - $V_Z < V < V_\gamma$: corte
  - $V < -V_Z$: inversa (ruptura)

---

## 7. Resumen de fórmulas clave

- $I = I_0 (e^{V/\eta V_T} - 1)$
- $n \cdot p = n_i^2$ (ley de acción de masas)
- $V_T = \frac{T}{11600}$
- $P_Z = V_Z \cdot I_{Z\text{max}}$
- $E = h \cdot f = \frac{h \cdot c}{\lambda}$ (LED)
- $V_J = V_0 - V$ (directa), $V_J = V_0 + V$ (inversa)

---

<div align="center">
Daniel Callero. <a href="https://wiki.danicallero.es/Universidad" class="es">wiki.danicallero.es</a>
</div>
