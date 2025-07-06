---
title: Resumen T4
tags:
  - Universidad
  - Tecnología-Electrónica
date: 2025-07-06
aliases: 
draft: false
---
# Tema 4: transistores
## 4.1 El transistor unipolar MOSFET

Los transistores se agrupan en dos grandes familias: los bipolares y los unipolares. En este tema se estudian los **transistores unipolares**, también llamados **transistores de efecto de campo** (FET, *Field Effect Transistor*). Su función principal es controlar una corriente a través de una diferencia de potencial.

Dentro de los FET, el más importante es el **MOSFET de acumulación** (*Metal-Oxide-Semiconductor Field Effect Transistor*), que ha sido clave en los avances de la electrónica moderna. Existen también otros tipos como el MOSFET de deplexión y el JFET (*Junction Field Effect Transistor*), pero no se tratan en profundidad aquí.

El MOSFET presenta las siguientes características fundamentales:

- Su funcionamiento se basa únicamente en la circulación de **portadores mayoritarios**, por eso es un dispositivo unipolar.
- Tiene una **resistencia de entrada muy elevada**, del orden de $10^{10}$ a $10^{15}~\Omega$. Esto implica que prácticamente no consume corriente de entrada: $I_G \approx 0$.
- Consume muy poca energía y permite construir circuitos con **alto grado de integración**, ya que se pueden agrupar muchos en un espacio reducido.
- Puede conectarse como **resistencia de carga**, lo que permite construir circuitos exclusivamente con MOSFET.
- Funciona como **conmutador bilateral simétrico**, permitiendo la conducción en ambos sentidos bajo ciertas condiciones.
- Puede utilizarse como **elemento de memoria**, ya que es capaz de almacenar carga en su estructura.
- Genera **poco ruido** eléctrico en comparación con otros dispositivos.
- Tiene **alto FAN-OUT**, es decir, puede excitar muchas entradas digitales a la vez sin perder señal (esto se verá con más detalle en el Tema 5).

El MOSFET de acumulación será el tipo principal que se estudiará a lo largo del tema.
## 4.2 MOSFET de acumulación canal N y canal P

### 4.2.1 Estructura física y símbolos

El **MOSFET de canal N (NMOS)** se fabrica sobre un sustrato tipo $p$, al que se difunden dos regiones altamente dopadas tipo $n^+$ que forman el **drenador (D)** y la **fuente (S)**. Entre ambas, encima del sustrato, se sitúa la **puerta (G)**, separada del semiconductor por una fina capa de óxido de silicio ($SiO_2$).

Este óxido proporciona una altísima resistencia de entrada (del orden de $10^{10}$ a $10^{15}~\Omega$), por lo que:

$$
I_G \approx 0
$$

La corriente de drenador $I_D$ está controlada por la tensión puerta-fuente $V_{GS}$.

Los terminales del MOSFET son:
- Drenador (D)
- Fuente (S)
- Puerta (G)
- Sustrato (B), que suele conectarse a la fuente (S) en circuitos integrados, dando lugar a un dispositivo de 3 terminales.

El **MOSFET de canal P (PMOS)** tiene estructura similar pero sobre sustrato tipo $n$ y con regiones $p^+$ para fuente y drenador. La corriente también es controlada por tensión, pero en este caso se invierte el sentido de las corrientes y las tensiones.

### 4.2.2 Funcionamiento del transistor NMOS

Si $V_{GS} = 0$, **no hay canal** entre las regiones $n^+$ (no se conduce).

Cuando se aplica una tensión positiva a la puerta respecto a la fuente ($V_{GS} > 0$), se induce un **canal de inversión** tipo $n$ cerca del óxido, formado por electrones que provienen del sustrato y las zonas $n^+$.

El canal comienza a formarse cuando:

$$
V_{GS} = V_T
$$

Donde $V_T$ es la **tensión umbral** del transistor, típicamente entre 1 V y 6 V. Para $V_{GS} > V_T$, el canal se ensancha y el transistor conduce.

