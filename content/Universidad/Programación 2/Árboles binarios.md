---
title: Árboles binarios
tags:
  - Programación-2
  - Tipos-de-datos
  - Especificaciones
  - Implementaciones
  - Universidad
date: 2025-05-08
---

## 📌 Resumen del TAD ABB

Un ***Árbol Binario de Búsqueda (ABB)*** es una estructura jerárquica que mantiene elementos ordenados según su clave. Cumple:

- Las claves del subárbol izquierdo son menores que la clave del nodo.
- Las claves del subárbol derecho son mayores que la clave del nodo.
- No permite claves duplicadas.

---

## Estructura de datos

```c
typedef struct tNodeBST {
    tKey key;
    struct tNodeBST *left;
    struct tNodeBST *right;
} *tBST;
```

```
        [ key ]
        /     \
   [left]     [right]
```

---

## Especificación:

```c
#define NULLBST NULL //Implementación dinámica  
  
typedef int tKey; //Tipo clave del árbol  
  
typedef struct tNodeBST {  
    tKey key;                  //clave del nodo  
    struct tNodeBST *left;     //subárbol izquierdo  
    struct tNodeBST *right;    //subárbol derecho  
} *tBST; //puntero al nodo raíz del árbol  
  
  
//Generadoras
/**
	@brief Inicializa un árbol vacío
	@param [out] tree Puntero al árbol a inicializar
	@post El árbol queda inicializado como vacío
*/
void createEmptyTree(tBST *tree);  

/**
	@brief Inserta una clave en el árbol si no existe en su lugar correspondiente  
	@param [in,out] tree Puntero al árbol donde se quiere insertar la clave
	@param[in] key Clave que se quiere insertar
	@retval true Se insertó correctamente o ya existía
	@retval false No se realizó la inserción
	@post El árbol incorpora un nuevo nodo si este se ha podido insertar y no existía 
*/
bool insertKey(tBST *tree, tKey key);  
  
//Observadoras  
/**
	@brief Devuelve el subárbol izquierdo.
	@param[in] tree Árbol no vacío.
	@return Subárbol izquierdo, o NULLBST si no existe.
	@pre El árbol no debe ser NULLBST.
*/
tBST leftChild(tBST tree);  

/**
	@brief Devuelve el subárbol derecho.
	@param[in] tree Árbol no vacío.
	@return Subárbol derecho, o NULLBST si no existe.
	@pre El árbol no debe ser NULLBST.
*/ 
tBST rightChild(tBST tree);  

/**
	@brief Devuelve la clave del nodo raíz.
	@param[in] tree Árbol no vacío.
	@return Clave del nodo raíz.
	@pre El árbol debe contener al menos un nodo.
*/
tKey root(tBST tree);  

/**
	@brief Comprueba si el árbol está vacío.
	@param[in] tree Árbol a evaluar.
	@retval true Si es NULLBST.
	@retval false Si contiene al menos un nodo.
*/
bool isEmptyTree(tBST tree);  

/**
	@brief Busca una clave en el árbol.
	@param[in] tree Árbol donde buscar.
	@param[in] key Clave a localizar.
	@return Subárbol cuya raíz contiene la clave, o NULLBST si no se encuentra.
*/
tBST findKey(tBST tree, tKey key);  
  
// Destructoras  
  
/**
	@brief Elimina un nodo del árbol si contiene la clave.
	@param[in,out] tree Puntero al árbol.
	@param[in] key Clave a eliminar.
	@retval true Si se eliminó con éxito.
	@retval false Si la clave no estaba en el árbol.
	@post El árbol no contiene la clave eliminada.
*/ 
bool removeKey(tKey key, tBST *tree);  
```

---

## Implementación
```c
void createEmptyTree(tBST *tree) {  
    *tree = NULLBST;  
}  
  
static bool createBSTNode(tBST *node, tKey key) {  
    *node = malloc(sizeof(struct tNodeBST));  
    if (*node!=NULLBST)  
    {  
        (*node)->key = key;  
        (*node)->left = NULLBST;  
        (*node)->right = NULLBST;  
    }  
    return *node!=NULLBST;  
}  

bool insertKey(tBST *tree, tKey key) {  
    if (isEmptyTree(*tree)) {     //caso raíz: el árbol está vacío  
        return createBSTNode(tree, key);  
    }  
    if (key < (*tree)->key) {   //caso subárbol izquierdo: la clave es menor  
        return insertKey(&(*tree)->left, key);  
    }  
    if (key > (*tree)->key) {   //caso subárbol derecho: la clave es mayor  
        return insertKey(&(*tree)->right, key);  
    }  
    if (key == (*tree)->key) {  // caso clave duplicada  
        return true;  
    }  
}  

tBST findKey(tBST tree, tKey key) {  
    if (isEmptyTree(tree)) {  
        return NULLBST; // caso árbol vacío  
    } else if (key == tree->key) {  
        return tree; // caso raíz: clave encontrada  
    } else if (key < tree->key) {  
        return findKey(tree->left, key); // caso subárbol izquierdo  
    } else {  
        return findKey(tree->right, key); // caso subárbol derecho  
    }  
}  

tBST leftChild(tBST tree) {  
    return tree->left; // subárbol izquierdo  
}  

tBST rightChild(tBST tree) {  
    return tree->right; // subárbol derecho  
}  

tKey root(tBST tree) {  
    return tree->key; // valor de la raíz  
}

bool isEmptyTree(tBST tree) {  
    return tree == NULLBST;  
}

// Busca el nodo con la menor clave en el subárbol  
static tBST findMin(tBST tree) {  
    while (tree->left != NULLBST) {  
        tree = tree->left;  
    }  
    return tree;  
}  

// ¡¡La implementación de remove no se va a pedir en el exámen!!
// Elimina el nodo con la clave indicada  
bool removeKey(tKey key, tBST *tree) {  
    if (*tree == NULLBST) {  
        return false; // caso árbol vacío  
    }  
  
    if (key < (*tree)->key) {  
        return removeKey(key, &(*tree)->left); // caso subárbol izquierdo  
    } else if (key > (*tree)->key) {  
        return removeKey(key, &(*tree)->right); // caso subárbol derecho  
    } else {  
        // caso nodo encontrado  
        tBST temp;  
        if ((*tree)->left == NULLBST) {  
            // caso sin hijo izquierdo  
            temp = *tree;  
            *tree = (*tree)->right;  
            free(temp);  
        } else if ((*tree)->right == NULLBST) {  
            // caso sin hijo derecho  
            temp = *tree;  
            *tree = (*tree)->left;  
            free(temp);  
        } else {  
            // caso dos hijos  
            temp = findMin((*tree)->right);  
            (*tree)->key = temp->key;  
            return removeKey(temp->key, &(*tree)->right);  
        }  
        return true;  
    }  
}
```

