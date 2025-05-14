---
title: Moodle 2021-2022
tags:
  - Programación-2
  - Universidad
  - Exámenes
date: 2025-05-11
draft: false
---
---
# Ejercicio 1

**Dados los siguientes supuestos prácticos decidir: (1) cuál es la MEJOR estructura de datos, y (2) su MEJOR implementación para resolver el problema (para ser considerada correcta, AMBAS respuestas deberán estar justificadas): (1,5 pts.)**

>[!abstract] En el Servicio de Salud están recibiendo continuamente nuevas dosis de vacunas. Para evitar que caduquen es imprescindible que se usen primero las vacunas que han sido recibidas hace más tiempo. ¿Qué estructura de datos deberemos utilizar para gestionar el almacenamiento de las dosis?

En este caso se debe utilizar una [[cola dinámica]], pues por su estructura FIFO (*First In, First Out*), los elementos con los datos de las dosis se recuperarán por orden de llegada. Como desconocemos la cantidad de dosis que van a llegar, se implementará de forma **Dinámica**.

>[!abstract] El Servicio de Salud desea enviar una carta al domicilio y un SMS al móvil de cada paciente a los que se va a administrar la vacuna para recordarle el lugar y la hora en que debe presentarse ¿Qué estructura de datos deberemos utilizar para que podamos recuperar rápidamente esta información a partir del número de la tarjeta sanitaria?

En este caso utilizaremos un [árbol AVL](Universidad/Programación-2/AVL). Necesitamos acceder rápidamente a la información del paciente (domicilio, móvil, lugar y hora) a partir de una **clave única** (número de tarjeta sanitaria). El ==árbol AVL== es una estructura que mantiene el árbol equilibrado, garantizando búsquedas en **O(log n)** incluso en el peor caso. La implementación será **dinámica**, ya que necesitamos que el numero de pacientes pueda crecer conforme lleguen nuevos datos.

>[!abstract] Para garantizar la distancia interpersonal durante los exámenes, la Facultad ha asignado varias aulas al examen de cada asignatura. Cada aula tiene una capacidad máxima y los estudiantes elegirán en una web el aula en la que van a hacer el examen (de entre aquellas en las que queden sitios libres). Antes de un examen queremos obtener el listado de los estudiantes, ordenado alfabéticamente por nombre, que se han asignado a cada aula. ¿Qué estructura de datos deberemos utilizar para gestionar este listado?

En este caso utilizaremos *multilistas*. Una [[Listas Estáticas|lista estática]] inicial será la responsable de guardar la información correspondiente a cada una de las aulas; es estática porque las clases con las que contamos es una constante que conocemos antes de empezar a distribuir al alumnado. De cada elemento `clase` colgará otra [[Listas Estáticas|lista estática]] ordenada alfabéticamente, que guardará el listado de alumnos por aula; es estática porque debemos llenar la lista solo cuando quedan sitios libres.

>[!warning] Esta es mi forma de interpretar la pregunta, también se podría argumentar que la lista que cuelga debe ser dinámica porque desconocemos el número exacto de alumnos que se van a inscribir. No obstante, también se puede contraargumentar que el aforo de un aula, siendo realistas, difícilmente superará las 200 personas. La memoria que ahorra la implementación dinámica en caso de un aula con bajo aforo quedará opacada con la computación del atravesamiento necesario para contar el numero de alumnos guardados y evitar superar el aforo en cada inserción.

---
# Ejercicio 2 

**Verdadero/Falso: (1 pto.)**

>[!abstract] En el TAD Cola los elementos se organizan de forma circular.

**Falso**. Si bien es cierto que existen las implementaciones circulares de una [[cola]], esto no implica que todas las colas lo sean por definición. Las colas circulares se tratan, pues, de una solución particular.

>[!abstract] En una implementación dinámica de las listas es imposible tener acceso eficiente al último elemento de la lista.

**Falso**. Existen muchas formas de implementar una [[Listas Dinámicas|lista dinámica]]; si bien es cierto que en clase tan solo se trabajó con una implementación en la que el tipo `tList` es equivalente a `tPosL`, también podríamos tipificar `tList` como un `struct` que contiene punteros `tPosL` al nodo inicio (`head`) y al nodo final (`tail`). En este modelo de lista, el acceso al último elemento es igual de eficiente que el acceso al primero $O(1)$, y es incluso más eficiente que acceder a un nodo intermedio.