#### Regiones de funcionamiento

1. **Región de corte**:  
   $V_{GS} < V_T \Rightarrow$ no hay canal, $I_D = 0$

2. **Región óhmica** (lineal):  
   El canal está presente y $V_{DS}$ es pequeño:  
   $$
   V_{DS} \leq V_{GS} - V_T
   $$  
   El transistor se comporta como una **resistencia controlada por voltaje**.

3. **Región de saturación**:  
   $$
   V_{DS} \geq V_{GS} - V_T
   $$  
   El canal se estrangula en el extremo del drenador y la corriente se estabiliza. La corriente se modela como:

   $$
   I_D = k(V_{GS} - V_T)^2
   $$

   donde $k$ es la constante de transconductancia, en $[mA/V^2]$.

Estas regiones se representarán más adelante en las curvas características del transistor.

> Nota: En el PMOS, todo se comporta igual pero con signos opuestos. En lugar de $V_{GS}$ se utiliza $V_{SG}$, y las corrientes fluyen en sentido opuesto.

## 4.3 Características V–I en fuente común

### 4.3.1 NMOS: curvas de salida y de transferencia

Se estudia el comportamiento del MOSFET cuando se conecta en **fuente común**, que es una de las configuraciones más utilizadas.

#### Curva de transferencia: $I_D = f(V_{GS})$

En el montaje típico se fija $V_{DD}$ y se varía $V_{GS} = V_{GG}$, midiendo la corriente de drenador $I_D$.

La curva que relaciona $I_D$ con $V_{GS}$ se llama **característica de transferencia**. Tiene forma parabólica en la zona de saturación y se expresa como:

$$
I_D = k(V_{GS} - V_T)^2
$$

Esta fórmula es válida si:
- $V_{GS} \geq V_T$
- $V_{DS} \geq V_{GS} - V_T$ (zona de saturación)

Donde:
- $V_T$ es la **tensión umbral**
- $k$ es la **constante de transconductancia** ($[mA/V^2]$)

![[fig4.12.png|400]]
> 💡 Curvas $I_D = f(V_{GS})$ para diferentes $V_{DS}$.

---

#### Curva de salida: $I_D = f(V_{DS})$

En este caso se fija $V_{GS}$ y se varía $V_{DS} = V_{DD}$, midiendo la corriente $I_D$. Esto nos da la **característica de salida**, que refleja el comportamiento del transistor en la **malla de salida**.

La forma de la curva depende de $V_{GS}$:

- Si $V_{GS} < V_T$: el transistor está en corte ⇒ $I_D = 0$
- Si $V_{DS} < V_{GS} - V_T$: zona óhmica (comportamiento resistivo)
- Si $V_{DS} \geq V_{GS} - V_T$: zona de saturación (comportamiento de corriente constante)

En la zona óhmica, la resistencia del canal se puede estimar como:

$$
r_{DS} = \frac{1}{k(V_{GS} - V_T)}
$$
![[fig4.14.png|400]]
> 💡 Curvas $I_D = f(V_{DS})$ para distintos $V_{GS}$.

![[fig4.19.png]]
> 💡 Zonas de funcionamiento de un transistor.

También se puede deducir esta resistencia a partir de la pendiente en la zona lineal de la curva de salida.

**Zona de ruptura**: si $V_{DS}$ aumenta en exceso, se produce avalancha en la unión drenador-sustrato y se puede destruir el dispositivo.

---

### 4.3.2 PMOS: curvas de salida y de transferencia

El análisis es análogo al del NMOS, pero con sentido de tensiones e intensidades opuestos.

Se utiliza $V_{SG}$ como tensión de control (en lugar de $V_{GS}$) y $V_{SD}$ como tensión de salida (en lugar de $V_{DS}$).

Para que el PMOS conduzca se necesita:

$$
V_{SG} > |V_T|
$$

Las expresiones se mantienen, cambiando signos. Por ejemplo, la curva de transferencia es:

$$
I_D = k(V_{SG} - |V_T|)^2
$$

