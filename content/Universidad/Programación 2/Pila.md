---
title: Pilas (Stacks)
tags:
  - Programación-2
  - Tipos-de-datos
  - Especificaciones
  - Universidad
date: 2025-05-08
aliases:
  - pila
---

## 📌 Resumen del TAD Pila

Una un *TAD* pila sigue el principio **LIFO** *Last in-First out*. En este tipo de estructura, el último elemento que se añade es el que ocupa una posición cima, y el primero en salir. Este *TAD* no permite acceder a ningún elemento más que al que ocupa la cima.

>[!warning] ¿Es una variación del TAD [[Lista]]?  
**No** es correcto decir que _una pila es una variación de una lista_, porque conceptualmente **la pila es un TAD independiente, con una abstracción propia**.  </br>
No obstante, sí es cierto que un TAD Pila puede **implementarse** a partir del TAD Lista.
##### Ejemplos de pilas:
- Una pila de platos:</br>
![[/images/plate_stack.jpeg|250]]
- Una pila de monedas:</br>![[images/coin_stack.webp|250]]
## Tipos de implementación
##### Según su uso de memoria:
La implementación de un *TAD* pila depende de cómo se almacenen sus elementos en memoria, y existen ==dos== métodos principales para ello.

- [[Pilas Estáticas]]: Se les asigna inicialmente un tamaño máximo que no se puede cambiar.
- [[Pilas Dinámicas]]: Tienen un tamaño variable y ocupan únicamente la cantidad de memoria necesaria para almacenar la información que contienen.

---

## Estructura de datos

La estructura de datos variará según se usen [[Pilas Estáticas]] o [[Pilas Dinámicas]].

---

## Especificación:

```c  
/**  
	@brief Inicializa un stack vacío.
	@param[out] S Puntero al stack a inicializar.
	@pre El stack debe estar declarado.
	@post El stack queda inicializado y marcado como vacío. 
*/
void createEmptyStack(tStack *S);  
  
/**  
	 @brief Inserta un elemento en la cima de la pila.
	 @param[in] d Item a insertar.
	 @param[in,out] S Puntero al stack.
	 @return true si la inserción fue exitosa, false de lo contrario.
	 @post El tamaño del stack se incrementa por 1 al guardar ahora el nuevo item.
*/
bool push(tItemS d, tStack *S);  
  
/**  
	@brief Elimina el elemento de la cima del stack.
	@param[in,out] S Puntero al stack.
	@pre El stack no puede estar vacío.
*/
void pop(tStack *S);  
  
/**  
	@brief Devuelve el elemento de la cima de la pila.
	@param[in] S Variable de tipo tStack.
	@return El elemento tItemS de la cima del stack.
	@pre El stack no puede estar vacío. 
*/
tItemS peek(tStack S);  
  
/**  
	@brief Comprueba si un stack está vacío.
	@param[in] S Variable de tipo tStack.
	@return true si el stack está vacío, false de lo contrario.
*/
bool isEmptyStack(tStack S);
```

---

## Comparativa de implementaciones

| Implementación | Ventajas                       | Inconvenientes                                                                                                                                       |
| -------------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Estática       | Simplicidad y predictibilidad. | Tamaño fijo, requiere más memoria inicial, y se corre el riesgo de no poder insertar elementos al estar llena.                                       |
| Dinámica       | Memoria dinámica y ampliable.  | No es posible el acceso directo, es necesario recorrer la lista para acceder a las diferentes posiciones. Riesgo de fragmentación o fuga de memoria. |
## Enlaces de interés

- [[Pilas Dinámicas]]
- [[Pilas Estáticas]]
- [[Lista]] (de donde derivan muchas implementaciones de pilas)