>[!abstract] En una pila los elementos se extraen en orden inverso al de entrada.

**Verdadero**. Un TAD [[Pila|pila]] tiene una estructura **LIFO** (*Last In, First Out*), que por definición extrae primero al último elemento que se almacena en ella. 

>[!abstract] Los árboles completos son árboles binarios de búsqueda equilibrados.

**Verdadero**. Por la definición vista en clase, un [árbol completo](Universidad\Programación-2/Árboles-binarios#árbol-binario-completo-complete-binary-tree) es aquel que tiene todos sus niveles hasta h-1 llenos totalmente. Esto quiere decir que todos los nodos en niveles hasta h-1 tienen un [factor de equilibrio](Universidad\Programación-2\AVL#factor-de-equilibrio) $\in [-1,1]$.

---
# Ejercicio 3

**En el siguiente código hay tres errores. Identifica cada uno de ellos, indica por qué se trata de un error y propón el correspondiente código corregido (basta con reescribir la parte del código afectada). (0,75 pts.)**

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

**El tipo abstracto de datos (TAD) tBinTree sirve para representar árboles binarios de búsqueda de enteros positivos y para manipularlo solamente disponemos de la siguiente interfaz: (1,25 pts.)**

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
>[!abstract] Se pide:
> 1. **Determinar qué OPERACIÓN hace la función WhatItDoes.**
> 2. **Aplícala al árbol de la figura y obtén su resultado.**
```c
int WhatItDoes(tBinTree A){
    if (isEmptyTree(A))
        return 0;
    else if (root(A)%2!=0)
        return(WhatItDoes(leftChild(A)) + WhatItDoes(rightChild(A)));
    else
        return(root(A) + WhatItDoes(leftChild(A)) + WhatItDoes(rightChild(A)));
}
```

La función `WhatItDoes` implementa de forma recursiva una operación de suma de aquellas claves que son un número par. Esto lo sabemos porque:
```c
else if (root(A)%2!=0) // <-ESTO SE CUMPLE CUANDO ROOT(A) ES IMPAR
```
En el caso de un nodo impar, no lo suma; continúa el recorrido por sus hijo izquierdo y derecho. En el caso de un nodo par, seguirá atravesando el árbol, pero sumará el valor del nodo a la cadena recursiva. El recorrido finaliza cuando se alcanza un nodo vacío (`isEmptyTree(A)`), en cuyo caso se devuelve 0.

Figura:
```
      20
    /    \
  14      35
 /  \    /  \
1   18  24   40
 \       \
  6      30
```

Ejecutar la operación en esta figura devolverá:
20+14+6+18+24+30+40 = `152`

### B) (0,5 pts.)

>[!abstract] Identificar qué tipo de recorrido nos permitiría mostrar las claves del árbol de la figura en este orden: 20-14-1-6-18-35-24-30-40.

El tipo de recorrido es el [preorden](Universidad\Programación-2/Árboles-binarios#preorden).

Aplicando el siguiente seudocódigo al mismo árbol, ¿cuál sería la secuencia de claves?

```c
Procedimiento recorrido(tBinTree)
Inicio
	si no es árbol vacío (tBinTree) entonces
		recorrido(hijo izquierdo (tBinTree))
		recorrido(hijo derecho (tBinTree))
		imprime(raíz (tBinTree))
Fin
```

El recorrido que se hará con el pseudocódigo es el del [posorden](Universidad\Programación-2/Árboles-binarios#posorden). Que recorrerá el árbol según la secuencia: 6 - 1 - 18 - 14 - 30 - 24 - 40 - 35 - 20.

>[!question] Suponiendo que el árbol de la figura es AVL, elimina la clave 20, y muestra el árbol resultado identificando cualquier transformación necesaria y explicándola paso a paso.

- Paso 1: Encontrar el **mayor de los menores** (predecesor inorden)
```
   14
  /  \
 1   18
  \
   6
```
En este caso el mayor será el 18.
- Paso 2: sustituimos el **20 por el 18** para eliminarlo como hoja
```
      18
    /    \
  14      35
 /       /  \
1       24   40
 \       \
  6       30
```
- Paso 3: Cálculo de alturas y factores de balance antes de rotar
  1. Nodo 6
     - Altura = 0 (hoja)
     - FB(6) = altura(izq) – altura(der) = 0 – 0 = **0**

  2. Nodo 1 
     - Hijos: izq = NULL (altura –1), der = 6 (altura 0)
     - Altura(1) = max(–1, 0) + 1 = 1
     - FB(1) = –1 – 0 = **–1**
    >[!note] max(–1, 0) es porque la altura de un nodo es 1+la mayor de las alturas de sus subárboles. -1 es porque si no tiene subárbol dcho o izquierdo, la altura de dicha rama es -1.

  3. Nodo 14
     - Hijos: izq = 1 (altura 1), der = NULL (altura –1)
     - Altura(14) = max(1, –1) + 1 = 2
     - FB(14) = 1 – (–1) = **+2** -> **desbalance LR**
            
- Paso 4: Rotación doble Izquierda-Derecha (LR)
    4.1. Rotación izquierda en 1
    ```
    1               6
     \     ->      /
      6           1
    ```
    
    4.2. Rotación derecha en 14
    ```
        14           6
       /   ->      /   \
      6           1    14
     /
    1
    ```
    
- Paso 5: Árbol final balanceado
    ```
          18
        /    \
       6      35
      / \    /  \
     1  14  24   40
             \
              30
    ```
    
- Paso 6: Verificación de factores de balance tras rotar
    
    1. Nodo 1: FB = 0 – 0 = **0**
    2. Nodo 14: FB = 0 – 0 = **0** 
    3. Nodo 6:
        - Hijos: 1 (0), 14 (0) -> altura = 1
        - FB(6) = 0 – 0 = **0** 

    4. Nodo 30: FB = 0 – 0 = **0**
    5. Nodo 24:
        - Hijos: NULL (–1), 30 (0) -> altura = 1
        - FB(24) = –1 – 0 = **–1**
            
    6. Nodo 40: FB = 0 – 0 = **0**
    7. Nodo 35:
        - Hijos: 24 (1), 40 (0) -> altura = 2 
        - FB(35) = 1 – 0 = **+1**
            
    8. Nodo 18:
        - Hijos: 6 (1), 35 (2) -> altura = 3
        - FB(18) = 1 – 2 = **–1**
            
>[!success] Todos los factores de balance quedan en el rango $[–1, +1]$, por lo que el árbol está correctamente balanceado.

# Ejercicio 5

> [!tldr] En la práctica 2 se implementó un sistema para gestionar la plataforma VIMFIC de vídeo bajo demanda. El sistema emplea dos estructuras de datos (UserList y VideoList) para almacenar conjuntamente toda la información asociada, respectivamente, a usuarios y reproducciones. tal y como se representa en la siguiente figura: Partiendo del mismo problema, en este ejercicio se proponen una serie de modificaciones.

![[Estructura_modelo_P2_2022.png]]
## A) (3 pts.)

>[!abstract] Cuando se ponga el sistema en explotación en un entorno real, leer las peticiones de los usuarios desde un fichero dejará de ser viable. En su lugar, se utilizará un TAD Cola (RequestQueue) para almacenar y gestionar dichas peticiones. En concreto, se ha decidido emplear una implementación de cola estática circular de 100 posiciones. Se pide, en primer lugar, realizar la nueva definición de tipos de datos de la cola:

| MAX_PAR_LENGTH | constante para representar la máxima longitud (32) de las cadenas de caracteres de los parámetros de las peticiones                                                                                                                                                     |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tQueue         | representa una cola de peticiones                                                                                                                                                                                                                                       |
| tCode          | tipo de la petición recibida (`char`)                                                                                                                                                                                                                                   |
| tItemQ         | datos de un elemento de la cola (una petición), compuesto por:<br>`code`: de tipo `tCode`, representa la clase de la petición<br>`parameter1`: de tipo cadena de caracteres<br>`parameter2`: de tipo cadena de caracteres<br>`parameter3`: de tipo cadena de caracteres |
| tPosQ          | posición de un elemento de la cola                                                                                                                                                                                                                                      |
| NULLQ          | constante para representar posiciones nulas en la cola                                                                                                                                                                                                                  |
>[!abstract] Además, partiendo de la nueva definición de tipos de datos, se pide realizar la implementación de las siguientes operaciones:

```c
isEmptyQueue (tQueue) -> bool
//Determina si la cola está vacía.

enqueue (tItemQ, tQueue) -> tQueue, bool
//Inserta un nuevo elemento (tItemQ) en la cola. Devuelve falso si no hay memoria suficiente para realizar la operación.

dequeue (tQueue) -> tQueue
//Elimina el elemento que está en el frente de la cola. PreCD: la cola no está vacía.
```

La implementación general de la cola estática circular está [aquí](/Universidad/Programación-2/Cola-Estática#cola-estática-circular). Implementamos la solución particular:

### Especificación:
```c
#define QMAX 100
#define NULLQ -1
 
typedef struct {
	tCode code;
	char parameter1[MAX_PAR_LENGTH];
	char parameter2[MAX_PAR_LENGTH];
	char parameter3[MAX_PAR_LENGTH];
} tItemQ;

typedef int tPosQ; //es una cola estática!!!
 
typedef struct {
    tItemQ data[QMAX];
    tPosQ front;
    tPosQ rear;
} tQueue;
```

### Implementación:
```c
tPosQ addOne(tPosQ i) {
    return (i + 1) % QMAX; //si se produce overflow vuelve al inicio
}

bool isEmptyQueue(tQueue Q) {
    return Q.front == addOne(Q.rear);
}

bool enqueue(tItemQ item, tQueue *Q) {
    if (Q->front == addOne(addOne(Q->rear))) return false;
    Q->rear = addOne(Q->rear);
    Q->data[Q->rear] = item;
    return true;
}

void dequeue(tQueue *Q) {
    Q->front = addOne(Q->front);
}
```

## B) (2,5 pts.)

>[!abstract] Implementación de una función:
>Los propietarios de la plataforma VIMFIC quieren lanzar una promoción para fidelizar a los mejores clientes de categoría standard. Para ello, se pondrá a valor 0 el contador totalPlayTime de aquellos que cumplan dos condiciones:
>1. Que tengan entre 0 y 30 minutos menos de _totalPlayTime_ que el cliente _standard_ que más tiempo de reproducción tenga.
>2. Que, además, hayan visualizado más de 10 vídeos

>[!todo] Se pide implementar la operación:
>```applyPromo (tUserList) —> tUserList```
>Para que lleve a cabo el proceso descrito. El manejo de todos los TADs implicados se hará utilizando **EXCLUSIVAMENTE** los tipos y las operaciones de las interfaces mostrados en los [ANEXOS](/Universidad/Programación-2/Exámenes/Modelo-2022#anexo-i--lista-de-usuarios-tuserlist)

```c
//Auxiliar para contar los elementos de la lista vídeos:
int countVideos(tVideoList list){
	int counter = 0; //contador
	tVideoPos q;
	if (!isEmptyListV(list)){
		q = firstV(list);
		while(q != NULL_VIDEO){ //se repite hasta llegar al final
			counter++;
			q = nextV(q, list) //avanzamos al sig.
		}
	}
	return counter;
}
```

```c
void applyPromo(tUserList *list) { //pasamos por ref. porque debemos cambiar valores
    tUserPos pos;
    int maxPlayTime = -1;

    // 1. Encontrar el totalPlayTime máximo entre los usuarios estándar
    pos = first(*list);
    while (pos != NULL_USER) {
        tUserItem user = getItem(pos, *list);
        if (user.userCategory == standard && user.totalPlayTime > maxPlayTime) {
            maxPlayTime = user.totalPlayTime;
        }
        pos = next(pos, *list);
    }

    // 2. Aplicar la promoción a los usuarios estándar que cumplan ambas condiciones
    pos = first(*list);
    while (pos != NULL_USER) {
        tUserItem user = getItem(pos, *list);
        int videoCount = countVideos(user.videoList);

        if (user.userCategory == standard &&
            user.totalPlayTime >= maxPlayTime - 30 &&
            user.totalPlayTime < maxPlayTime && // estrictamente menos que el máximo
            videoCount > 10) {

            user.totalPlayTime = 0;
            updateItem(user, pos, list);
        }

        pos = next(pos, *list);
    }
}
```

>[!warning] ¡Ojo!
>user.totalPlayTime < maxPlayTime es estrictamente menos que el mayor usuario siguiendo textualmente el enunciado: "entre 0 y 30 minutos **menos** de _totalPlayTime_"

### Anexo I – Lista de Usuarios (`tUserList`)

#### Tipos de datos

| Nombre            | Tipo                       | Descripción                                   |
| ----------------- | -------------------------- | --------------------------------------------- |
| `tUserList`       | ADT                        | Lista ordenada de usuarios por nick           |
| `tUserCategory`   | `enum {standard, premium}` | Categoría del usuario                         |
| `tUserItem`       | `struct`                   | Datos del usuario                             |
| ├ `nickname`      | `string`                   | Nombre del usuario                            |
| ├ `totalPlayTime` | `int`                      | Tiempo total de reproducción                  |
| ├ `userCategory`  | `tUserCategory`            | Categoría del usuario                         |
| └ `videoList`     | `tVideoList`               | Lista de vídeos del usuario                   |
| `tUserPos`        | posición                   | Posición de un elemento en `tUserList`        |
| `NULL_USER`       | constante                  | Constante usada para indicar posiciones nulas |
#### Operaciones

>[!note] Nota
>Precondición común (salvo `createEmptyList`): la lista debe estar inicializada.

| Operación                                    | Retorno     | Descripción                                                           |
| -------------------------------------------- | ----------- | --------------------------------------------------------------------- |
| `createEmptyList(tUserList)`                 | `tUserList` | Crea una lista vacía. PostCD: Lista inicializada y sin elementos.     |
| `isEmptyList(tUserList)`                     | `bool`      | Determina si la lista está vacía.                                     |
| `first(tUserList)`                           | `tUserPos`  | Devuelve la posición del primer elemento. PreCD: lista no vacía.      |
| `last(tUserList)`                            | `tUserPos`  | Devuelve la posición del último elemento. PreCD: lista no vacía.      |
| `next(tUserPos, tUserList)`                  | `tUserPos`  | Devuelve la posición siguiente o `NULL_USER`. PreCD: posición válida. |
| `previous(tUserPos, tUserList)`              | `tUserPos`  | Devuelve la posición anterior o `NULL_USER`. PreCD: posición válida.  |
| `getItem(tUserPos, tUserList)`               | `tUserItem` | Devuelve el contenido del elemento. PreCD: posición válida.           |
| `updateItem(tUserItem, tUserPos, tUserList)` | `tUserList` | Modifica el contenido del elemento. PreCD: posición válida.           |

### Anexo II – Lista de Vídeos (`tVideoList`)
#### Tipos de Datos
|Nombre|Tipo|Descripción|
|---|---|---|
|`tVideoList`|ADT|Lista no ordenada de vídeos|
|`tVideoItem`|`struct`|Datos del vídeo|
|├ `titleVideo`|`string`|Título del vídeo|
|└ `playTime`|`int`|Tiempo de reproducción|
|`tVideoPos`|posición|Posición en la lista de vídeos|
|`NULL_VIDEO`|constante|Constante usada para indicar posiciones nulas|
#### Operaciones

>[!note] Nota
>Precondición común (salvo `createEmptyListV`): la lista debe estar inicializada.

| Operación                                        | Retorno      | Descripción                                                         |
| ------------------------------------------------ | ------------ | ------------------------------------------------------------------- |
| `createEmptyListV(tVideoList)`                   | `tVideoList` | Crea una lista vacía. PostCD: Lista inicializada y sin elementos.   |
| `isEmptyListV(tVideoList)`                       | `bool`       | Determina si la lista está vacía.                                   |
| `firstV(tVideoList)`                             | `tVideoPos`  | Devuelve la posición del primer vídeo. PreCD: lista no vacía.       |
| `lastV(tVideoList)`                              | `tVideoPos`  | Devuelve la posición del último vídeo. PreCD: lista no vacía.       |
| `nextV(tVideoPos, tVideoList)`                   | `tVideoPos`  | Devuelve el siguiente vídeo o `NULL_VIDEO`. PreCD: posición válida. |
| `previousV(tVideoPos, tVideoList)`               | `tVideoPos`  | Devuelve el anterior vídeo o `NULL_VIDEO`. PreCD: posición válida.  |
| `getItemV(tVideoPos, tVideoList)`                | `tVideoItem` | Devuelve el contenido del vídeo. PreCD: posición válida.            |
| `updateItemV(tVideoItem, tVideoPos, tVideoList)` | `tVideoList` | Modifica el contenido del vídeo. PreCD: posición válida.            |