Y la resistencia del canal en la zona óhmica es:

$$
r_{SD} = \frac{1}{k(V_{SG} - |V_T|)}
$$
![[fig4.17.png]]
> 💡 Curva de salida $I_d=f(V_{SD})$ y de transferencia $I_D=f(V_{SG})$ para el transistor PMOS.

![[fig4.18.png]]
> 💡 Curva linealizada de salida $I_d=f(V_{SD})$ y de transferencia $I_D=f(V_{SG})$ para el transistor PMOS.

---

### Resumen de regiones de operación

- **Corte**: $V_{GS} < V_T \Rightarrow I_D = 0$
- **Óhmica**: $V_{DS} < V_{GS} - V_T$ ⇒ comportamiento resistivo
- **Saturación**: $V_{DS} \geq V_{GS} - V_T$ ⇒ $I_D = k(V_{GS} - V_T)^2$
## 4.4 Regiones de funcionamiento y modelos equivalentes lineales

### 4.4.1 Zona segura de funcionamiento

Las curvas $I_D = f(V_{DS})$ presentan tres regiones principales:

- **Corte**: no hay conducción.  
  $V_{GS} < V_T \Rightarrow I_D = 0$
- **Óhmica**: el canal se comporta como una resistencia variable.  
  $V_{DS} < V_{GS} - V_T$
- **Saturación**: corriente constante.  
  $V_{DS} \geq V_{GS} - V_T \Rightarrow I_D = k(V_{GS} - V_T)^2$

Estas tres zonas definen el comportamiento del transistor. Solo puede funcionar de forma estable dentro de la **zona segura**, delimitada por:

- $I_D \leq I_{D,\text{max}}$
- $V_{DS} \leq V_{DS,\text{max}}$
- $P_D = V_{DS} \cdot I_D \leq P_{D,\text{max}}$
![[content/images/fig4.19.png]]
> 💡 Zonas y los límites seguros de operación del MOSFET.

---

### 4.4.2 Modelos equivalentes lineales (NMOS y PMOS en fuente común)

Los modelos lineales permiten analizar el comportamiento del transistor en cada región con circuitos equivalentes más simples.

#### Transistor NMOS

| Región         | Condición                          | Modelo equivalente                      |
|----------------|------------------------------------|------------------------------------------|
| Corte          | $V_{GS} < V_T$                     | $I_D = 0$                                |
| Óhmica         | $V_{GS} \geq V_T$ y $V_{DS} \leq V_{GS} - V_T$ | Resistencia $r_{DS} = \dfrac{1}{k(V_{GS} - V_T)}$ |
| Saturación     | $V_{GS} \geq V_T$ y $V_{DS} \geq V_{GS} - V_T$ | $I_D = k(V_{GS} - V_T)^2$                |

#### Transistor PMOS

Las expresiones son similares, pero usando $V_{SG}$ y $V_{SD}$, y respetando los signos correspondientes.
![[fig4.20.png]]
> 💡 Modelos lineales equivalentes del NMOS en fuente común.

![[fig4.21.png]]
> 💡 Modelos lineales equivalentes del PMOS en fuente común.

Estos modelos son muy útiles para:
- Análisis de circuitos digitales (como inversores lógicos).
- Estudio de conmutación y amplificación.
- Cálculos de respuesta dinámica y estática.
## 4.5 El transistor NMOS en amplificación y en conmutación

Esta sección estudia cómo se comporta un transistor NMOS en dos situaciones clave:

- **Amplificación de señales analógicas**
- **Conmutación ON/OFF para señales digitales**

Se utiliza un montaje típico: un NMOS en fuente común con una resistencia de drenador $R_D$, alimentado con $V_{DD}$.

---

### 4.5.1 Característica de transferencia de un inversor NMOS

Se analiza el circuito inversor NMOS formado por un transistor en fuente común, con una resistencia $R_D$ conectada al drenador y una alimentación $V_{DD}$.

La entrada $V_i$ se aplica a la puerta:  
$$
V_{GS} = V_i
$$