---

## Ejemplos de Árboles Binarios

### Inserciones secuenciales

```c
tBST tree;
createEmptyTree(&tree);
insertKey(&tree, 20);
insertKey(&tree, 10);
insertKey(&tree, 30);
```

Árbol resultante:

```
     20
    /  \
  10    30
```

### Búsqueda de clave

```c
if (findKey(tree, 10)) {
    printf("Clave encontrada!\n");
}
```

Resultado:

```
Sí, se encuentra en el subárbol izquierdo del 20.
```

### Eliminación de clave

```c
removeKey(10, &tree);
```

Árbol resultante:

```
     20
       \
        30
```

---

## Inserción, Eliminación y Rotaciones (ABB vs AVL)

### Inserción en ABB

- Si el árbol está vacío, se inserta como raíz.
- Si la clave es menor que la raíz, se inserta en el subárbol izquierdo.
- Si es mayor, en el subárbol derecho.
- Si ya existe, no se hace nada.

### Eliminación en ABB
#### 1. Nodo hoja:
Se elimina directamente.
#### 2. Nodo con un hijo:
Se reemplaza el nodo con su único hijo.
#### 3. Nodo con dos hijos:
Se reemplaza la clave por la del menor de su subárbol derecho (o mayor del izquierdo) y se elimina ese nodo.

### Rotaciones en AVL (para mantener equilibrio)

Cuando un ABB se desequilibra al insertar o eliminar, un árbol ***AVL** aplica rotaciones:
#### Rotaciones simples:
- ***LL (Left-Left)***: desbalanceo por la izquierda del hijo izquierdo.
- ***RR (Right-Right)***: desbalanceo por la derecha del hijo derecho.
#### Rotaciones dobles:
- ***LR (Left-Right)***: desbalanceo por la derecha del hijo izquierdo.
- ***RL (Right-Left)***: desbalanceo por la izquierda del hijo derecho.

### Ejemplo de Rotación LL:

Antes:

```
    30
   /
  20
 /
10
```

Después de rotación LL:

```
    20
   /  \
  10  30
```

### Ejemplo de Rotación RR:

Antes:

```
  10
    \
     20
       \
        30
```

Después de rotación RR:

```
     20
    /  \
  10    30
``` 

---

## 🧹 Ejercicios de eliminación

### Caso 1: Eliminar una hoja

```c
tBST tree;
createEmptyTree(&tree);
insertKey(&tree, 50);
insertKey(&tree, 30);
insertKey(&tree, 70);
insertKey(&tree, 20); // hoja

removeKey(20, &tree);
```

Árbol tras inserciones:

```
      50
     /  \
   30    70
  /
20
```

  

Árbol tras eliminar 20:

```
      50
     /  \
   30    70
```

---

### Caso 2: Eliminar un nodo con un solo hijo

```c
insertKey(&tree, 25); // hijo único de 30

removeKey(30, &tree);
```

Árbol antes:

```
      50
     /  \
   30    70
    \
     25
```

Árbol después:

```

      50
     /  \
   25    70

```

---

### Caso 3: Eliminar un nodo con dos hijos

```c
insertKey(&tree, 60);
insertKey(&tree, 80);

removeKey(70, &tree); //tiene hijos 60 y 80
```

Árbol antes:

```
      50
     /  \
   25    70
         / \
       60   80
```

Árbol después (sucesor 80 reemplaza 70):

```
      50
     /  \
   25    80
         /
       60
```

---

### Caso 4: Eliminar la raíz con dos hijos

```c
removeKey(50, &tree);
```

Árbol antes:

```
      50
     /  \
   25    80
         /
        60
```

Árbol después (sucesor 60 reemplaza 50):

```
      60
     /  \
   25    80
```

---

### Ejemplo de construcción y eliminación:

Insertamos a un árbol: 55, 23, 72, 45, 87, 35, 69, 58, 50, 48.

```
          55
        /    \
      23      72
        \    /  \
        45  69  87
       /  \
     35    50
          /
        48
```

Borramos 55:

```
          55
        /    \
      23      72
        \     / \
        45  69  87
       /  \
     35    50
          /
        48
```
- `55` tiene dos hijos.
- Buscamos el **máximo del subárbol izquierdo**, que es `50`.
- Sustituimos `55` por `50`.
- Luego eliminamos `50` del subárbol izquierdo.

```
          50
        /    \
      23      72
        \     / \
        45  69  87
       /  \
     35    48
```

Borramos 72:

```
          50
        /    \
      23      69
        \       \
        45      87
       /  \
     35    48
```
