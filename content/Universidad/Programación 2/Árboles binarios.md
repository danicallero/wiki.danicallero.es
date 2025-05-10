---
title: Árboles binarios
tags:
  - Programación-2
  - Tipos-de-datos
  - Universidad
date: 2025-05-10
---
## ¿Qué es un árbol?

Un **árbol** es una estructura de datos jerárquica compuesta por **nodos** conectados mediante relaciones **padre-hijo**.

Características básicas:
- Tiene un **nodo raíz** (root), que no tiene padre.
- Cada nodo puede tener **cero o más hijos**.
- Cada nodo (excepto la raíz) tiene **exactamente un padre**.

>[!info] Un **árbol binario** es un caso particular donde **cada nodo tiene como máximo dos hijos**: uno izquierdo y uno derecho.

## Terminología básica

| Término      | Significado                                            |
| ------------ | ------------------------------------------------------ |
| Raíz (root)  | Nodo inicial del árbol                                 |
| Padre        | Nodo que enlaza con otro como descendiente             |
| Hijo (child) | Nodo descendiente de otro                              |
| Hermano      | Nodo que comparte el mismo padre                       |
| Hoja         | Nodo sin hijos                                         |
| Altura       | Longitud del camino más largo desde la raíz a una hoja |
| Nivel        | Distancia desde la raíz al nodo                        |
| Subárbol     | Árbol formado por un nodo y sus descendientes          |

Ejemplo:

```
        A
       / \
      B   C
     / \   \
    D   E   F
```

-  Raíz: A  
-  Hojas: D, E, F  
-  Altura: 2 (camino A → B → D)

---

## Tipos de árboles binarios

### Árbol binario lleno (full binary tree)

Un árbol binario lleno es aquel donde **todos los nodos internos tienen exactamente 2 hijos**.

```
      A
    /   \
   B     C
  / \   / \
 D   E F   G
```

---

### Árbol binario completo (complete binary tree)

Un árbol binario completo es aquel donde:

1. Todos los niveles excepto el último están **completamente llenos**.
2. El último nivel está lleno **de izquierda a derecha**.

```
      A
     / \
    B   C
   / \
  D   E
```

Faltan nodos en el último nivel pero están a la izquierda.

---

### Árbol binario perfecto (perfect binary tree)

Un árbol binario perfecto cumple:

- Todos los nodos internos tienen 2 hijos.
- Todas las hojas están al **mismo nivel**.

```
      A
    /   \
   B     C
  / \   / \
 D   E F   G
```

---

### Árbol degenerado

Un árbol degenerado es uno donde **cada nodo tiene como máximo un hijo**, funcionando como una lista enlazada:

```
A
 \
  B
   \
    C
     \
      D
```

Un [[árbol de búsqueda ]] (ABB) con algún subárbol degenerado verá su velocidad de búsqueda gravemente ralentizada.

---

## Recorridos de un árbol binario

Un recorrido es una forma sistemática de visitar todos los nodos. Los principales son:
### Preorden

Visita primero la raíz, luego subárbol izquierdo, luego derecho.
```
preorden(nodo):
    si nodo != NULL:
        visitar(nodo)
        preorden(nodo.izq)
        preorden(nodo.der)
```

Ejemplo:
```
    A
   / \
  B   C
 / \
D   E
```

Preorden: A B D E C

---

### Inorden

Visita primero subárbol izquierdo, luego la raíz, luego el derecho.
```
inorden(nodo):
    si nodo != NULL:
        inorden(nodo.izq)
        visitar(nodo)
        inorden(nodo.der)
```

Inorden: D B E A C

---

### Posorden

Visita primero subárbol izquierdo, luego derecho, finalmente la raíz.
```
posorden(nodo):
    si nodo != NULL:
        posorden(nodo.izq)
        posorden(nodo.der)
        visitar(nodo)
```

Posorden: D E B C A

---

### Recorrido por niveles (anchura)

Utiliza una [[cola]] para visitar nivel por nivel de izquierda a derecha.

```
nivel 1: A
nivel 2: B C
nivel 3: D E
```

---

## Aplicaciones de árboles binarios

- Representación de expresiones matemáticas.
- Organigramas jerárquicos.
- Estructuras de directorios de archivos.
- Árboles de sintaxis en compiladores.
- Índices en bases de datos.

---

## Fórmulas y propiedades

| Propiedad               | Fórmula                              |
| ----------------------- | ------------------------------------ |
| Altura (h)              | Longitud camino más largo a una hoja |
| Nodos en árbol perfecto | 2^(h+1) - 1                          |
| Hojas en árbol perfecto | 2^h                                  |
 
 Un árbol binario de altura **h** tiene como máximo **2^h** nodos en el último nivel.