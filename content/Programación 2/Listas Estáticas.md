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