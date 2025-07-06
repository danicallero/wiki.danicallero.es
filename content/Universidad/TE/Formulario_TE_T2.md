---
title: Formulario T2
tags:
  - Universidad
  - Tecnología-Electrónica
date: 2025-07-06
aliases: 
draft: false
---
# Tema 2: Carga y descarga del condensador y amplificadores

[Descargar formulario](images/Formulario_TE_T2.pdf)

---
### 1. Señales no periódicas

#### Escalón:
$$
x(t)=
\begin{cases}
0, & \text{si } t < t_I \\
A, & \text{si } t \geq t_I
\end{cases}
$$
- Transición brusca de 0 a A en $t = t_I$.

#### Exponencial:
$$
x(t) =
\begin{cases}
0, & \text{si } t < t_I \\
A\, e^{-a(t - t_I)}, & \text{si } t \geq t_I
\end{cases}
$$
- Decae exponencialmente desde $A$ hasta $0$.

---
### 2. Señales periódicas

- **Alterna pura**: valor medio $= 0$ (ej: seno).
- **Compuesta**: mezcla de continua y alterna.
- Ejemplos: cuadrada, triangular, diente de sierra, sinusoidal.

---
### 3. Parámetros clave

- Valor instantáneo: $x(t)$  
- Periodo: $T$  
- Frecuencia: $f = \frac{1}{T}$  
- Frecuencia angular: $\omega = 2\pi f$  
- Amplitud: $X_m$  
- Valor pico: $X_p$  
- Pico a pico: $X_{pp} = X_{ps} - X_{pi}$  
- Valor medio:
  $$
  X_{dc} = \frac{1}{T} \int_0^T x(t)\;\mathrm{d}t
  $$
- Valor eficaz (RMS):
  $$
  X_{ef} = \sqrt{\frac{1}{T} \int_0^T x^2(t)\, \mathrm{d}t}
  $$

---
## 4. El condensador

Dispositivo que **almacena energía** en forma de campo eléctrico.

>[!note] Fórmulas fundamentales:
> - $C = \frac{Q}{V}\quad [F].$
> - $W = \frac{1}{2} C V^2 = \frac{1}{2} Q V = \frac{1}{2} \frac{Q^2}{C}\quad [J].$

### Condensador plano-paralelo:
$$
C = \frac{\varepsilon_0 A}{d}\quad [F].
$$
- $\varepsilon_0 = 8.85 \cdot 10^{-12}$ F/m

>[!note] Relación 
>La capacidad de un condensador plano-paralelo es proporcional al área de las placas e inversamente proporcional a la distancia que las separa.
>El símbolo $\epsilon_0$ es con el que se representa la _permitividad_.
---

### Asociación de condensadores

**Serie:**
$$
\frac{1}{C_{eq}} = \sum_i \frac{1}{C_i}\quad [F].
$$

**Paralelo:**
$$
C_{eq} = \sum_i C_i\quad [F].
$$

>[!note] Observaciones:
> - **1 faradio (F)** = $1\; culombio / voltio \implies  C = \frac{Q}{V}$
> - En **serie**, la capacidad equivalente es **menor** que cualquier componente individual.  
> - En **paralelo**, la capacidad equivalente es la **suma directa**.

---
## 5. Comportamiento temporal del condensador

- Tensión:
  $$
  v_C(t) = \frac{q(t)}{C}\quad [V].
  $$
- Corriente:
  $$
  i(t) = \frac{\mathrm{d}q(t)}{\mathrm{d}t}\quad [A].
  $$
- Si $i(t)$ es conocida:
  $$
  v_C(t)= \frac{q(t)}{C}\implies v_C(t) = \frac{1}{C} \int_0^t i(\tau) \mathrm{d}\tau\quad [V].
  $$

>[!ojo] ¿Sabías que?
>La tensión en un condensador **no puede cambiar bruscamente**.

---
## 6. Circuito RC en serie (dominio del tiempo)

### Ecuación de malla (Kirchhoff):
$$
v(t) = v_R(t) + v_C(t)
$$

