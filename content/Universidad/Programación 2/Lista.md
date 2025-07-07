---
title: 3. TAD Lista
tags:
  - Programación-2
  - Tipos-de-datos
  - Especificaciones
  - Universidad
date: 2025-05-08
---
## Definición
Una ***Lista*** es una estructura de datos que almacena una secuencia de cero o más elementos de un mismo tipo, ordenados de manera lineal por su posición.

- Si n=0, la lista está vacía.
- Cada elemento tiene una posición única en la lista.

```
[a1] -> [a2] -> [a3] -> ... -> [an]
```

---
## Especificación informal de una Lista
- Generadoras
	- createEmptyList -> List
		- Objetivo: Crea una lista vacía.
		- Salida: Una lista vacía.
		- Postcondición: La lista queda inicializada y vacía.
	- insertItem(Item, Position, List) -> List, Bool
		- Objetivo: Inserta un elemento al final de la lista si la posición es nula, o inmediatamente antes que el que ocupa la posición mandada.
		- Entrada:
			- Item: Elemento a insertar.
			- Position: Posición de referencia o nulo.
			- List: Lista a la que se le aplicará la operación.
		- Salida:
			- List: Lista con el elemento insertado.
			- Bool: True/False dependiendo de si la operación se ha realizado con éxito.
		- Precondición: Position es una posición válida o es nula.
		- Postcondición: Las posiciones de los elementos posteriores al insertado cambian si no se insertó al final.
- Modificadoras:
	- copyList($List_1$) -> $List_2$, Bool
		- Objetivo: Copia una lista en otra.
		- Entrada:
			- $List_1$: Lista que se quiere copiar.
		- Salida:
			- $List_2$: Copia de la lista original.
			- True/False dependiendo de si la operación fue realizada con éxito o no.
	- updateItem(Item, Position, List) -> List
		- Objetivo: Modifica el contenido de un elemento de la lista
		- Entrada:
			- Item: Nuevo contenido a asignar al elemento en Position.
			- Position: Posición del elemento que queremos modificar.
			- List: Lista a modificar.
		- Salida:
			- List: Lista con el contenido del elemento modificado.
		- Precondición: Position es una posición válida de la lista.
- Destructoras:
	- deleteAtPosition(Position, List) -> List
		- Objetivo: Elimina de la lista el elemento que ocupa la posición `Position`.
		- Entrada:
			- Position: La posición cuyo elemento se eliminará.
			- List: Lista sobre la que se aplicará la operación.
		- Salida:
			- List: Lista que ya no contiene el elemento anteriormente almacenado en `Position`.
		- Precondición: Position es una posición válida de la lista.
		- Postcondition: Las posiciones de los elementos de la lista pueden haber variado.
	- deleteList(List) -> List
		- Objetivo: Elimina todos los elementos contenidos en una lista.
		- Entrada:
			- List: Lista sobre la que se aplica la operación.
		- Salida:
			- Lista vacía.
- Observadoras:
	- findItem(Item, List) -> Position
		- Objetivo: Busca la primera ocurrencia de un elemento con cierto contenido en la lista.
		- Entrada:
			- Item: Contenido/critério de búsqueda.
			- List: Lista sobre la que se realiza la operación.
		- Salida:
			- Position: Posición del primer elemento encontrado que encaje con el criterio de búsqueda, o nulo si no se encuentra ninguno.
	- isEmptyList(List) -> Bool
		- Objetivo: Determina si una lista está vacía o no.
		- Entrada:
			- List: Lista a la que se le aplicará la operación.
		- Salida:
			- True/False dependiendo si la lista está vacía o no.
	- getItem(Position, List) -> Item
		- Objetivo: Recupera el contenido almacenado en una posición de la lista.
		- Entrada:
			- Position: Posición del elemento buscado.
			- List: Lista sobre la que se aplica la operación.
		- Salida:
			- Item: Contenidos almacenados en la posición `Position`.
		- Precondición:
			- Position es una posición válida y ocupada de la lista.
	- first(List) -> Position
		- Objetivo: Devuelve la posición del primer elemento de la lista.
		- Entrada:
			- List: Lista sobre la que se aplica la operación.
		- Salida:
			- Position: Posición del primer elemento de la lista.
		- Precondición: La lista no está vacía.
	- last(List) -> Position
		- Objetivo: Devuelve la posición del último elemento de la lista.
		- Entrada:
			- List: Lista sobre la que se aplica la operación.
		- Salida:
			- Position: Posición del último elemento de la lista.
		- Precondición: La lista no está vacía.
	- previous(Position, List) -> Position
		- Objetivo: Devuelve la posición inmediatamente anterior a la posición `Position` pasada.
		- Entrada:
			- Position: Posición de referencia.
			- List: Lista sobre la que se aplica la operación.
		- Salida:
			- Position: Posición anterior a la proporcionada.
		- Precondición: Position es una posición válida en la lista.
	- next(Position, List) -> Position
		- Objetivo: Devuelve la posición inmediatamente posterior a la posición `Position` pasada.
		- Entrada:
			- Position: Posición de referencia.
			- List: Lista sobre la que se aplica la operación.
		- Salida:
			- Position: Posición siguiente a la proporcionada.
		- Precondición: Position es una posición válida en la lista.