La salida se toma en el drenador:  
$$
V_{DS} = V_o
$$

Dependiendo del valor de $V_i$, el transistor puede estar en corte, saturación u óhmica.

#### a) Transistor en **corte**

Si $V_i < V_T$, entonces $V_{GS} < V_T \Rightarrow I_D = 0$, el transistor no conduce.

$$
V_o = V_{DD}
$$

---

#### b) Transistor en **saturación**

Si $V_T \leq V_i < V_{\text{OHM/SAT}}$, el transistor conduce y está en zona de saturación:

$$
I_D = k(V_i - V_T)^2
$$

Por la ley de Ohm en $R_D$:

$$
V_o = V_{DD} - R_D \cdot I_D = V_{DD} - k R_D (V_i - V_T)^2
$$

Condición para seguir en saturación:

$$
V_o = V_{DS} \geq V_{GS} - V_T = V_i - V_T
$$

---

#### c) Transistor en **óhmica**

Cuando $V_i \geq V_{\text{OHM/SAT}}$, se entra en la zona óhmica:

$$
r_{DS} = \frac{1}{k(V_i - V_T)}
$$

Y:

$$
V_o = V_{DD} \cdot \frac{1}{1 + k R_D (V_i - V_T)}
$$

---

#### Límite SAT–ÓHM

Se obtiene resolviendo:

$$
V_{DD} - k R_D (V_i - V_T)^2 = \frac{V_{DD}}{1 + k R_D (V_i - V_T)}
$$

Despejando:

$$
V_i^{\text{OHM/SAT}} = -1 + \sqrt{1 + 4k R_D V_{DD}} \,/\, (2kR_D) + V_T
$$

---

#### Ejemplo con valores:

Para $V_{DD} = 5\,V$, $R_D = 10\,k\Omega$, $k = 1\,\text{mA}/\text{V}^2$, $V_T = 1.25\,V$:

$$
V_i^{\text{OHM/SAT}} \approx 1.91\,V
$$

La característica de transferencia $V_o = f(V_i)$ se aproxima con tres expresiones:

$$
V_o =
\begin{cases}
5, & V_i < 1.25 \\
5 - 10(V_i - 1.25)^2, & 1.25 \leq V_i < 1.91 \\
\frac{5}{1 + 10(V_i - 1.25)}, & V_i \geq 1.91
\end{cases}
$$
![[fig4.24.png|400]]
> 💡 Curva característica de transferencia $V_o = f(V_i)$.

---

### 4.5.2 Amplificador inversor NMOS

Se aprovecha la **zona de saturación** para amplificar pequeñas señales.

Si se aplica una señal senoidal pequeña superpuesta a una tensión de polarización $V_i$, por ejemplo:

$$
v_i(t) = 1.75 + 0.05 \cdot \sin(2\pi \cdot 1000\,t)
$$

Y se encuentra en la región de saturación, se obtiene una salida:

$$
v_o(t) = V_{DD} - k R_D (v_i(t) - V_T)^2
$$

La ganancia es **negativa** y variable:

- Tensión amplificada en oposición de fase (ganancia $\approx -10$ en el ejemplo).
- El circuito es **no lineal**, ya que la relación es cuadrática.
- Puede usarse realimentación negativa para linealizar la respuesta.
![[fig4.25.png|400]]
> 💡 Gráfico de entrada y salida amplificada.

---

### 4.5.3 Interruptor NMOS con resistencia de drenador en estática

Si aplicamos una **onda cuadrada** a la entrada:

- Cuando $V_i = 0 \Rightarrow$ transistor en corte $\Rightarrow V_o = V_{DD}$
- Cuando $V_i = V_{DD} \Rightarrow$ transistor conduce (óhmica o saturación) $\Rightarrow V_o \approx 0$

Así, el inversor actúa como **interruptor lógico** (0 ↔ 1).
![[fig4.26.png]]
> 💡 Gráfico de la respuesta $V_o(t)$ ante entrada cuadrada.

---

