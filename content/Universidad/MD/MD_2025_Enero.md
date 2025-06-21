---
title: 2025 Enero
tags:
  - Universidad
  - Matemáticas-Discretas
date: 2025-06-20
aliases: 
draft: true
---
>[!warning] ¡Cuidado!
>Estos ejercicios los he hecho con mi –poco– conocimiento, y no prometo que estén bien. Si encuentras algún error no dudes en comunicármelo: hola@danicallero.es

## Ejercicio 1: 
### Enunciado:
Dado los predicados:
- $E(x)$: “x es estudiante”
- $P(x)$: “x es profesor”
- $M(x,y)$: “x envía un correo a y”

Empareja cada enunciado con su negación (entre las opciones a–e):

1. Todos los estudiantes envían un correo a algún profesor  
2. Ningún estudiante recibe un correo de todos los profesores  
3. Hay profesores que no envían correos a ningún estudiante  
4. Hay profesores que no reciben correos de ningún estudiante  
5. Algún profesor no recibe un correo de todos los estudiantes

Opciones:
- (a) $\forall z[P(z) \rightarrow (\exists y\ E(y) \land \neg M(z,y))]$
- (b) $\forall z[P(z) \rightarrow (\exists y\ E(y) \land M(z,y))]$
- (c) $\exists z[P(z) \land (\forall y\ (E(y) \rightarrow \neg M(z,y)))]$
- (d) $\exists z[E(z) \land \forall y\ (P(y) \rightarrow \neg M(y,z))]$
- (e) $\exists y[E(y) \land \forall z\ (P(z) \rightarrow M(z,y))]$

### Resolución:

**Traducción formal y su negación:**

1.  $\forall x[E(x) \rightarrow \exists y (P(y) \land M(x,y))]$  
Negación:  $\exists x[E(x) \land \forall y (P(y) \rightarrow \neg M(x,y))] \rightarrow \text{Opción (d)}$

2.  Ningún estudiante recibe un correo de todos los profesores  $\neg \exists x [E(x) \land \forall y (P(y) \rightarrow M(y,x))] \rightarrow \text{equivalente a}$  
$\forall x [E(x) \rightarrow \exists y (P(y) \land \neg M(y,x))] \rightarrow \text{Opción (a)}$

3.  $\exists x[P(x) \land \forall y (E(y) \rightarrow \neg M(x,y))] \rightarrow \text{Opción (c)}$

4.  $\exists x[P(x) \land \forall y (E(y) \rightarrow \neg M(y,x))] \rightarrow \text{similar a (d)}$

5.  $\exists x[P(x) \land \exists y (E(y) \land \neg M(y,x))] \rightarrow \text{Opción (a)}$

>[!warning] Cuidado!!!
>La resolución de este ejercicio está obviamente mal

---
## Ejercicio 2: Combinatoria

### Enunciado:
La tienda de la UDC vende camisetas en tallas S, M, L, XL. Queremos comprar 18 camisetas:

A) ¿Cuántos pedidos distintos se pueden hacer si al menos 3 son talla S?  
B) ¿Y si además hay como máximo 4 de cada otra talla?

### Tabla de referencia:

| Tipo                         | Orden | Repetición | Fórmula             |
| ---------------------------- | ----- | ---------- | ------------------- |
| Permutaciones                | ✅     | ❌          | $n!$                |
| Variaciones                  | ✅     | ❌          | $\frac{n!}{(n-k)!}$ |
| Variaciones con repetición   | ✅     | ✅          | $n^k$               |
| Combinaciones                | ❌     | ❌          | $\binom{n}{k}$      |
| Combinaciones con repetición | ❌     | ✅          | $\binom{n+k-1}{k}$  |
### Resolución:

#### A)
Definimos:
- $x_1$: camisetas talla S, con $x_1 \geq 3$
- $x_2, x_3, x_4$: tallas M, L, XL

Hacemos el cambio $x_1' = x_1 - 3$, entonces la ecuación queda:
$$
x_1' + x_2 + x_3 + x_4 = 15
$$

Número de soluciones enteras no negativas:
$$
\binom{15 + 4 - 1}{4 - 1} = \binom{18}{3} = \frac{18 \cdot 17 \cdot 16}{3 \cdot 2 \cdot 1} = 816
$$
#### B)
Restricción adicional: $x_2, x_3, x_4 \leq 4$

Sin restricciones ya sabemos que hay:
$$
T = \binom{18}{3} = 816
$$
Restamos los casos inválidos:

- Casos con una variable $> 4$:
  - Sea $x_2 > 4 \Rightarrow x_2' = x_2 - 5$
  - Ecuación: $x_1' + x_2' + x_3 + x_4 = 10 \Rightarrow \binom{13}{3} = 286$
  - Lo mismo para $x_3 > 4$ y $x_4 > 4$, total: $$
    A = 3 \cdot \binom{13}{3} = 3 \cdot 286 = 858$$

- Casos con dos variables $> 4$:
  - Ecuación: $x_1' + x_2' + x_3' + x_4 = 5 \Rightarrow \binom{8}{3} = 56$
  - Hay 3 combinaciones: M y L, M y XL, L y XL $$    B = 3 \cdot \binom{8}{3} = 3 \cdot 56 = 168$$

- Caso con las tres $> 4$:
  - Ecuación: $x_1' + x_2' + x_3' + x_4' = 0 \Rightarrow \binom{3}{3} = 1$ $$ C = 1 $$
Aplicamos inclusión-exclusión:
$$
\text{Total válido} = T - A + B - C = 816 - 858 + 168 - 1 = 125
$$

