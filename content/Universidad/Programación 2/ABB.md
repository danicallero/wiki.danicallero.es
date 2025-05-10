---
title: Árboles Binarios de Búsqueda
tags:
  - Programación-2
  - Tipos-de-datos
  - Especificaciones
  - Implementaciones
  - Universidad
date: 2025-05-10
aliases:
  - árbol de búsqueda
  - árbol binario de búsqueda
  - Árbol Binario de Búsqueda
---
## ¿Qué es un ABB?

Un ***Árbol Binario de Búsqueda (ABB)*** es una estructura jerárquica que mantiene elementos ordenados según su clave. Cumple:

- Las claves del **subárbol izquierdo** son **menores** que la clave del nodo.
- Las claves del **subárbol derecho** son **mayores** que la clave del nodo.
- ==No permite claves duplicadas.==

Esto permite realizar búsquedas, inserciones y eliminaciones de manera eficiente.

---
## Propiedades

- La eficiencia de las operaciones depende de la **altura (h)** del árbol.  
-  En el **mejor caso**, si está equilibrado, las operaciones son **O(log n)**.  
-  En el **peor caso** (árbol degenerado), las operaciones se degradan a **O(n)**.

Un ABB **no garantiza equilibrio**; por eso existen árboles como los AVL que lo corrigen.

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
## Especificación en C

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
## Implementación en C

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

---
```
## Inserción de claves

```
insertKey(&tree, 50);
insertKey(&tree, 30);
insertKey(&tree, 70);
insertKey(&tree, 20);
insertKey(&tree, 40);
insertKey(&tree, 60);
insertKey(&tree, 80);
```

Árbol tras inserciones:
```
      50
    /    \
   30     70
  /  \   /  \
 20  40 60  80
```

Tienes esta construcción paso a paso, además de explicaciones de la eliminación de claves en [[Ejercicios ABB]].

Búsqueda: `findKey(tree, 40)` devuelve el nodo con clave 40.

---
## Eliminación de claves

Tienes una explicación de estos ejemplos en [este](Universidad/Programación-2/Ejercicios-ABB#ejercicio-2-eliminación-de-hojas) enlace.

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
## Observaciones clave

-  Un ABB puede degenerar a lista si las claves se insertan ordenadas.  
- El ABB **no es equilibrado automáticamente**.