### 4.5.4 Interruptor NMOS con resistencia de drenador en dinámica

Se estudia el efecto de la **capacidad de carga** $C_L$ conectada en la salida del circuito.

- Al conmutar la entrada, el transistor descarga o carga $C_L$ → **tiempos de retardo**
- En conmutación $H \rightarrow L$, el transistor descarga el condensador.
- En conmutación $L \rightarrow H$, la resistencia $R_D$ lo recarga.

#### Fases del funcionamiento:

1. $t = 0$: $V_i$ pasa de 0 a $V_{DD}$ → el transistor empieza a conducir → $V_o$ cae (descarga de $C_L$).
2. $t = T$: $V_i$ vuelve a 0 → el transistor entra en corte → $C_L$ se recarga a través de $R_D$.
3. La descarga/carga sigue una evolución exponencial con constantes de tiempo $\tau = R_{\text{Th}} \cdot C_L$.
![[fig4.28.png|400]]
> 💡 Evolución de $V_o(t)$ con y sin condensador de carga (Figura 4.28).

## 4.6 El transistor PMOS en conmutación

El funcionamiento como interruptor del transistor **PMOS** es simétrico al del **NMOS**, pero con tensiones y corrientes invertidas. Aquí se analiza su comportamiento en un montaje con resistencia de drenador (**pull-down**), conectado en fuente común.

Se estudia un circuito con:

- PMOS con $V_T$ y $k$ conocidos.
- Alimentación $V_{SS}$
- Resistencia de drenador $R_D$
- Entrada $V_i$ aplicada a la puerta.
- Salida $V_o$ tomada en el drenador.

#### Tensión de control:

Para el PMOS, la tensión de control es:

$$
V_{SG} = V_{SS} - V_i
$$

La salida está en:

$$
V_{SD} = V_{SS} - V_o
$$

---

### Análisis del funcionamiento

#### a) Transistor en corte (OFF)

Si $V_i = V_{iH}$ tal que:

$$
V_{SG} < |V_T|
$$

Entonces el transistor no conduce:  
$$
I_D = 0 \Rightarrow V_o = 0\,V
$$

> 💡 En este caso, $V_o$ cae a masa a través de $R_D$ (pull-down).

---

#### b) Transistor en conducción (ON)

Cuando $V_i = V_{iL} = 0\,V$, se tiene:

$$
V_{SG} = V_{SS} \geq |V_T| \Rightarrow Q \text{ conduce}
$$

Pueden darse dos casos:

##### 1. Zona de saturación

Condición:

$$
V_{SD} \geq V_{SG} - |V_T|
$$

Corriente de drenador:

$$
I_D = k(V_{SG} - |V_T|)^2 = k(V_{SS} - |V_T|)^2
$$

Tensión de salida:

$$
V_o = V_{SS} - I_D \cdot R_D = V_{SS} - k R_D (V_{SS} - |V_T|)^2
$$

##### 2. Zona óhmica

Condición:

$$
V_{SD} \leq V_{SG} - |V_T|
$$

Resistencia del canal:

$$
r_{SD} = \frac{1}{k(V_{SG} - |V_T|)} = \frac{1}{k(V_{SS} - |V_T|)}
$$

Corriente:

$$
I_D = \frac{V_{SS}}{R_D + r_{SD}}
$$

Tensión de salida:

$$
V_o = V_{SS} - I_D \cdot r_{SD} = V_{SS} - \frac{V_{SS} \cdot r_{SD}}{R_D + r_{SD}} = I_D \cdot R_D
$$

---

### Conclusión

El comportamiento es completamente análogo al del NMOS:

- Se comporta como un interruptor activo en los niveles de entrada bajos.
- La conmutación se realiza entre las regiones de corte y óhmica.
- La zona de saturación permite operación como amplificador inversor.
![[fig4.29.png|400]]
> 💡 Esquema del circuito PMOS con $R_D$ a masa. 

![[fig4.30.png]]
> 💡 Modelos equivalentes en corte (a), óhmica (b) y saturación (c).