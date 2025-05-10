---
title: Ejercicios ABB
tags:
  - Programación-2
  - Universidad
date: 2025-05-10
---

Este documento recopila **ejercicios prácticos paso a paso** de **inserción y eliminación en [[ABB]]** y **rotaciones en AVL**, con diagramas y explicaciones.

---
## Ejercicio 1: construir un ABB

Genera un árbol de claves: 50, 30, 70, 20, 40, 60, 80.

- **Paso 1: insertar 50**
```
50
```

- **Paso 2: insertar 30**
```
      50
    /
  30
```

-  **Paso 3: insertar 70**
```
      50
    /    \
  30     70
```

- **Paso 4: insertar 20**
```
      50
    /    \
  30     70
 /
20
```

- **Paso 5: insertar 40**
```
      50
    /    \
  30     70
 /  \
20  40
```

- **Paso 6: insertar 60**
```
      50
    /    \
  30     70
 /  \    /
20  40  60
```

- **Paso 7: insertar 80**
```
      50
    /    \
  30      70
 /  \    /  \
20  40  60  80
```

---
## Ejercicio 2: eliminación de hojas

Árbol inicial:

```
      50
    /    \
  30      70
 /  \    /  \
20  40  60  80
```

Eliminamos 20 → simplemente se borra:

```
      50
    /    \
  30      70
    \    /  \
    40  60  80
```

---
## Ejercicio 3: eliminación de nodo con un hijo

Árbol inicial:

```
      50
    /    \
  30      70
    \    /  \
    40  60  80
```

El nodo 30 tiene solo hijo derecho (40). Sustituimos 30 por 40:

```
      50
    /    \
  40      70
         /  \
        60  80
```

---
## Ejercicio 4: eliminación de nodo con dos hijos

Para eliminar un nodo con dos hijos, existen dos métodos; usar el sucesor inorden (el menor del subárbol derecho), o el predecesor inorden (el mayor del subárbol izquierdo). Resolvemos un ejercicio de cada.

```
      50
    /    \
  30      70
 /  \    /  \
20  40  60  80
```

-  Buscamos el **mínimo del subárbol derecho** → 60.  
-  Sustituimos 50 → 60.  
-  Eliminamos 60 del subárbol derecho.

Árbol final:

```
      60
    /    \
  30      70
 /  \       \
20  40      80
```

Ahora volvemos a eliminar la raíz, pero utilizando el mayor del subárbol izquierdo:

```
      40
    /    \
  30      70
 /          \
20          80
```

---
## Ejercicio 5: construir ABB 
Genera un árbol de claves: 55, 23, 72, 45, 87, 35, 69, 58, 50, 48

Paso a paso:
```
55
```

```
  55
 /
23
```

```
  55
 /  \
23   72
```

```
      55
    /    \
  23      72
    \
    45       
```

```
      55
    /    \
  23      72
    \       \
    45       87
```

```
      55
    /    \
  23      72
    \       \
    45       87
   /
  35
```

```
      55
    /    \
  23      72
    \    /  \
    45  69   87
   /
  35
```

```
      55
    /    \
  23      72
    \    /  \
    45  69   87
   /  \
  35  58
```

```
      55
    /    \
  23      72
    \    /  \
    45  69   87
   /  \
  35  58
     /
    50
```

```
      55
    /    \
  23      72
    \    /  \
    45  69   87
   /  \
  35  58
     /
    50
   /
  48
```

---
## Ejercicio 6: eliminar clave

Árbol inicial:

```
      55
    /    \
  23      72
    \    /  \
    45  69   87
   /  \
  35  58
     /
    50
   /
  48
```

Lo vamos a hacer identificando la mayor clave entre las menores:
- Nos situamos en el 23.
- Nos desplazamos a la derecha desde el 23 hasta que la clave deje de crecer: el subárbol derecho de la clave == NULL
- 23->45->58->NULL

Árbol final:

```
      58
    /    \
  23      72
    \    /  \
    45  69   87
   /  \
  35  50
     /
    48
```

---
## Ejercicio 7: rotación LL en AVL

Insertamos 30, 20, 10 en AVL:

1. Insertar 30 → raíz.
```
30
```
2. Insertar 20 → bf(30) = -1.
```
    30
   /
  20
```
3. Insertar 10 → bf(30) = -2 → desequilibrio → rotación LL.
```
    30
   /
  20
 /
10
```
Resultado final tras rotación:
```
    20
   /  \
 10    30
```

---
## Ejercicio 8: rotación RL en AVL

Insertamos 10, 30, 20 en AVL:

1. Insertar 10 → raíz.
```
10
```
2. Insertar 30 → bf(10) = +1.
```
10
  \
  30
```
3. Insertar 20 → bf(10) = +2 → desequilibrio → rotación RL.
```
10
  \
  30
  /
20    
```

Primero LL en 30 → luego RR en 10 → resultado final:

