---
title: console_list.c/.h
tags:
  - Programación-2
  - Universidad
  - Prácticas
date: 2025-06-21
draft: true
---
# Especificación
```c
/**
 * @file console_list.h
 * @brief Gestión del TAD Lista dinámica ordenada de consolas.
 * @date 25/03/2025
 *
 * @note Proyecto compartido con fines educativos. Se desaconseja la entrega propia o con fines de plagio.
 */

#ifndef CONSOLE_LIST_H
#define CONSOLE_LIST_H

#include "types.h"
#include "bid_stack.h"
#include <stdbool.h>
#include <stdlib.h>

/**
 *@brief Valor fijo para una posición de la tList nula.
 */
#define LNULL NULL

/**
 * @brief Estructura que representa un ítem (elemento) de la lista tList.
 * Contiene toda la información característica de una consola.
 */
typedef struct tItemL {
 tUserId seller; /**< ID del usuario que vende la consola.*/
 tConsoleId consoleId; /**< ID de la consola.*/
 tConsoleBrand consoleBrand; /**< Marca de la consola.*/
 tConsolePrice consolePrice; /**< Precio original de la consola*/
 tBidCounter bidCounter; /**< Número de pujas que se han realizado sobre la consola*/
 tStack bidStack; /**< Stack que guarda las pujas realizadas sobre la consola*/
} tItemL;

/**
 * @brief tPosL se define como un puntero a un nodo tNode.
 */
typedef struct tNode *tPosL; //Se define tPosL como puntero a tNode.

/**
 * @brief Estructura que representa un nodo de la lista dinámica.
 * Contiene un tItemL y un enlace al nodo siguiente 'next'.
 */
struct tNode{
  tItemL data; /**< Struct que guarda la información de una consola.*/
  tPosL next; /**< Enlace al siguiente nodo. Un valor next = LNULL determina el final de la lista.*/
};

/**
 * @brief tList se define como un tipo equivalente a tNode, por ello, tList será el primer nodo de la lista enlazada.
 */
typedef tPosL tList;

/**
 * @brief Crea una lista vacía.
 *
 * @param[out] L Puntero a la lista a inicializar.
 *
 * @pre La lista debe estar declarada.
 * @post La lista queda inicializada y se marca como vacía.
 */
void createEmptyList(tList *L);

/**
 * @brief Comprueba si una lista está vacía.
 *
 * @param[in] L Lista a comprobar.
 *
 * @return true si la lista está vacía, false en caso contrario.
 */
bool isEmptyList(tList L);

/**
 * @brief Inserta un elemento en la lista manteniendo el orden.
 *
 * @param[in] data_d Elemento a insertar.
 * @param[in,out] L Puntero a la lista.
 *
 * @return true si se insertó correctamente, false en caso contrario.
 *
 * @post La lista aumenta de tamaño y el elemento se coloca en su posición ordenada. Los elementos posteriores pueden
 * haberse desplazado.
 */
bool insertItem(tItemL data_d, tList *L);

/**
 * @brief Elimina un elemento de la posición indicada en la lista.
 *
 * @param[in] p Posición del elemento a eliminar.
 * @param[in,out] L Puntero a la lista.
 *
 * @pre La posición 'p' debe ser válida y el elemento debe tener una pila de pujas vacía.
 * @post La lista disminuye de tamaño y los elementos posteriores a 'p' pueden haberse desplazado.
 */
void deleteAtPosition(tPosL p, tList *L);

/**
 * @brief Modifica el contenido de un elemento en la posición indicada.
 *
 * @param[in] d Nuevo valor del elemento.
 * @param[in] p Posición del elemento a modificar.
 * @param[in,out] L Puntero a la lista.
 *
 * @pre La posición 'p' debe ser válida.
 * @post El contenido del elemento se actualiza, el orden de la lista se mantiene.
 */
void updateItem(tItemL d, tPosL p, tList *L);

/**
 * @brief Obtiene el elemento de una lista en la posición dada.
 *
 * @param[in] p Posición del elemento.
 * @param[in] L Lista desde la que se obtiene el elemento.
 *
 * @return El elemento en la posición p.
 *
 * @pre La posición 'p' debe ser válida.
 */
tItemL getItem(tPosL p, tList L);

/**
 * @brief Devuelve la posición del primer elemento de la lista.
 *
 * @param[in] L Lista a evaluar.
 *
 * @return Posición del primer elemento.
 *
 * @pre La lista no debe estar vacía.
 * @remark Por la naturaleza de la implementación dinámica, devuelve LNULL si la lista está vacía e inicializada.
 */
tPosL first(tList L);

/**
 * @brief Devuelve la posición del último elemento de la lista.
 *
 * @param[in] L Lista a evaluar.
 *
 * @return Posición del último elemento.
 *
 * @pre La lista no debe estar vacía.
 * @remark Por la naturaleza de la implementación dinámica, devuelve LNULL si la lista está vacía e inicializada.
 */
tPosL last(tList L);

/**
 * @brief Devuelve la posición del nodo anterior al proporcionado.
 *
 * @param[in] p Posición actual.
 * @param[in] L Lista donde buscar.
 *
 * @return Posición anterior o LNULL si 'p' es el primero.
 *
 * @pre La posición 'p' debe ser válida.
 */
tPosL previous(tPosL p, tList L);

/**
 * @brief Devuelve la posición del nodo siguiente al proporcionado.
 *
 * @param[in] p Posición actual.
 * @param[in] L Lista donde buscar.
 *
 * @return Posición siguiente o LNULL si 'p' es el último.
 *
 * @pre La posición 'p' debe ser válida.
 */
tPosL next(tPosL p, tList L);

/**
 * @brief Busca un elemento con el identificador dado en la lista.
 *
 * @param[in] id Identificador de la consola.
 * @param[in] L Lista donde buscar.
 *
 * @return Posición del primer elemento con ese ID o LNULL si no se encuentra.
 */
tPosL findItem(tConsoleId id, tList L);
#endif
```