Respuesta final:
$$
\boxed{125}
$$
## Ejercicio 3:
### Enunciado:
Tenemos 10 conmutadores con valores 0,1,2. La luz se enciende si hay exactamente 4 en 0.  
¿Cuántos estados encienden la luz?
### Resolución:

- Elegir los 4 que están a 0: $$ \binom{10}{4}$$
- Los otros 6 pueden estar en 1 o 2: $$ 2^6 $$
Resultado:
$$ \binom{10}{4} \cdot 2^6 = 210 \cdot 64 = \boxed{13.440}$$

---

## Ejercicio 4: Grado en grafos

### Enunciado:
Grafo con 9 vértices, 11 aristas. 8 vértices tienen grado $p$, uno tiene grado $q$.  
Si es euleriano, ¿cuáles son $p$ y $q$?

### Teoría:
- Grafo euleriano: todos los grados son pares
- Suma de grados:  
$$ \sum d(v_i) = 2 \cdot \text{aristas} = 2 \cdot 11 = 22 $$
Planteamos:
$$ 8p + q = 22 $$
Probar $$ p = 2 \Rightarrow q = 6 \Rightarrow \boxed{✔}$$
### Grafo ejemplo:
![Grafo Euleriano](grafo_euleriano.png)

---
## Ejercicio 5: Árboles

### Enunciado:
Sea T un árbol con:
- Una raíz de grado 2
- Internos de grado 3
- Hojas de grado 1

A) Si T tiene 43 hojas, ¿cuántos vértices tiene?  
B) Si tiene 48 internos, ¿cuántas hojas tiene?

### Teoría y fórmulas necesarias

#### Definiciones
- Un **árbol** es un grafo **conexo y sin ciclos**.
- Un **árbol enraizado** tiene una **raíz**, de la que parten todos los caminos.
- Los **vértices internos** son aquellos que **no son hojas**, tienen grado $\geq 2$.
- Las **hojas** tienen **grado 1** (no tienen descendientes).

#### Fórmulas clave

##### 1. Número de aristas en un árbol
Para un árbol con $n$ vértices:
$$
\text{aristas} = n - 1
$$
##### 2. Suma de los grados de todos los vértices
$$
\sum \text{grados} = 2 \cdot (\text{número de aristas}) = 2(n - 1)
$$
#### Variables
Sea:
- $r = 1$: raíz de grado 2  
- $i$: número de internos (sin contar la raíz)  
- $h$: número de hojas  

Entonces el número total de vértices es:
$$
n = r + i + h = 1 + i + h
$$
#### Suma de grados según los tipos de vértice
- Raíz: grado 2 $\Rightarrow$ contribuye 2  
- Internos: grado 3 $\Rightarrow$ contribuyen $3i$  
- Hojas: grado 1 $\Rightarrow$ contribuyen $h$  

Entonces:
$$
\text{suma de grados} = 2 + 3i + h
$$
#### Igualación con la fórmula general de grados
Sabemos que:
$$
\sum \text{grados} = 2(n - 1) = 2(i + h)
$$
Igualamos ambas expresiones:
$$
2 + 3i + h = 2i + 2h
$$
Resolviendo:
$$
2 + 3i + h = 2i + 2h \\
2 + i - h = 0 \\
i = h - 2
$$
### Fórmulas finales útiles
$$
\boxed{i = h - 2}
$$
$$
\boxed{h = i + 2}
$$
$$
\boxed{n = 1 + i + h}
$$
Con estas fórmulas se puede resolver directamente los apartados A y B.

### Resolución:
- Total grados:  
$$ 2 + 3i + h = 2(n - 1) = 2(i + h) $$
Despejando:
$$ i + 2 = h $$
#### A)
$$ h = 43 \Rightarrow i = 41 \Rightarrow n = 1 + 41 + 43 = \boxed{85}$$
#### B)
$$ i = 48 \Rightarrow h = 50 \Rightarrow n = \boxed{99}$$

---

## Ejercicio 6: Inducción

### Enunciado:
Demostrar por inducción:  
$$ \forall n \in \mathbb{N},\quad 7^n + 5 \text{ es múltiplo de 6}$$

### Teoría de inducción:

1. **Base**: probar para $$ n = 0 $$
2. **Hipótesis**: suponer cierto para $$ n = k $$
3. **Paso inductivo**: demostrar que se cumple para $$ n = k+1 $$
---
### Demostración:

**Base**:
$$ 7^0 + 5 = 1 + 5 = 6 \Rightarrow \boxed{✔}$$

**Hipótesis**:
$$ 7^k + 5 \equiv 0 \mod 6 $$

**Paso inductivo**:
$$ 7 \equiv 1 \mod 6 \Rightarrow 7^{k+1} = 7^k \cdot 7 \equiv 7^k \mod 6 $$  
Por hipótesis:  
$$ 7^k + 5 \equiv 0 \mod 6 \Rightarrow 7^{k+1} + 5 \equiv 0 \mod 6 $$

**Conclusión**:  
Por inducción:  
$$\boxed{7^n + 5 \equiv 0 \mod 6}$$
---

## Ejercicio 7: Autómata finito

### Enunciado:
Diseña un autómata que:
- Empiece por "a"
- Contenga al menos una vez la subcadena "bba"
### Resolución:
**Estados**:
- $q_0$: inicio  
- $q_1$: visto “a”  
- $q_2$: visto “ab”  
- $q_3$: visto “abb”  
- $q_4$: aceptación (después de “bba”)
- $q_d$: descarte (si empieza mal)

### Diagrama:
![Autómata corregido](automata_bba_corregido.png)