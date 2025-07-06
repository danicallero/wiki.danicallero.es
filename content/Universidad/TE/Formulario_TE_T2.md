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
0, & \text{si } -\infty < t < t_I \\
A, & \text{si } t_I \leq t < \infty
\end{cases}
$$

- Transición brusca de 0 a A en $t = t_I$.
#### Exponencial:
$$
x(t) =
\begin{cases}
0, & \text{si } -\infty < t < t_I \\
A\, e^{-a(t - t_I)}, & \text{si } t_I \leq t < \infty
\end{cases}
$$

- Decae desde A hasta 0 de forma exponencial.

### Señales periódicas
- **Alterna pura**: valor medio $= 0$ (ej: seno).
- **Compuesta**: mezcla de continua y alterna.
- Ejemplos: cuadrada, triangular, diente de sierra, sinusoidal.

### Parámetros clave
- Valor instantáneo: $x(t)$
- Periodo: $T$
- Frecuencia: $f = \frac{1}{T}$
- Valor pico: $X_p$, amplitud: $X_m$  
- Valor pico a pico: $X_{pp} = X_{ps} - X_{pi}$
- Valor medio: $X_{dc} = X_{c} = \frac{1}{T} \int_0^T x(t) dt.$
- Valor eficaz:$X_{ef} = X_{rms} =  \sqrt{\frac{1}{{T}} \int_0^T{x^2(t)dt.}}$

---

## 2. El condensador

- Dispositivo que **almacena energía** en forma de campo eléctrico.

>[!note] Fórmulas fundamentales:
>    - $C = \frac{Q}{V}$
>    - $W = \frac{1}{2} C V^2$
>    - $W=\frac{1}{2}Q V = \frac{1}{2}\frac{Q^2}{C}$

### Tipos de asociación
- **Serie**:
$$
\frac{1}{C_{eq}} = \sum_i\frac{1}{C_i}.
$$
- **Paralelo**:
$$
C_{eq} = \sum_i C_i.
$$
>[!note] Comportamiento
>La capacidad equivalente ==en serie== es menor que cualquiera de los condensadores, pero se aumenta la resistencia a la tensión.
>
>La capacidad eq. ==en paralelo== es la suma de las capacidades de los condensadores conectados.

### Condensador plano-paralelo:
$$
C=\frac{\epsilon_0\cdot A}{d}.
$$
>[!note] Relación
>La capacidad de un condensador plano-paralelo es proporcional al área de las placas e inversamente proporcional a la distancia que las separa.
> El símbolo $\epsilon_0$ es con el que se representa la _permitividad_.

---
## 3. Comportamiento temporal del condensador

- Tensión: $v_C(t) = \frac{q(t)}{C}$
- Corriente: $i(t) = \frac{dq(t)}{dt}$
- Si $i(t)$ conocida:
$$
v_C(t)=\frac{q(t)}{C}=\frac{1}{C}\int_0^ti(\tau)d\tau
$$
- **La tensión en un condensador NO puede cambiar bruscamente.**

---
## 4. Circuito RC en serie (dominio del tiempo)
### Carga del condensador
- Ecuación de malla:

$$
-v(t)+v_R(t)+v_C(t)=0;\quad V=i(t)\cdot R+v_C(t).
$$
- Sustituyendo $i(t) = C \frac{dv_C(t)}{dt}$:

$$
V=RC\frac{dv_C(t)}{dt}+v_C(t)
$$
- Solución general:
$$
v_C(t)=V\cdot(1-e^{-(t-t_i)/\tau})\qquad[V].
$$
- Corriente:
$$
i(t)=\frac{v_R(t)}{R}=\frac{V}{R}e^{-(t-t_i)/\tau)}\qquad[A].
$$
### Descarga del condensador

$$
v_C(t)=V\cdot e^{-(t-t_i)/\tau}\quad q(t)=C \cdot v_C(t).
$$
La tensión en la resistencia se obtiene con:

$v_R(t)+v_C(t)=0\implies v_R(t)=-v_C(t)$.

$$
v_R(t)=-V\cdot e^{-(t-t_i)/\tau}\;\;[V]\implies i(t)=\frac{v_R(t)}{R}=-\frac{V}{R}e^{-(t-t_i)/\tau}\;\;[A].
$$
---
## 5. Circuitos RC integrador y diferenciador

### Integrador:
- Entrada cuadrada $v_i(t)$ → salida: $v_o(t) = v_C(t)$.
- Se integra si: $5\tau \gg T/2$

### Diferenciador:
- Entrada $v_i(t)$ → salida: $v_o(t) = v_R(t)$
- Se deriva si: $5\tau \ll T/2$

---
## 6. Amplificadores
### Definición
- Circuito que amplifica tensión, corriente o potencia.
- Tipos: tensión, corriente, potencia.
### Ganancias
- Tensión:

$$
A_V=\frac{V_o}{V_i},\quad A_V[dB]=20 \log_{10}\frac{\mid{V_o}\mid}{\mid V_i\mid}.
$$
- Corriente:

$$
A_I = \frac{I_o}{I_i},\quad A_i[dB] = 20\log_{10}\frac{\mid I_o\mid}{\mid I_i\mid}.
$$
- Potencia:

$$
A_P = \frac{P_o}{P_i},\quad A_i[dB] = 10\log_{10}\frac{\mid P_o\mid}{\mid P_i\mid}.
$$
$$
A_P = \frac{V_oI_o}{V_iI_i}=A_VA_I
$$
### Parámetros
- Resistencia de entrada: $R_i = \frac{V_i}{I_i}$
- Resistencia de salida: $R_o = \frac{V_o(R_L=\infty)}{I_o(R_L=0)}$
### Respuesta en frecuencia
- Frecuencias de corte $f_{CL}$ y $f_{CH}$:
    - $\text{Ganancia cae 3 dB}$ → $\frac{1}{\sqrt{2}}$ en tensión, $\frac{1}{2}$ en potencia.
- Ancho de banda: $B = f_{CH} - f_{CL}$ (AC), $B = f_{CH}$ (DC).

---
## Resumen de fórmulas clave
- $\tau = R \cdot C$
- $v_C(t)$ en carga: $V (1 - e^{-t/\tau})$
- $v_C(t)$ en descarga: $V e^{-t/\tau}$
- $i(t)$ en carga: $\frac{V}{R} e^{-t/\tau}$
- $i(t)$ en descarga: $-\frac{V}{R} e^{-t/\tau}$
- $W = \frac{1}{2} C V^2$
- $C = \epsilon_0 \cdot \frac{A}{d}$

---
<div align="center">
Daniel Callero. <a href="https://wiki.danicallero.es/Universidad" class="es">wiki.danicallero.es</a>
</div>
