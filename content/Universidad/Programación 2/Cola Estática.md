---
title: Colas Estáticas
tags:
  - Programación-2
  - Tipos-de-datos
  - Implementaciones
date: 2025-05-08
---
Una **cola estática** es una implementación del TAD [[Cola]] que utiliza un array de tamaño fijo para almacenar sus elementos. Es ideal para ==situaciones donde se conoce de antemano el número máximo de elementos==, como simuladores, colas de impresión y gestión de recursos limitados.

Este tipo de cola es fácil de implementar y muy eficiente en tiempo, pero inflexible en cuanto al tamaño: si se llena, no puede crecer dinámicamente, y si se vacía parcialmente, puede dejar espacio no utilizable. Puede implementarse como

1. [Cola Estática Lineal](Universidad/Programación-2/Cola-Estática#Cola-Estática-Lineal): Inserciones y extracciones se hacen en extremos fijos, pero sin reutilización automática del espacio liberado.
2. [Cola Estática Circular](Universidad/Programación-2/Cola-Estática#Cola-Estática-Circular): Usa el array como un anillo cerrado, y aritmética modular para gestionar los índices y una posición libre para distinguir entre llena y vacía.


---

## Cola Estática Lineal

### Diagrama

```
+----+----+----+----+----+
| a1 | a2 | a3 |    |    |
+----+----+----+----+----+
  ^              ^
front          rear
```

### Estructura

```c
#define QMAX 50
#define QNULL -1

typedef int tItemQ;

typedef struct {
    tItemQ data[QMAX];
    int front;
    int rear;
} tQueue;
```

### Implementación

```c
void createEmptyQueue(tQueue *Q) {
    Q->front = 0;
    Q->rear = QNULL;
}

bool isEmptyQueue(tQueue Q) {
    return Q.rear < Q.front;
}

bool enqueue(tItemQ item, tQueue *Q) {
    if (Q->rear < QMAX - 1) {
        Q->rear++;
        Q->data[Q->rear] = item;
        return true;
    }
    return false;
}

void dequeue(tQueue *Q) {
    if (!isEmptyQueue(*Q)) {
        Q->front++;
    }
}

tItemQ front(tQueue Q) {
    return Q.data[Q.front];
}
```

---
## Cola Estática Circular

### Diagrama circular

```
[ ][a3][a1][a2][ ]
      ^       ^
    front    rear
```

### Estructura

```c
#define QMAX 10

typedef int tItemQ;

typedef struct {
    tItemQ data[QMAX];
    int front;
    int rear;
} tQueue;
```

### Implementación

```c
void createEmptyQueue(tQueue *Q) {
    Q->front = 0;
    Q->rear = QMAX - 1;
}

int addOne(int i) {
    return (i + 1) % QMAX;
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

tItemQ front(tQueue Q) {
    return Q.data[Q.front];
}
```

---
## Balance

| Variante | Ventajas              | Inconvenientes                            |
| -------- | --------------------- | ----------------------------------------- |
| Lineal   | Simple de implementar | Espacio desperdiciado                     |
| Circular | Reutiliza espacio     | Lógica de llenado y vacío menos intuitiva |

---