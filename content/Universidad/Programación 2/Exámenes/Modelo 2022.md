---
title: Moodle 2021-2022
tags:
  - Programación-2
  - Universidad
  - Exámenes
date: 2025-05-09
draft: false
---
---
# Ejercicio 1

Dados los siguientes supuestos prácticos decidir: (1) cuál es la MEJOR estructura de datos, y (2) su MEJOR implementación para resolver el problema (para ser considerada correcta, AMBAS respuestas deberán estar justificadas): (1,5 pts.)

>[!note] En el Servicio de Salud están recibiendo continuamente nuevas dosis de vacunas. Para evitar que caduquen es imprescindible que se usen primero las vacunas que han sido recibidas hace más tiempo. ¿Qué estructura de datos deberemos utilizar para gestionar el almacenamiento de las dosis?

En este caso se debe utilizar una [[cola dinámica]], pues por su estructura FIFO (*First In, First Out*), los elementos con los datos de las dosis se recuperarán por orden de llegada. Como desconocemos la cantidad de dosis que van a llegar, se implementará de forma **Dinámica**.

>[!note] El Servicio de Salud desea enviar una carta al domicilio y un SMS al móvil de cada paciente a los que se va a administrar la vacuna para recordarle el lugar y la hora en que debe presentarse ¿Qué estructura de datos deberemos utilizar para que podamos recuperar rápidamente esta información a partir del número de la tarjeta sanitaria?

