---
title: Árboles Autobalanceados
tags:
  - Programación-2
  - Tipos-de-datos
  - Especificaciones
  - Implementaciones
  - Universidad
date: 2025-05-10
aliases:
---
## ¿Qué es un árbol AVL?

Un **Árbol AVL** es un árbol binario de búsqueda (ABB) que además mantiene **equilibrio automático** tras cada inserción o eliminación.

-  La clave del AVL es que en todo momento se cumple:

>[!note] Para todo nodo **N**, la diferencia entre la altura de su subárbol izquierdo y derecho es **máximo 1**.

Esto garantiza que el árbol **nunca se desbalancea demasiado**.

---

## Factor de equilibrio

Se define como:

>[!note] bf(N) = altura(subárbol derecho) - altura(subárbol izquierdo)`

>[!info] Para que un árbol esté equilibrado, **bf(N) $\in$ {-1, 0, +1}** en todos sus nodos.

Ejemplo:

```
      30 (bf=0)
     /   \
   20     40 (bf=0)
```

---

## ¿Por qué usar un AVL?

-  Evita degeneración (que el árbol sea una lista).  
-  Asegura operaciones **O(log n)**.  
-  Mantiene búsqueda, inserción y eliminación rápidas.

---
## Estructura de datos en C

```c
typedef struct tNodeAVL {
    tKey key;
    int bf; // balance factor
    struct tNodeAVL *left;
    struct tNodeAVL *right;
} *tAVL;
```

---
## Rotaciones
Cuando tras una inserción o eliminación **bf(N) $\notin$ {-1, 0, +1}**, aplicamos una rotación.
Puedes encontrar estos conceptos aplicados en [este](Universidad/Programación-2/Ejercicios-ABB#ejercicio-8-rotación-rl-en-avl) enlace
### Rotación simple a la izquierda (LL)

Ocurre desequilibrio en **subárbol izquierdo del subárbol izquierdo**.

Antes:
```
      C
     /
    B
   /
  A
```

Después rotación LL:
```
      B
     / \
    A   C
```

---
### Rotación simple a la derecha (RR)

Ocurre desequilibrio en **subárbol derecho del subárbol derecho**.

Antes:
```
  A
   \
    B
     \
      C
```

Después rotación RR:
```
    B
   / \
  A   C
```

---
### Rotación doble izquierda-derecha (LR)

Ocurre desequilibrio en **subárbol derecho del subárbol izquierdo**.

Antes:
```
      C
     /
    A
     \
      B
```

Primero RR en A, luego LL en C:
```
      B
     / \
    A   C
```

---
### Rotación doble derecha-izquierda (RL)

Ocurre desequilibrio en **subárbol izquierdo del subárbol derecho**.

Antes:
```
  A
   \
    C
   /
  B
```

Primero LL en C, luego RR en A:
```
    B
   / \
  A   C
```

---
## Inserción paso a paso

### Ejemplo 1

Insertar 30, 20, 10:
```
Insertar 30 → raíz
Insertar 20 → bf(30) = -1
Insertar 10 → bf(30) = -2 → desequilibrio → rotación LL
```

Árbol final:
```
    20
   /  \
 10    30
```

---
### Ejemplo 2

insertar 10, 30, 20:
```
Insertar 10 → raíz
Insertar 30 → bf(10)=+1
Insertar 20 → bf(10)=+2 → rotación RL
```

Árbol final:
```
    20
   /  \
 10    30
```

---

## Eliminación y rotaciones

Tras eliminar un nodo, puede producirse desequilibrio en la rama opuesta.

 >[!hint] ¡Ojo! </br>
 > **En inserción** una rotación basta.</br>
 > **En eliminación** pueden ser necesarias varias rotaciones **al recorrer hacia la raíz.**

Ejemplo eliminación 70:

Árbol antes:
```
       50
      /  \
    30    70
   /  \   / \
  20  40 60 80
```

Eliminar 70 → reemplazamos por mínimo subárbol derecho (80):

Árbol después:
```
       50
      /  \
    30    80
   /  \   /
  20  40 60
```

- Si tras eliminar 80 el factor de equilibrio se altera, aplicar rotaciones.

---
## Observaciones importantes de los apuntes

-  Árbol AVL es un [[ABB]] con equilibrio automático.  
-  Mantiene **complejidad de búsqueda O(log n)**.  
- Inserciones y eliminaciones más complejas por las rotaciones.  
-  Búsqueda misma complejidad que ABB ideal.