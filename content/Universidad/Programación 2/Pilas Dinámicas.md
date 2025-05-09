---
title: Pilas Dinámicas
tags:
  - Programación-2
  - Implementaciones
  - Universidad
date: 2025-05-09
---

Una **pila dinámica** es un tipo de [[Pila]] que almacena elementos en espacios de memoria enlazados llamados **nodos**. Los elementos se añadirán, visualizarán y eliminarán siempre en la última posición *top*. Este tipo de pila es ideal por su capacidad de almacenamiento variable, pues al no basarse en arrays, su tamaño puede crecer hasta los límites de memoria que permita la máquina en la que se ejecuta. Sin embargo, al igual que ocurre en las [[Listas Dinámicas]], este tipo de pila puede dar lugar a errores de segmentación si se maneja mal la memoria. Para aplicaciones en las que se conoce el valor máximo de elementos que se quiere almacenar, y la seguridad es importante, véase [[Pilas Estáticas]].

---

## Estructura de datos

```c
#define SNULL NULL
 
typedef int tItemS;
typedef struct tNodeS *tPosS;
 
struct tNodeS{
  tItemS data;
  tPosS down;
};
 
typedef tPosS tStack;
```

---
## Implementación:

```c
void createEmptyStack(tStack *S){
  *S = SNULL;
}

bool allocateNode(tPosS *p){
  *p = malloc(sizeof(struct tNodeS));
  return (*p != SNULL);
}

bool push(tItemS d, tStack *S){
  tPosS node;

  if(!(allocateNode(&node)))
    return false;
  else {
    node->data = d;
    aux->down = *node;
    *S = node;
    return true;
  }
}

void pop(tStack *S){
  tPosS node;
 
  node = *S;
  *S = (*S)->down;
  free(node);
}

tItemS peak(tStack S){
  return S->data;
}

bool isEmptyStack(tStack S){
  return (S == SNULL);
}
```