---
## Tipos de implementación
##### Según su uso de memoria:
La implementación de un *TAD* lista depende de cómo se almacenen sus elementos en memoria, y existen ==dos== métodos principales para ello.

- [[Listas Estáticas]]: Se les asigna inicialmente un tamaño máximo que no se puede cambiar.
- [[Listas Dinámicas]]: Tienen un tamaño variable y ocupan únicamente la cantidad de memoria necesaria para almacenar la información que contienen.
##### Según el orden de sus elementos:
Dependiendo de la aplicación de la lista, podemos distinguir entre **listas ordenadas** y **no ordenadas**. En las listas ordenadas, los elementos se almacenan en orden según un *criterio de ordenación* específico. En las listas no ordenadas, el usuario que interactúa con la interfaz del TAD decide la posición del elemento a insertar.

---
## Estructura de datos

La estructura de datos variará según se usen [[Listas Estáticas]] o [[Listas Dinámicas]].

---
## Cabecera (list.h)

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

| Implementación | Ventajas                               | Inconvenientes                                                                                                                                       |
| -------------- | -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Estática       | Acceso directo, operaciones sencillas. | Tamaño fijo, requiere más memoria inicial, y se corre el riesgo de no poder insertar elementos al estar llena.                                       |
| Dinámica       | Memoria dinámica y ampliable.          | No es posible el acceso directo, es necesario recorrer la lista para acceder a las diferentes posiciones. Riesgo de fragmentación o fuga de memoria. |

---

| Característica           | Estática                                                                                                                                                                                                                                             | Enlazada Simple                                                                                                                         | Enlazada Doble                                                                                                                          |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Uso de Memoria           | Fija, reserva un bloque fijo de memoria, incluso si no se usa.                                                                                                                                                                                       | Menor en promedio, ocupa solo la memoria necesaria para almacenarlos elementos que contiene.                                            | Menor en promedio, pero un poco más que la simple por almacenar un puntero extra en cada nodo.                                          |
| Memoria contigua         | Si, la información se almacena en un array.                                                                                                                                                                                                          | No, los nodos están dispersos en la memoria y conectados por punteros.                                                                  | No, los nodos están dispersos en la memoria y conectados por punteros.                                                                  |
| Acceso directo           | Si, puedes por índice a cualquier item. Esto es porque todos los elementos están almacenados de forma contigua en memoria y tienen el mismo tamaño, por lo que la dirección de cada elemento se puede calcular matemáticamente de forma lineal O(1). | No, acceso secuencial (hay que recorrer la lista para obtener posiciones intermedias).                                                  | No, acceso secuencial (hay que recorrer la lista para obtener posiciones intermedias).                                                  |
| Dirección del recorrido  | No aplica.                                                                                                                                                                                                                                           | Exclusivamente hacia delante.                                                                                                           | Hacia delante y hacia atrás.                                                                                                            |
| Ampliable                | No, el array tiene tamaño fijo.                                                                                                                                                                                                                      | Si.                                                                                                                                     | Si.                                                                                                                                     |
| Operaciones más costosas | insertItem, deleteAtPosition (excepto al final. La complejidad aumenta con el estado de ocupación de la lista y cuánto más nos acercamos al inicio, siendo una eliminación del primer elemento de una lista con `n` espacios llenos de orden O(n)).  | insertItem (final), deleteAtPosition (final), previous, last, deleteList, copyList.                                                     | insertItem (final), deleteAtPosition (final), last, deleteList, copyList.                                                               |
| Seguridad                | Total, es posible enviar una copia de la lista cuando es un parámetro pasado por valor.                                                                                                                                                              | Reducida, no es posible pasar un nodo por valor, porque por definición un nodo es un puntero a la variable que contiene la información. | Reducida, no es posible pasar un nodo por valor, porque por definición un nodo es un puntero a la variable que contiene la información. |
