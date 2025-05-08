---
title: Listas Dinámicas
tags:
  - Programación-2
  - Tipos-de-datos
  - Implementaciones
date: 2025-05-08
---

Una lista dinámica es un tipo de [[Lista]] que almacena elementos en espacios de memoria enlazados llamados **nodos**. Este tipo de lista es ideal para ==aplicaciones en las que el número de elementos es desconocido==, ya que su capacidad máxima de elementos es esencialmente ilimitada (dentro de las limitaciones de memoria de la máquina). Sin embargo, esta implementación no permite el acceso directo a elementos en posiciones arbitrarias. Para acceder a un elemento en mitad de la lista, es necesario atravesarla desde el principio o desde el final, si se trata de una *lista doblemente enlazada*. Por lo tanto, las operaciones como la *eliminación, el acceso al elemento previo o al último* son poco eficientes en las listas dinámicas y se manejan mejor en las *[[Listas Estáticas]].

---

## Estructura de datos

En una lista simplemente enlazada:
```
[a1] -> [a2] -> [a3] -> NULL
```

```c
#include <stdbool.h>

#define LNULL NULL  //posición nula
typedef ... tItemL; //tipo de elemento
typedef struct tNode *tPosL; //Se define tPosL como puntero a tNode.
  
struct tNode{  
  tItemL data;  
  tPosL next; //Enlace al siguiente nodo. Un valor next = LNULL determina el final de la lista.
};  

typedef tPosL tList; //Tipo equivalente a tNode, por ello, tList será el primer nodo de la lista enlazada.
```

En una lista doblemente enlazada:
```
NULL <- [a1] <-> [a2] <-> [a3] -> NULL
```

```c
struct tNode{  
  tItemL data;  
  tPosL next; //Enlace al siguiente nodo.
  tPosL prev; //Enlace al nodo anterior.
};
```

Las listas *doblemente enlazadas* permiten recorridos en ambos sentidos y facilitan las *inserciones/eliminaciones* en el medio. Como inconveniente ocupan más espacio en la memoria al tener que reservar espacio para dos punteros en cada nodo.

---

## Implementación no ordenada:

```c
 void createEmptyList(tList *L) {  
    *L = LNULL; 
}  
  
bool allocateNode(tPosL *p){  
    *p = malloc(sizeof(struct tNode)); //Se reserva espacio en memoria 
    return *p != LNULL;  
}  
  
bool isEmptyList(const tList L) {  
    return L == LNULL; 
}  

bool insertItem(tItemL d, tPosL p, tList *L) {  
    tPosL newNode;  
    bool out = false;  
  
    if (allocateNode(&newNode)){
        newNode->data = d; 
        newNode->next = LNULL;  
  
        //caso 1: nuevo nodo es el último: lista vacía (*L) o insertando al final (p)        
        if (isEmptyList(*L)) {  
            *L = newNode;  
            out = true;  
        }  else {  
           //caso 2: en una posición intermedia  
            *newNode = *p; //newnode misma estructura que p (data,next)  
            p->data = d; //cambio de dato en p  
            p->next = newNode; //linkeamos  
            out = true;  
        }  
    }  
    return out;  
}

void deleteAtPosition(tPosL p, tList *L) {  
    tPosL pos; //Posición auxiliar.  
  
    if (!isEmptyList(*L) && p != LNULL) {  
        if (p == *L) {  
            // Caso 1: Eliminando el primer nodo.  
            *L = (*L)->next;  
            free(p);  
        } else if (p->next == LNULL) {  
            // Caso 2: Eliminando el último nodo.  
            pos = *L;  
            while (pos->next != LNULL && pos->next != p) {  
                pos = pos->next;  
            }  
            if (pos->next == p) {  
                pos->next = LNULL;  
                free(p);  
            }  
        } else {  
            pos = p->next;  
            p->data = pos->data; //Se copian los datos del siguiente nodo.  
            p->next = pos->next; //Se copia el puntero del next del siguiente nodo.  
            free(pos);  //Se libera la memoria del siguiente nodo  
        }  
    }  
}  
  
tItemL getItem(tPosL p, tList L) {
    return p->data;  
}  
  
void updateItem(tItemL d, tPosL p, tList *L) {
    p->data = d;  
}  
  
tPosL findItem(tItemL item, tList L) {
    tPosL p;  
    //atravesamos hasta encontrar un match.
    for (p = L; p != LNULL; p = p->next) {
        if (p->data == item) return p;  
    }  
    return LNULL;  
}
  
tPosL first(tList L) {  
    return L;  
}  
  
tPosL last(tList L) {  
    while (L->next != LNULL) { //Se atraviesa hasta el final.  
        L = L->next;  
    }  
    return L;  
}  
  
tPosL previous(tPosL p, tList L) {  
    tPosL out = LNULL; 
    tList prev; 
  
    //Si 'p' es igual que 'L', 'p' es el nodo del primer elemento y no tiene previo ('L' es el primer nodo de la lista por definición).    if (p != L) {  
        prev = L;  
        while (prev->next != LNULL && prev->next != p) {  
            prev = prev->next;  
        }  
        out = prev->next == p ? prev : LNULL;
    }  
    return out;  
}  
  
tPosL next(tPosL p, tList L) {
    return p->next;  
}
```

## Implementación ordenada:

```c
bool insertItem(const tItemL data_p, tList *L) {  
    tPosL newNode;      //El nodo que se inserta en la lista.  
    tPosL prev = LNULL; //Auxiliar que mantendrá registro del nodo anterior
    tPosL current = *L; //Auxiliar donde se guarda el nodo que se comprueba en la iteración actual.  
    bool out = false;   //Auxiliar donde se recoge el output que devolverá return.  
  
    if (allocateNode(&newNode)) {
        newNode->data = data_p;  
        newNode->next = LNULL;   
  
        //Caso 1: nuevo nodo es el menor: lista vacía (*L) o insertando al inicio.        
        if (isEmptyList(*L) || data_p < (*L)->data) {  
            newNode->next = *L;  
            *L = newNode;  
        } else {  
            //Caso 2: buscar la posición correcta para mantener el orden.  
            while (current != LNULL && data_p > (*L)->data) {  
                prev = current;  
                current = current->next;  
            }  
            prev->next = newNode;  
            newNode->next = current;  
        }  
        out = true;  
    }  
    return out;  
}  

tPosL findItem(tItemL item, tList L) {  
    tPosL p; //Auxiliar donde se guarda el nodo que se itera
  
	//Se atraviesa hasta encontrar una coincidencia, o param es mayor que el del parámetro pasado.
	for (p = L; p != LNULL && p->data<=item; p = p-> next) {  
	    if (strcmp(p->data.consoleId, id) == 0) return p;  
		    return LNULL;  
	    }
	}
} 
```