En este caso utilizaremos un [árbol AVL](Universidad/Programación-2/árboles-binarios#rotaciones-en-avl-para-mantener-equilibrio). Necesitamos acceder rápidamente a la información del paciente (domicilio, móvil, lugar y hora) a partir de una **clave única** (número de tarjeta sanitaria). El ==árbol AVL== es una estructura que mantiene el árbol equilibrado, garantizando búsquedas en **O(log n)** incluso en el peor caso. La implementación será **dinámica**, ya que necesitamos que el numero de pacientes pueda crecer conforme lleguen nuevos datos.

>[!note] Para garantizar la distancia interpersonal durante los exámenes, la Facultad ha asignado varias aulas al examen de cada asignatura. Cada aula tiene una capacidad máxima y los estudiantes elegirán en una web el aula en la que van a hacer el examen (de entre aquellas en las que queden sitios libres). Antes de un examen queremos obtener el listado de los estudiantes, ordenado alfabéticamente por nombre, que se han asignado a cada aula. ¿Qué estructura de datos deberemos utilizar para gestionar este listado?

En este caso utilizaremos *multilistas*. Una [[Listas Estáticas|lista estática]] inicial será la responsable de guardar la información correspondiente a cada una de las aulas; es estática porque las clases con las que contamos es una constante que conocemos antes de empezar a distribuir al alumnado. De cada elemento `clase` colgará otra [[Listas Estáticas|lista estática]] ordenada alfabéticamente, que guardará el listado de alumnos por aula; es estática porque debemos llenar la lista solo cuando quedan sitios libres.

>[!warning] Esta es mi forma de interpretar la pregunta, también se podría argumentar que la lista que cuelga debe ser dinámica porque desconocemos el número exacto de alumnos que se van a inscribir. No obstante, también se puede contraargumentar que el aforo de un aula, siendo realistas, difícilmente superará las 200 personas. La memoria que ahorra la implementación dinámica en caso de un aula con bajo aforo quedará opacada con la computación del atravesamiento necesario para contar el numero de alumnos guardados y evitar superar el aforo en cada inserción.

---
# Ejercicio 2 

Verdadero/Falso: (1 pto.)

>En el TAD Cola los elementos se organizan de forma circular.

**Falso**. Si bien es cierto que existen las implementaciones circulares de una [[cola]], esto no implica que todas las colas lo sean por definición. Las colas circulares se tratan, pues, de una solución particular.

>En una implementación dinámica de las listas es imposible tener acceso eficiente al último elemento de la lista.

**Falso**. Existen muchas formas de implementar una [[Listas Dinámicas|lista dinámica]]; si bien es cierto que en clase tan solo se trabajó con una implementación en la que el tipo `tList` es equivalente a `tPosL`, también podríamos tipificar `tList` como un `struct` que contiene punteros `tPosL` al nodo inicio (`head`) y al nodo final (`tail`). En este modelo de lista, el acceso al último elemento es igual de eficiente que el acceso al primero $O^1$, yes incluso más eficiente que acceder a un nodo intermedio.

>En una pila los elementos se extraen en orden inverso al de entrada.

**Verdadero**. Un TAD [[Pila|pila]] tiene una estructura **LIFO** (*Last In, First Out*), que por definición extrae primero al último elemento que se almacena en ella. 

> Los árboles completos son árboles binarios de búsqueda equilibrados.

**Verdadero**. Por la definición vista en clase, un [árbol completo](Universidad\Programación-2/Árboles-binarios#árbol-binario-completo-complete-binary-tree) es aquel que tiene todos sus niveles hasta h-1 llenos totalmente. Esto quiere decir que todos los nodos en niveles hasta h-1 tienen un [factor de equilibrio](Universidad\Programación-2\AVL#factor-de-equilibrio) $\in [-1,1]$.

---
# Ejercicio 3

En el siguiente código hay tres errores. Identifica cada uno de ellos, indica por qué se trata de un error y propón el correspondiente código corregido (basta con reescribir la parte del código afectada). (0,75 pts.)

```c
#include <stdio.h>
#include <stdlib.h>
typedef struct tNode* tPosL;

struct tNode {
    int datum;
    tPosL next;
};

void corrects (int max, tPosL L) {
    struct tNode i;
    for (i=L; i!=NULL; i=i->next) {
        if (i->datum > max)
            i->datum = max;
        printf("%d ", i->datum);
    }
}

int main() {
    tPosL q, L;
    L = malloc(sizeof(struct tNode));
    printf("Type first value: "); scanf("%d", &L->datum);
    q = malloc(sizeof(struct tNode));
    q = L;
    for (int i=2; i<=10; i++) {
        q->next = malloc(sizeof(struct tNode));
        q = q->next;
        printf("Type next value: "); scanf("%d", &q->datum);
    }
    q->next = NULL;
    corrects(5,&L);
}
```

1. `i` es declarado como un `struct` en la línea 11, no como un puntero. Pero se le asigna `L`, un puntero, y se usa como puntero (`i->next`). Esto es un **error de tipo**. Se corrige cambiando el tipo en la declaración:
```c
...
void corrects (int max, tPosL L) {
	tPosL i;
...
```

2. Se reserva memoria para `q` y **luego se desreferencia**  con `q = L;`, lo que hace que el puntero original a la memoria recién reservada se pierda. Esto es una **fuga de memoria**. Además, el objetivo parece ser que `q` apunte al mismo nodo que `L`, y **eso ya lo puedes hacer directamente sin malloc previo**. Solución:
```c
// q = malloc(sizeof(struct tNode));   ← ELIMINAR ESTA LÍNEA
q = L;
```

3. `L` ya es un puntero, así que pasar `&L` (que es un `tPosL*`) cuando `corrects` espera un `tPosL` es incorrecto. Si bien es cierto que algunos compiladores permisivos de más pueden compilar el código de esta manera, la ejecución generará un error. Solución:
```c
corrects(5, L); // <- MODIFICAR ESTA LÍNEA
```

---
# Ejercicio 4

El tipo abstracto de datos (TAD) tBinTree sirve para representar árboles binarios de búsqueda de enteros positivos y para manipularlo solamente disponemos de la siguiente interfaz: (1,25 pts.)

```c
#define TNULL ...
typedef unsigned int tItemT;
typedef ... tBinTree;

void createEmptyTree(tBinTree *T);
bool buildTree(tBinTree LTree, tItemT d, tBinTree RTree, tBinTree *T);
tBinTree leftChild(tBinTree T);
tBinTree rightChild(tBinTree T);
tBinTree root(tBinTree T);
bool isEmptyTree(tBinTree T);
```

>[!note] Precondición común a leftChild, rightChild y root: árbol no vacío

### A) (0,75 pts.)
Se pide: 
1. determinar qué OPERACIÓN hace la función WhatItDoes; 
2. Aplícala al árbol de la figura y obtén su resultado
