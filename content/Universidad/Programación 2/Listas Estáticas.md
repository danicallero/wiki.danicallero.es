---
title: Listas Estáticas
tags:
  - Programación-2
  - Tipos-de-datos
  - Implementaciones
date: 2025-05-08
---

Una lista estática es un tipo de [[Lista]] que almacena elementos en un array con una posición fija. Este tipo de lista es ideal para manipular posiciones, buscar elementos y acceder a posiciones arbitrarias rápidamente. Sin embargo, no es óptimo en aplicaciones donde el tamaño de la muestra del elemento que se va a almacenar es desconocido o donde no se puede reservar espacio que no se utilizará; para estas aplicaciones véase [[Listas Dinámicas]].

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

## Implementación no ordenada:

```c
void createEmptyList(tList *L) {  
    L->lastPos = LNULL;  
}  
  
bool isEmptyList(tList L) {  
    return L.lastPos == LNULL;  
}  
  
bool insertItem(tItemL d, tPosL p, tList *L) {  
    bool out = false;  
    if (L->lastPos < MAX - 1) {  //lista no llena  
        if (p == LNULL || p == L->lastPos) {  //Primer elemento o al final
            L->lastPos++;  
            L->data[L->lastPos] = d;  
        } else {  
            //si hay más elementos delante de p, rotamos 1 a dcha.
            for (tPosL i = L->lastPos; i > 0 && d < L->data[i-1]; i--) {  
                L->data[i] = L->data[i - 1];  
            }  
            L->data[p] = d;  
        }  
        out = true;  
    }  
    return out;  
}  
  
void deleteAtPosition(tPosL p, tList *L) {  
    for (tPosL i = p; i < L->lastPos; i++) {
        L->data[i] = L->data[i + 1];  
    }  
    L->lastPos--; 
}  
  
tItemL getItem(tPosL p, tList L) {  
    return L.data[p];  
}  
  
void updateItem(tItemL d, tPosL p, tList *L) {  
    L->data[p] = d;  
}  
  
tPosL findItem(tConsoleId id, tList L) {  
    tPosL out = LNULL; //valor nulo por defecto  
    tPosL p;  

	//atravesamos la lista hasta encontrar un match o terminar el recorrido 
    for (p=0; p <= L.lastPos && out == LNULL ;p++) {
        if (strcmp(L.data[p].consoleId, id) == 0) {  
            out = p;
        }  
    }  
    return out;  
}  
  
tPosL first(tList L) {  
    return isEmptyList(L) ? LNULL : 0;  
}  
  
tPosL last(tList L) {  
    return L.lastPos;
}  
  
tPosL previous(tPosL p, tList L) {  
    return !(isEmptyList(L) || p<=0) ? p - 1: LNULL;  
}  
  
tPosL next(tPosL p, tList L) {  
    return (p >= 0 && p < L.lastPos) ? p + 1: LNULL;  
}
```