---
title: 6. Árboles binarios
tags:
  - Programación-2
  - Tipos-de-datos
  - Universidad
date: 2025-05-10
---
## Preámbulo. ¿Qué es un árbol?
Un árbol es una estructura de datos jerárquica compuesta por **nodos**, conectados por relaciones **padre-hijo** (*Parent-Child*) –o **ancestro-descendiente** (*ancestor-descendant*).
### Características básicas
- Tiene un **nodo raíz** (root), que no tiene padre.
- Cada nodo puede tener **cero o más hijos**.
- Cada nodo (excepto la raíz) tiene **exactamente un padre**.

>[!abstract]- Ejemplo de árbol no binario: (irrelevante)
>Si alguna vez has utilizado alguna plataforma como Unity o Roblox Studio, te habrás dado cuenta de que los objetos (como partes, modelos, luces o scripts) están organizados en una especie de lista dentro de otras listas. Eso es lo que llamamos una **estructura jerárquica**, y funciona igual que un **árbol**.
></br>Por ejemplo, en Roblox, el nodo raíz sería `game`, que es el único objeto que podemos invocar sin tener su elemento padre. `game` está formado por diferentes servicios –que serían sus nodos hijo– como `workspace`–que almacena los elementos visibles y accesibles desde el dispositivo del jugador–, ServerScriptService –que almacena los scripts a los que solo el servidor tiene acceso–... y cada uno a su vez tiene como descendientes scripts, carpetas, modelos, texturas, sonidos... Todos los nodos saben quien es su ancestro gracias a la propiedad `.Parent`.
>Ejemplo:
>```lua
>game.ReplicatedStorage.Startup.ShowCandidates.OnServerEvent:Connect(Configure)
>```
>En el ejemplo anterior:
>- Estamos accediendo desde el nodo raíz `game`, bajando por varios **nodos hijo** (`ReplicatedStorage`, luego `Startup`, luego `ShowCandidates`).
>- Finalmente, usamos `.OnServerEvent:Connect(...)` para conectar una función cuando se invoca el evento. 
>Fíjate cómo solo podemos movernos **hacia abajo** (a hijos) si conocemos su nombre, o **hacia arriba** usando `.Parent`, pero **no hay acceso directo entre hermanos** ni entre objetos que no estén relacionados jerárquicamente.
>
>Visualmente, esta relación se vería así:
![[ejemplo árbol.png]]
>
>Otro ejemplo podría ser la creación de una nueva parte:
>```lua
>local newPart = instance.New("Part")
>newPart.Parent = game.workspace
>
>print(newPart.Parent)
>```
>Output: 
>```plaintext
>Workspace
>```
>Al crear el nodo nuevo, debemos asignarle un ancestro modificando su propiedad `Parent`. De lo contrario, dicha parte no será accesible ni desde el servidor ni el cliente. Además, invocar la propiedad `Parent` de un nodo, devuelve el valor de su ancestro.

### Terminología básica

| Término      | Significado                                            |
| ------------ | ------------------------------------------------------ |
| Raíz (root)  | Nodo inicial del árbol                                 |
| Padre        | Nodo que enlaza con otro como descendiente             |
| Hijo (child) | Nodo descendiente de otro                              |
| Hermano      | Nodo que comparte el mismo padre                       |
| Hoja         | Nodo sin hijos                                         |
| Altura       | Longitud del camino más largo desde la raíz a una hoja |
| Nivel        | Distancia desde la raíz al nodo                        |
| Subárbol     | Árbol formado por un nodo y sus descendientes          |

Ejemplo:

```
        A
       / \
      B   C
     / \   \
    D   E   F
```

-  Raíz: A  
-  Hojas: D, E, F  
-  Altura: 2 (camino A → B → D)

---
## Definición de Árbol Binario
Un **árbol binario** no es otra cosa más que un caso particular de los `árboles`, donde cada nodo puede tener un ==máximo de dos== hijos: un hijo izquierdo y otro derecho.

## Tipos de árboles binarios
### Árbol binario lleno (full binary tree)
Un árbol binario lleno es aquel donde **todos los nodos internos tienen exactamente 2 hijos**.

```
      A
    /   \
   B     C
  / \   / \
 D   E F   G
```

---
### Árbol binario completo (complete binary tree)
Un árbol binario completo es aquel donde:
1. Todos los niveles excepto el último están **completamente llenos**.
2. El último nivel está lleno **de izquierda a derecha**.

```
      A
     / \
    B   C
   / \
  D   E
```

Faltan nodos en el último nivel pero están a la izquierda.

---
### Árbol binario perfecto (perfect binary tree)
Un árbol binario perfecto cumple:
1. Todos los nodos internos tienen 2 hijos.
2. Todas las hojas están al **mismo nivel**.

```
      A
    /   \
   B     C
  / \   / \
 D   E F   G
```

---
### Árbol degenerado
Un árbol degenerado es uno donde **cada nodo tiene como máximo un hijo**, así que funciona como una lista enlazada:

```
A
 \
  B
   \
    C
     \
      D
```

Un [[ABB|árbol de búsqueda]] (ABB) con algún subárbol degenerado pierde la ventaja en cuanto a eficiencia de búsqueda que tiene con respecto a las [[Listas Dinámicas|listas enlazadas]] –dinámicas.

---
## Recorridos de un árbol

Un recorrido es una forma sistemática de visitar todos los nodos. Los principales son:
### Preorden
Visita primero la raíz, luego subárbol izquierdo, luego derecho.
```
preorden(nodo):
    si nodo != NULL:
        visitar(nodo)
        preorden(nodo.izq)
        preorden(nodo.der)
```

Ejemplo:
```
    A
   / \
  B   C
 / \
D   E
```

Preorden: A B D E C

---
### Inorden
Visita primero subárbol izquierdo, luego la raíz, luego el derecho.
```
inorden(nodo):
    si nodo != NULL:
        inorden(nodo.izq)
        visitar(nodo)
        inorden(nodo.der)
```

Inorden: D B E A C

---
### Posorden
Visita primero subárbol izquierdo, luego derecho, finalmente la raíz.
```
posorden(nodo):
    si nodo != NULL:
        posorden(nodo.izq)
        posorden(nodo.der)
        visitar(nodo)
```

Posorden: D E B C A

---
### Recorrido por niveles (anchura)
Se recorre el árbol por niveles, primero el nivel 1 –raíz–, hasta llegar al último. Este recorrido, a diferencia de los anteriores, no se realiza de forma recursiva, sino que de forma iterativa, usando una [[Cola|cola]] para visitar nivel por nivel de izquierda a derecha.

```
nivel 1: A
nivel 2: B C
nivel 3: D E
```

Anchura: A B C D E

---
## Aplicaciones de árboles binarios
- Representación de expresiones matemáticas.
- Organigramas jerárquicos.
- Estructuras de directorios de archivos.
- Árboles de sintaxis en compiladores.
- Índices en bases de datos.

---
## Fórmulas y propiedades

| Propiedad               | Fórmula                              |
| ----------------------- | ------------------------------------ |
| Altura ($h$)            | Longitud camino más largo a una hoja |
| Nodos en árbol perfecto | $2^{(h+1)} - 1$                      |
| Hojas en árbol perfecto | $2^h$                                |
 
 Un árbol binario de altura $h$ tiene como máximo $2^h$ nodos en el último nivel.