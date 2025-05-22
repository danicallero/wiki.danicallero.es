---
title: Colas de Prioridad
tags:
  - Programación-2
  - Tipos-de-datos
  - Implementaciones
  - Universidad
  - Especificaciones
date: 2025-05-08
aliases:
  - Cola con prioridad
  - cola con prioridad
draft: false
---
Una **cola de prioridad** es una variación del TAD [[Cola]] en la que los elementos se agrupan por niveles de prioridad. Cada prioridad tiene su propia sub-cola FIFO, y los elementos con prioridad más alta se atienden antes que los de menor prioridad. Este tipo de estructura es ideal para ==aplicaciones como planificadores de procesos, gestión de recursos y simulaciones==.

Según como se implemente, la cola de prioridad puede ser [dinámica](Universidad/Programacion-2/Cola-de-Prioridad#Estructura-Dinamica), [estática](Universidad/Programacion-2/Cola-de-Prioridad#Estructura-Estatica) o [mixta](Universidad/Programacion-2/Cola-de-Prioridad#Cola-de-prioridad-mixta).

---

# Diagrama de estructura común

```
tQueueP → [prio:3] → [prio:2] → [prio:1]
              ↓         ↓         ↓
             Q3        Q2        Q1
             [a]       [b][c]    [d][e][f]
```

Cada prioridad mantiene una cola FIFO independiente.

---

# Estructura Dinámica

```c
#define LNULL NULL

typedef unsigned char tPriority;
typedef struct tNodeQ *tPosQ;

typedef struct tNodeQ {
    tItemQ item;
    tPosQ next;
} tNodeQ;

typedef struct {
    tPosQ front;
    tPosQ rear;
} tQueue;

typedef struct {
    tPriority prio;
    tQueue queue;
} tItemL;

typedef struct tNodeL *tPosL;

struct tNodeL {
    tItemL data;
    tPosL next;
};

typedef tPosL tQueueP; // Lista de prioridades
```

## Operaciones (Dinámica)

```c
void createEmptyQueueP(tQueueP *queueP);
bool enqueueP(tItemQ item, tPriority prio, tQueueP *queueP);
void dequeueP(tQueueP *queueP);
tItemQ frontP(tQueueP queueP);
bool isEmptyQueueP(tQueueP queueP);
```

## Implementación (Dinámica)

```c
void createEmptyQueueP(tQueueP *queueP) {
    *queueP = LNULL;
}

bool enqueueP(tItemQ item, tPriority prio, tQueueP *queueP) {
    tQueue Q;
    tPosL pos = findItem(prio, *queueP);
    if (pos == LNULL) {
        if (!insertItem(prio, queueP)) return false;
        pos = findItem(prio, *queueP);
    }
    getItem(pos, *queueP, &prio, &Q);
    enqueue(item, &Q);
    updateItem(queueP, pos, Q);
    return true;
}

void dequeueP(tQueueP *queueP) {
    tPosL posL = first(*queueP);
    tQueue Q;
    tPriority prio;
    getItem(posL, *queueP, &prio, &Q);
    dequeue(&Q);
    updateItem(queueP, posL, Q);
    if (isEmptyQueue(Q)) deleteAtPosition(posL, queueP);
}

tItemQ frontP(tQueueP queueP) {
    tQueue Q;
    tPriority prio;
    getItem(first(queueP), queueP, &prio, &Q);
    return front(Q);
}

bool isEmptyQueueP(tQueueP queueP) {
    return queueP == LNULL;
}
```

---

# Estructura Estática

```c
#define MAX_PRIORITIES 5
#define MAX_ITEMS 100

typedef unsigned char tPriority;
typedef struct {
    tItemQ data[MAX_ITEMS];
    int front;
    int rear;
} tQueue;

typedef struct {
    tPriority prio;
    tQueue queue;
} tPriorityQueue;

typedef struct {
    tPriorityQueue levels[MAX_PRIORITIES];
    int size;
} tQueueP;
```

## Operaciones (Estática)

```c
void createEmptyQueueP(tQueueP *queueP);
bool enqueueP(tItemQ item, tPriority prio, tQueueP *queueP);
void dequeueP(tQueueP *queueP);
tItemQ frontP(tQueueP queueP);
bool isEmptyQueueP(tQueueP queueP);
```

## Implementación (Estática)

```c
void createEmptyQueueP(tQueueP *queueP) {
    queueP->size = 0;
}

bool enqueueP(tItemQ item, tPriority prio, tQueueP *queueP) {
    for (int i = 0; i < queueP->size; i++) {
        if (queueP->levels[i].prio == prio) {
            return enqueue(&queueP->levels[i].queue, item);
        }
    }
    if (queueP->size >= MAX_PRIORITIES) return false;
    queueP->levels[queueP->size].prio = prio;
    createEmptyQueue(&queueP->levels[queueP->size].queue);
    enqueue(&queueP->levels[queueP->size].queue, item);
    queueP->size++;
    return true;
}

void dequeueP(tQueueP *queueP) {
    int max = findHighestPriority(queueP);
    dequeue(&queueP->levels[max].queue);
    if (isEmptyQueue(queueP->levels[max].queue)) {
        for (int i = max; i < queueP->size - 1; i++) {
            queueP->levels[i] = queueP->levels[i + 1];
        }
        queueP->size--;
    }
}

tItemQ frontP(tQueueP queueP) {
    int max = findHighestPriority(&queueP);
    return front(queueP.levels[max].queue);
}

bool isEmptyQueueP(tQueueP queueP) {
    return queueP.size == 0;
}
```

---

# Comparativa Dinámica vs Estática

|Característica|Dinámica|Estática|
|---|---|---|
|Tamaño máximo|Ilimitado (dependiente de memoria)|Fijo (definido por constantes)|
|Flexibilidad|Alta|Limitada por `MAX_PRIORITIES`|
|Complejidad de gestión|Mayor (punteros, memoria dinámica)|Menor (acceso por índice)|
|Velocidad de acceso|Lineal (buscar prioridad)|Rápida (búsqueda en array)|
|Uso de memoria|Dinámico (solo lo necesario)|Preasignado (puede desperdiciarse)|
|Ideal para|Sistemas grandes, escalables|Sistemas embebidos, recursos fijos|

---

# Cola de prioridad mixta

Una **cola de prioridad mixta** combina prioridades fijas (estáticas) con subcolas implementadas dinámicamente mediante listas enlazadas. Este enfoque es eficiente cuando el número de prioridades es conocido de antemano, pero se requiere flexibilidad en la cantidad de elementos por prioridad.

---
## Estructura de datos (Mixta)

```c
#define MAX_PRIORITIES 3
#define LNULL NULL

typedef unsigned char tPriority;
typedef struct tNodeQ *tPosQ;

typedef struct tNodeQ {
    tItemQ item;
    tPosQ next;
} tNodeQ;

typedef struct {
    tPosQ front;
    tPosQ rear;
} tQueue;

typedef struct {
    tQueue levels[MAX_PRIORITIES];
} tQueueP;
```

---

## Especificación del TAD Cola de Prioridad Mixta

```c
void createEmptyQueueP(tQueueP *queueP);
bool enqueueP(tItemQ item, tPriority prio, tQueueP *queueP);
void dequeueP(tQueueP *queueP);
tItemQ frontP(tQueueP queueP);
bool isEmptyQueueP(tQueueP queueP);
```

---

## Implementación

```c
void createEmptyQueueP(tQueueP *queueP) {
    for (int i = 0; i < MAX_PRIORITIES; i++) {
        queueP->levels[i].front = LNULL;
        queueP->levels[i].rear = LNULL;
    }
}

bool enqueueP(tItemQ item, tPriority prio, tQueueP *queueP) {
    if (prio >= MAX_PRIORITIES) return false;
    return enqueue(item, &queueP->levels[prio]);
}

void dequeueP(tQueueP *queueP) {
    for (int i = MAX_PRIORITIES - 1; i >= 0; i--) {
        if (!isEmptyQueue(queueP->levels[i])) {
            dequeue(&queueP->levels[i]);
            break;
        }
    }
}

tItemQ frontP(tQueueP queueP) {
    for (int i = MAX_PRIORITIES - 1; i >= 0; i--) {
        if (!isEmptyQueue(queueP.levels[i]))
            return front(queueP.levels[i]);
    }
}

bool isEmptyQueueP(tQueueP queueP) {
    for (int i = 0; i < MAX_PRIORITIES; i++) {
        if (!isEmptyQueue(queueP.levels[i])) return false;
    }
    return true;
}
```

---
## Ventajas del enfoque mixto

- Estructura simple y eficiente si las prioridades son fijas.
- Evita recorrer listas para insertar nuevas prioridades.
- Colas dinámicas permiten crecer sin límite artificial.
- Apta para sistemas en tiempo real con prioridades predefinidas