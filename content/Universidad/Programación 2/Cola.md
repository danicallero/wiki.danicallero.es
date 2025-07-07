---
title: 4. TAD Cola
tags:
  - Programación-2
  - Tipos-de-datos
  - Especificaciones
  - Universidad
date: 2025-05-08
aliases:
  - cola
---
## Definición

Una **cola** es una estructura de datos lineal que sigue la política **FIFO** (_First In, First Out_), en la que los elementos se insertan por un extremo (final) y se eliminan por el otro (frente). Es muy útil en problemas donde los elementos deben procesarse en orden de llegada, como en la planificación de tareas, impresión, redes, simulaciones o sistemas operativos.

Una cola contiene una secuencia de elementos $a_{o}$,$a_{1}$,$a_{2}$,…,$a_{n}$ tal que:

- $a_{o}$ es el primer elemento insertado (frente).
- $a_{n}$ es el último insertado (final).

>[!warning] ¿Es una variación del TAD [[Lista]]?  
>**No** es correcto decir que _una cola es una variación de una lista_, porque conceptualmente **la cola es un TAD independiente, con una abstracción propia**.  </br>
>No obstante, sí es cierto que un TAD Cola puede **implementarse** a partir del TAD Lista.

---

## Clasificación de colas según implementación

| Tipo                                      | Características principales                                                                                                           |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **[[Cola Estática]]**                     | Tamaño fijo. Uso de array. Más simple y rápida, pero con riesgo de overflow.                                                          |
| **[[Cola Dinámica]]**                     | Uso de nodos enlazados. Tamaño variable. Más flexible pero más compleja y lenta.                                                      |
| [[Cola de Prioridad\|Cola con Prioridad]] | Cada elemento tiene prioridad. Se atienden primero los de prioridad mayor. Internamente es una lista de colas por nivel de prioridad. |

---
## Especificación informal de una Cola
- Generadoras
	- createEmptyQueue -> Queue
		- Objetivo: Crea una cola vacía.
		- Salida: Una cola vacía.
		- Postcondición: La cola queda inicializada y vacía.
	- enqueue(Item, Queue) -> Queue, Bool
		- Objetivo: Inserta un elemento en la cola, que queda al final.
		- Entrada:
			- Item: Elemento a insertar.
			- Queue: Cola a la que se le aplicará la operación.
		- Salida:
			- Queue: Cola con el elemento insertado.
			- Bool: True/False dependiendo de si la operación se ha realizado con éxito.
- Destructoras:
	- dequeue(Queue) -> Queue
		- Objetivo: Elimina el primer elemento de la cola.
		- Entrada:
			- Queue: Cola a la que se le aplicará la operación.
		- Salida:
			- Queue: Cola sin el elemento de la cima.
		- Precondición: La cola no está vacía.
- Observadoras:
	- front(Queue) -> Item
		- Objetivo: Recupera el contenido del primer elemento de la cola.
		- Entrada:
			- Queue: Cola a la que se le aplicará la operación.
		- Salida:
			- Item: El elemento recuperado de la cola.
		- Precondición: La cola no está vacía.
	- isEmptyQueue(Queue) -> Bool
		- Objetivo: Determina si una cola está vacía o no.
		- Entrada:
			- Queue: Cola a la que se le aplicará la operación.
		- Salida:
			- True/False dependiendo si la cola está vacía o no.
---
## Especificación del TAD Cola

Una cola se define por las siguientes operaciones básicas:

```c
/**
 * @brief Inicializa una cola vacía.
 * @param[out] Q Cola a inicializar.
 * @post La cola queda vacía.
 */
void createEmptyQueue(tQueue *Q);

/**
 * @brief Comprueba si una cola está vacía.
 * @param[in] Q Cola a comprobar.
 * @retval true Si la cola está vacía.
 * @retval false Si contiene al menos un elemento.
 */
bool isEmptyQueue(tQueue Q);

/**
 * @brief Inserta un elemento al final de la cola.
 * @param[in] item Elemento a insertar.
 * @param[in,out] Q Cola en la que insertar.
 * @retval true Si se ha insertado correctamente.
 * @retval false Si no se ha podido insertar (por ejemplo, en colas estáticas llenas).
 * @post El nuevo elemento se encuentra en la última posición.
 */
bool enqueue(tItemQ item, tQueue *Q);

/**
 * @brief Elimina el primer elemento de la cola.
 * @param[in,out] Q Cola a modificar.
 * @pre La cola no puede estar vacía.
 * @post El primer elemento ha sido eliminado.
 */
void dequeue(tQueue *Q);

/**
 * @brief Devuelve el primer elemento de la cola sin eliminarlo.
 * @param[in] Q Cola de consulta.
 * @return El primer elemento de la cola.
 * @pre La cola no puede estar vacía.
 */
tItemQ front(tQueue Q);
```

---
## Observaciones

- Todas las colas cumplen el comportamiento FIFO, excepto cuando se introduce una política de prioridad.
- En colas estáticas, se debe comprobar que hay espacio antes de insertar.
- En colas dinámicas, se debe gestionar memoria correctamente para evitar fugas.
- Existe una variación del TAD cola que se comporta de forma circular. Su implementación se encuentra detallada en la implementación de la [[Cola Dinámica|cola dinámica]]

---
## Enlaces de interés

- [[Cola Estática]]
- [[Cola Dinámica]]
- [[Cola de Prioridad]]
- [[Lista]] (de donde derivan muchas implementaciones de colas)