LL en 30 transforma esto:
```
  30
  /
 20
```
en esto:
```
20
  \
  30
```
Para dar lugar a este árbol:
```
10
  \
   20
     \
      30
```

Finalmente, RR en 10 consigue el árbol balanceado:
```
    20
   /  \
 10   30
```

## Ejemplos de Árboles Binarios

### Inserciones secuenciales

```c
tBST tree;
createEmptyTree(&tree);
insertKey(&tree, 20);
insertKey(&tree, 10);
insertKey(&tree, 30);
```

Árbol resultante:

```
     20
    /  \
  10    30
```

### Búsqueda de clave

```c
if (findKey(tree, 10)) {
    printf("Clave encontrada!\n");
}
```

Resultado:

```
Sí, se encuentra en el subárbol izquierdo del 20.
```

### Eliminación de clave

```c
removeKey(10, &tree);
```

Árbol resultante:

```
     20
       \
        30
```

---

## Inserción, Eliminación y Rotaciones (ABB vs AVL)

### Inserción en ABB

- Si el árbol está vacío, se inserta como raíz.
- Si la clave es menor que la raíz, se inserta en el subárbol izquierdo.
- Si es mayor, en el subárbol derecho.
- Si ya existe, no se hace nada.

### Eliminación en ABB
#### 1. Nodo hoja:
Se elimina directamente.
#### 2. Nodo con un hijo:
Se reemplaza el nodo con su único hijo.
#### 3. Nodo con dos hijos:
Se reemplaza la clave por la del menor de su subárbol derecho (o mayor del izquierdo) y se elimina ese nodo.

### Rotaciones en AVL (para mantener equilibrio)

Cuando un ABB se desequilibra al insertar o eliminar, un árbol ***AVL** aplica rotaciones:
#### Rotaciones simples:
- ***LL (Left-Left)***: desbalanceo por la izquierda del hijo izquierdo.
- ***RR (Right-Right)***: desbalanceo por la derecha del hijo derecho.
#### Rotaciones dobles:
- ***LR (Left-Right)***: desbalanceo por la derecha del hijo izquierdo.
- ***RL (Right-Left)***: desbalanceo por la izquierda del hijo derecho.

### Ejemplo de Rotación LL:

Antes:

```
    30
   /
  20
 /
10
```

Después de rotación LL:

```
    20
   /  \
  10  30
```

### Ejemplo de Rotación RR:

Antes:

```
  10
    \
     20
       \
        30
```

Después de rotación RR:

```
     20
    /  \
  10    30
``` 

---

## 🧹 Ejercicios de eliminación

### Caso 1: Eliminar una hoja

```c
tBST tree;
createEmptyTree(&tree);
insertKey(&tree, 50);
insertKey(&tree, 30);
insertKey(&tree, 70);
insertKey(&tree, 20); // hoja

removeKey(20, &tree);
```

Árbol tras inserciones:

```
      50
     /  \
   30    70
  /
20
```

  

Árbol tras eliminar 20:

```
      50
     /  \
   30    70
```

---

### Caso 2: Eliminar un nodo con un solo hijo

```c
insertKey(&tree, 25); // hijo único de 30

removeKey(30, &tree);
```

Árbol antes:

```
      50
     /  \
   30    70
    \
     25
```

Árbol después:

```

      50
     /  \
   25    70

```

---

### Caso 3: Eliminar un nodo con dos hijos

```c
insertKey(&tree, 60);
insertKey(&tree, 80);

removeKey(70, &tree); //tiene hijos 60 y 80
```

Árbol antes:

```
      50
     /  \
   25    70
         / \
       60   80
```

Árbol después (sucesor 80 reemplaza 70):

```
      50
     /  \
   25    80
         /
       60
```

---

### Caso 4: Eliminar la raíz con dos hijos

```c
removeKey(50, &tree);
```

Árbol antes:

```
      50
     /  \
   25    80
         /
        60
```

Árbol después (sucesor 60 reemplaza 50):

```
      60
     /  \
   25    80
```

---

### Ejemplo de construcción y eliminación:

Insertamos a un árbol: 55, 23, 72, 45, 87, 35, 69, 58, 50, 48.

```
          55
        /    \
      23      72
        \    /  \
        45  69  87
       /  \
     35    50
          /
        48
```

Borramos 55:

```
          55
        /    \
      23      72
        \     / \
        45  69  87
       /  \
     35    50
          /
        48
```
- `55` tiene dos hijos.
- Buscamos el **máximo del subárbol izquierdo**, que es `50`.
- Sustituimos `55` por `50`.
- Luego eliminamos `50` del subárbol izquierdo.

```
          50
        /    \
      23      72
        \     / \
        45  69  87
       /  \
     35    48
```

Borramos 72:

```
          50
        /    \
      23      69
        \       \
        45      87
       /  \
     35    48
```
