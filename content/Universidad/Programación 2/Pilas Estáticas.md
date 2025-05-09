---
title: Pilas Estáticas
tags:
  - Programación-2
  - Implementaciones
  - Universidad
date: 2025-05-08
---

Una **pila estática** es un tipo de [[Pila]] que almacena elementos en un array con un tamaño fijo. Los elementos se añadirán, visualizarán y eliminarán siempre en la última posición *top*. Este tipo de pila es ideal por su sencillez. Sin embargo, no es óptimo en aplicaciones donde el tamaño de la muestra del elemento que se va a almacenar es desconocido o donde no se puede reservar espacio que no se utilizará; para estas aplicaciones véase *[[Pilas Dinámicas]]*.

---

## Estructura de datos

```c
#define LNULL -1    //posición nula
#define MAX 10      //la lista tendrá 10 elementos [0-9]

typedef ... tItemL; //tipo de elemento
typedef int tPosL;  //tipo de posición

// Para lista estática:
typedef struct {
    tItemL data[MAX]; //Array donde se almacena la información
    tPosL lastPos;    //Última posición que almacena información útil
} tList;
```

---

## Implementación:

```c
#define SNULL -1
#define SMAX 10

 void createEmptyStack(tStack *S){  
    S->top = SNULL; //La pila se marca como vacía utilizando SNULL.  
}  
  
bool isEmptyStack(tStack S){  
    return S.top == SNULL;
}  
  
bool push(tItemS d, tStack *S){  
    bool out = false;
  
    if(S->top >= SMAX-1)    //Solo se inserta si la pila no está llena.  
        out = false;  
    else {  
        S->top++;           //Se amplía el número de datos útiles.
        S->data[S->top] = d;//Se añade el elemento a la cima (LIFO).  
        out = true;  
    }  
    return out;  
}  
  
void pop(tStack *S){  
    S->top--; //Se reduce por 1 el número de valores útiles.
}  
  
tItemS peek(tStack S){  
    return S.data[S.top]; //Se devuelve el valor que ocupa la cima.
}
```