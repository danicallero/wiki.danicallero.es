---
title: 4.2 Colas Dinámicas
tags:
  - Programación-2
  - Tipos-de-datos
  - Implementaciones
  - Universidad
date: 2025-05-08
aliases:
  - cola dinámica
---
## Definición
Una **cola dinámica** es una implementación del TAD [[Cola]] que almacena los elementos en una estructura enlazada mediante nodos en memoria dinámica. Esto permite que el tamaño de la cola crezca o disminuya según sea necesario, lo que la hace ideal para aplicaciones con cargas variables o indefinidas.

Aunque ofrece gran flexibilidad, requiere una gestión correcta de memoria (reservar/liberar) y es más compleja de implementar correctamente que su versión estática.

---
## Diagrama de estructura

```
front → [a1] → [a2] → [a3] → NULL
                            ↑
                           rear
```

---

## Estructura de datos no circular

```c
#define QNULL NULL

typedef ... tItemQ;

typedef struct tNodeQ *tPosQ;

struct tNodeQ {
    tItemQ item;
    tPosQ next;
};

typedef struct {
    tPosQ front;
    tPosQ rear;
} tQueue;
```

---
## Implementación no circular

```c
void createEmptyQueue(tQueue *Q) {
    Q->front = QNULL;
    Q->rear = QNULL;
}

bool isEmptyQueue(tQueue Q) {
    return Q.front == QNULL;
}

bool enqueue(tItemQ item, tQueue *Q) {
    tPosQ newNode = malloc(sizeof(struct tNodeQ));
    if (newNode == NULL) return false;
    newNode->item = item;
    newNode->next = QNULL;

    if (isEmptyQueue(*Q)) {
        Q->front = newNode;
    } else {
        Q->rear->next = newNode;
    }
    Q->rear = newNode;
    return true;
}

void dequeue(tQueue *Q) {
    if (!isEmptyQueue(*Q)) {
        tPosQ temp = Q->front;
        Q->front = Q->front->next;
        if (Q->front == QNULL) Q->rear = QNULL;
        free(temp);
    }
}

tItemQ front(tQueue Q) {
    return Q.front->item;
}
```

---
## Balance

|Ventaja|Inconveniente|
|---|---|
|Tamaño flexible|Gestión de memoria compleja|
|Uso eficiente de recursos|Mayor coste computacional que arrays|
|Ideal para crecimiento continuo|Riesgo de fugas si no se libera correctamente|

---
# Cola dinámica circular

Una **cola dinámica circular** es una variante de las colas dinámicas en la que los nodos están enlazados de forma que el último nodo apunta de nuevo al primero, formando un ciclo. Esta estructura mejora la reutilización de memoria y hace eficientes ciertas operaciones como la rotación o ciclos continuos de ejecución.

Se diferencia de la cola dinámica lineal en que:

- No necesita mantener `front` y `rear` por separado, solo el puntero al final (`Q`) es suficiente.
- Se accede al primer elemento mediante `Q->next`.

---

## Diagrama de estructura circular

```
        ┌──────────────┐
        ↓              │
    [a1] → [a2] → [a3] ┘
     ↑                ↓
     └─────── Q ←─────┘
```

---
## Estructura de datos

```c
#define QNULL NULL

typedef int tItemQ;

typedef struct tNodeQ *tPosQ;

struct tNodeQ {
    tItemQ data;
    tPosQ next;
};

typedef tPosQ tQueue;
```

---

## Implementación circular

```c
void createEmptyQueue(tQueue *Q) {
    *Q = QNULL;
}

bool createNode(tPosQ *p) {
    *p = malloc(sizeof(struct tNodeQ));
    return (*p != QNULL);
}

bool isEmptyQueue(tQueue Q) {
    return Q == QNULL;
}

bool enqueue(tItemQ d, tQueue *Q) {
    tPosQ p;
    if (!createNode(&p)) return false;

    p->data = d;
    p->next = QNULL;

    if (isEmptyQueue(*Q)) {
        p->next = p; // circular
    } else {
        p->next = (*Q)->next;
        (*Q)->next = p;
    }
    *Q = p;
    return true;
}

void dequeue(tQueue *Q) {
    tPosQ p;
    if ((*Q)->next == *Q) { // solo un elemento
        *Q = QNULL;
    } else {
        p = (*Q)->next;
        (*Q)->next = p->next;
        free(p);
    }
}

tItemQ front(tQueue Q) {
    return Q->next->data;
}
```

---
## Balance

| Ventaja                                        | Inconveniente                                       |
| ---------------------------------------------- | --------------------------------------------------- |
| Estructura simple (1 puntero)                  | Más difícil de depurar                              |
| Ideal para colas circulares (juegos, procesos) | Requiere lógica especial para detectar estado vacío |