# Implementación
```c
/**
 * @file console_list.c
 * @brief Gestión del TAD Lista dinámica ordenada de consolas.
 * @date 25/03/2025
 *
 * @note Proyecto compartido con fines educativos. Se desaconseja la entrega propia o con fines de plagio.
 */

#include "console_list.h"
#include <string.h>
#include <stdlib.h>
#include <stdbool.h>

void createEmptyList(tList *L) {
    *L = LNULL; //Se marca como vacía utilizando un valor fijo LNULL.
}

//Función auxiliar para aislar la reserva de memoria para nodos.
/**
 * @brief Asigna memoria dinámicamente para un nuevo nodo.
 *
 * @param[out] p Puntero a la posición que apuntará al nuevo nodo.
 *
 * @return true si la asignación de memoria fue exitosa, false en caso contrario.
 *
 * @post Si devuelve true, '*p' apuntará a un nuevo nodo con memoria reservada.
 */

bool allocateNode(tPosL *p){
    *p = malloc(sizeof(struct tNode));  //Se reserva un espacio en memoria del tamaño del nodo.
    return *p != LNULL;
}

bool isEmptyList(const tList L) {
    return L == LNULL;  //Las listas vacías se marcan con L=LNULL en createEmptyList.
}

bool insertItem(const tItemL data_d, tList *L) {
    tPosL newNode;      //El nodo que se inserta en la lista.
    tPosL prev = LNULL; //Auxiliar que mantendrá registro del nodo anterior a current.
    tPosL current = *L; //Auxiliar donde se guarda el nodo que se comprueba en la iteración actual.
    bool out = false;   //Auxiliar donde se recoge el output que devolverá return.

    if (allocateNode(&newNode)) {//insertItem se ejecuta solo si se ha asignado espacio en memoria correctamente.

        newNode->data = data_d;
        newNode->next = LNULL;  //Se inicializa como nulo.

        //Caso 1: nuevo nodo es el menor: lista vacía (*L) o insertando al inicio.
        if (isEmptyList(*L) || strcmp(data_d.consoleId, (*L)->data.consoleId) < 0) {
            newNode->next = *L;
            *L = newNode;
        } else {
            //Caso 2: buscar la posición correcta para mantener el orden.
            while (current != LNULL && strcmp(data_d.consoleId, current->data.consoleId) > 0) {
                prev = current;
                current = current->next;
            }
            if (prev != LNULL) {
                prev->next = newNode;
            }
            newNode->next = current;
        }
        out = true;
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
            // Caso 3: Eliminando un nodo intermedio. (aliasing)
            /* Realmente estamos eliminando el nodo posterior, haciéndolo así rompemos un poco la relación de punteros.
             * Lo hago así porque en la P1 se me penalizó por hacer un traversal para encontrar el nodo anterior.
             * Sin embargo, este enfoque altera el comportamiento esperado respecto a una lista estática y reduce la
             * transparencia del diseño. Además, ha obligado a refactorizar la función remove en main.c, ya que puede
             * provocar accesos inválidos si se almacena y reutiliza next(p) tras llamar a deleteAtPosition().
             */

            pos = p->next;
            p->data = pos->data; //Se copian los datos del siguiente nodo.
            p->next = pos->next; //Se copia el puntero del next del siguiente nodo.
            free(pos);  //Se libera la memoria del siguiente nodo
        }
    }
}

tItemL getItem(tPosL p, tList L) {  /*'p' es el puntero al struct que contiene la info, tlist no es necesario en la
                                     *implementación dinámica, pero añadirlo asegura uniformidad entre implementaciones.
                                     */
    (void)L; //Silencia el warning 'unused parameter'.
    return p->data;
}

void updateItem(tItemL d, tPosL p, tList *L) {  /*Al igual que en getItem, tList no es necesario, pero añadirlo garantiza
                                                 *uniformidad entre implementaciones.
                                                 */
    (void)L; //Silencia el warning 'unused parameter'.
    p->data = d;
}

tPosL findItem(tConsoleId id, tList L) {
    tPosL p; //Auxiliar donde se guarda el nodo que se comprueba en la iteración actual.

    /* Se atraviesa hasta encontrar una coincidencia, o consoleId es mayor que el del parámetro pasado. En el peor de
     * los casos la función es O(n).
     */
    for (p = L; p != LNULL && strcmp(p->data.consoleId, id) <= 0; p = p->next) {
        if (strcmp(p->data.consoleId, id) == 0) return p;
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
    tPosL out = LNULL; //Auxiliar donde se recoge el output que devolverá return. LNULL por defecto.
    tList prev; //Auxiliar que mantendrá registro del nodo anterior a current.

    //Si 'p' es igual que 'L', 'p' es el nodo del primer elemento y no tiene previo ('L' es el primer nodo de la lista por definición).
    if (p != L) {
        prev = L;
        while (prev->next != LNULL && prev->next != p) {
            //Se atraviesa hasta encontrar un nodo cuyo siguiente sea el enviado, o el final.
            prev = prev->next;
        }
        out = prev->next == p ? prev : LNULL; //Si siguiente al que se ha encontrado es 'p', 'prev' es el que se busca.
    }
    return out;
}

tPosL next(tPosL p, tList L) {  /*Al igual que en getItem, tList no es necesario, pero añadirlo garantiza
                                 *uniformidad entre implementaciones.
                                 */
    (void)L; //Silencia el warning 'unused parameter'.
    return p->next;
}

```