Sustituyendo:
$$
i(t) = C \frac{\mathrm{d}v_C(t)}{\mathrm{d}t} \Rightarrow V = RC \frac{\mathrm{d}v_C(t)}{\mathrm{d}t} + v_C(t)
$$
>[!ojo] ¿Sabías que?
>La tensión en la resistencia se obtiene con: $v_R(t)+v_C(t)=0\implies v_R(t)=-v_C(t)$. 
---
### Carga del condensador
- Tensión:
  $$
  v_C(t) = V \left(1 - e^{-(t - t_i)/\tau}\right)\quad [V].
  $$
- Corriente:
  $$
  i(t) = \frac{v_R(t)}{R} =\frac{V}{R} e^{-(t - t_i)/\tau}\quad [A].
  $$

---
### Descarga del condensador
- Tensión:
  $$
  v_C(t) = V e^{-(t - t_i)/\tau}\quad [V].
  $$
- Corriente:
  $$
  i(t) = -\frac{V}{R} e^{-(t - t_i)/\tau}\quad [A].
  $$

---
## 7. Circuitos RC integrador y diferenciador

### Integrador:
- Salida: $v_o(t) = v_C(t)$
- Se integra si: $5\tau \gg \frac{T}{2}$

### Diferenciador:
- Salida: $v_o(t) = v_R(t)$
- Se deriva si: $5\tau \ll \frac{T}{2}$

---
## 8. Amplificadores

### Definición
Circuito que **amplifica** tensión, corriente o potencia de una señal.

### Tipos:
- De tensión, corriente o potencia.

---
### Ganancias

- **Tensión:**
  $$
  A_V = \frac{V_o}{V_i},\quad A_V[dB] = 20 \log_{10} \frac{\left|V_o\right|}{\left|V_i\right|}\quad [adimensional]\quad V_o, V_i \;\;\text{en voltios (V).}
  $$

- **Corriente:**
  $$
  A_I = \frac{I_o}{I_i},\quad A_I[dB] = 20 \log_{10} \frac{\left|I_o\right|}{\left|I_i\right|}\quad [adimensional]\quad I_o, I_i \;\;\text{en amperios (A).}
  $$

- **Potencia:**
  $$
  A_P = \frac{P_o}{P_i},\quad A_P[dB] = 10 \log_{10} \frac{\left|P_o\right|}{\left|P_i\right|}\quad [adimensional]\quad P_o, P_i \;\;\text{en vatios (W).}
  $$
  $$
  A_P = A_V \cdot A_I = \frac{V_o I_o}{V_i I_i}\quad [adimensional].
  $$

---
### Parámetros del amplificador

- Resistencia de entrada:
  $$
  R_i = \frac{V_i}{I_i}\quad [\Omega].
  $$
- Resistencia de salida:
  $$
  R_o = \frac{V_o(R_L = \infty)}{I_o(R_L = 0)}\quad [\Omega].
  $$

---
### Respuesta en frecuencia

- Frecuencias de corte: $f_{CL}, f_{CH}$
- A frecuencias de corte:
  - $A_V$ cae un $\frac{1}{\sqrt{2}}$ (−3 dB)
  - $A_P$ cae un $\frac{1}{2}$
- Ancho de banda:
  - AC: $B = f_{CH} - f_{CL}$
  - DC: $B = f_{CH}$

---
## 9. Resumen de fórmulas clave

- $\tau = RC$
- $v_C(t)$ (carga): $V(1 - e^{-t/\tau})$
- $v_C(t)$ (descarga): $V e^{-t/\tau}$
- $i(t)$ (carga): $\frac{V}{R} e^{-t/\tau}$
- $i(t)$ (descarga): $-\frac{V}{R} e^{-t/\tau}$
- Energía almacenada: $W = \frac{1}{2} C V^2$
- Capacidad plano-paralelo: $C = \frac{\varepsilon_0 A}{d}$

---
<div align="center">
Daniel Callero. <a href="https://wiki.danicallero.es/Universidad">wiki.danicallero.es</a>
</div>
