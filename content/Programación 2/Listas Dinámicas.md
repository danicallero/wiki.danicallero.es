---
title: Listas Dinámicas
tags:
  - Programación-2
  - Tipos-de-datos
  - Implementaciones
date: 2025-05-08
---

## 📌 Resumen del TAD Lista

Una ***Lista*** es una estructura de datos que almacena una secuencia de cero o más elementos de un mismo tipo, ordenados de manera lineal por su posición.

- Si n=0, la lista está vacía.
- Cada elemento tiene una posición única en la lista.

```
[a1] -> [a2] -> [a3] -> ... -> [an]
```

También existen **listas doblemente enlazadas**, donde cada nodo apunta tanto al siguiente como al anterior:

```
NULL <- [a1] <-> [a2] <-> [a3] -> NULL
```

Esto permite recorridos en ambos sentidos y facilita inserciones/eliminaciones en el medio.

---

## Estructura de datos

```c
#include <stdbool.h>

#define LNULL ... //posición nula
typedef ... tItemL; //tipo de elemento
typedef ... tPosL;  //tipo de posición
typedef ... tList;  //tipo lista

// Para lista doblemente enlazada:
typedef struct tNode {
    tItemL data;
    struct tNode *next;
    struct tNode *prev;
} *tList;
```

---

## Especificación:

```c
//Generadoras
/**
	@brief Crea una lista vacía
	@param[out] L Puntero a la lista a inicializar
	@post La lista queda inicializada como vacía
*/
void createEmptyList(tList* L);

/**
	@brief Inserta un elemento antes de la posición indicada o al final si p es LNULL
	@param[in] d Elemento a insertar
	@param[in] p Posición de referencia o LNULL
	@param[in,out] L Lista donde insertar
	@retval true Se insertó correctamente
	@retval false No se pudo insertar
	@post Las posiciones posteriores al elemento insertado pueden haber variado
*/
bool insertItem(tItemL d, tPosL p, tList* L);

//Modificadoras
/**
	@brief Copia la lista L en M
	@param[in] L Lista original
	@param[out] M Lista destino
	@retval true Copia realizada con éxito
	@retval false Error en la copia
*/
bool copyList(tList L, tList* M);

/**
	@brief Modifica el contenido de la posición p
	@param[in] d Nuevo contenido
	@param[in] p Posición a modificar
	@param[in,out] L Lista a modificar
*/
void updateItem(tItemL d, tPosL p, tList* L);

//Destructoras
/**
	@brief Elimina el elemento en la posición p
	@param[in] p Posición del elemento a eliminar
	@param[in,out] L Lista modificada
	@post Las posiciones posteriores pueden haber variado
*/
void deleteAtPosition(tPosL p, tList* L);

/**
	@brief Elimina todos los elementos de la lista
	@param[in,out] L Lista a borrar
*/
void deleteList(tList* L);

//Observadoras
/**
	@brief Busca el primer elemento igual a d
	@param[in] d Elemento a buscar
	@param[in] L Lista donde buscar
	@return Posición encontrada o LNULL si no existe
*/
tPosL findItem(tItemL d, tList L);

/**
	@brief Comprueba si la lista está vacía
	@param[in] L Lista a evaluar
	@retval true La lista está vacía
	@retval false La lista contiene al menos un elemento
*/
bool isEmptyList(tList L);

/**
	@brief Devuelve el elemento en la posición p
	@param[in] p Posición válida
	@param[in] L Lista donde buscar
	@return Elemento en la posición p
*/
tItemL getItem(tPosL p, tList L);

/**
	@brief Devuelve la posición del primer elemento
	@param[in] L Lista no vacía
	@return Posición del primer elemento
*/
tPosL first(tList L);

/**
	@brief Devuelve la posición del último elemento
	@param[in] L Lista no vacía
	@return Posición del último elemento
*/
tPosL last(tList L);

/**
	@brief Devuelve la posición anterior a p
	@param[in] p Posición actual
	@param[in] L Lista a consultar
	@return Posición anterior o LNULL si es el primero
*/
tPosL previous(tPosL p, tList L);

/**
	@brief Devuelve la posición siguiente a p
	@param[in] p Posición actual
	@param[in] L Lista a consultar
	@return Posición siguiente o LNULL si es el último
*/
tPosL next(tPosL p, tList L);
```

---

## Comparativa de implementaciones

|Implementación|Ventajas|Inconvenientes|
|---|---|---|
|Estática|Acceso directo, operaciones sencillas|Tamaño fijo, requiere más memoria inicial|
|Dinámica simple|Memoria dinámica, ampliable|No acceso directo, recorrido secuencial|
|Dinámica doblemente enlazada|Acceso bidireccional, inserción/eliminación rápida|Más memoria por punteros adicionales|
