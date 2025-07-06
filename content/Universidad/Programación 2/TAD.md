---
title: 1. Tipo Abstracto de Datos
tags:
  - Programación-2
  - Tipos-de-datos
  - Universidad
date: 2025-05-08
---

# Definición
Un **Tipo Abstracto de Datos** *(TAD)* es una estructura lógica que define un conjunto de **valores posibles** y de **operaciones** asociadas que se pueden ejercer sobre estos valores sin especificar cómo están implementados internamente. Es decir, un TAD describe **qué** se puede hacer con ciertos datos, **sin mostrar al usuario** cómo se hace por dentro.

## Abstracción
Utilizar TADs permite programar a un nivel más abstracto. De la misma forma que cuando utilizamos los tipos de datos específicos del lenguaje (`int`, `float`, `char`, `double`...) no tenemos que preocuparnos de cómo funciona su implementación, cuando trabajamos con un TAD no tenemos que preocuparnos en cómo se estructura y comporta la información dentro, de eso se encarga precisamente la capa de abstracción del TAD.

## Elementos necesarios
Un TAD debe tener los siguientes elementos:
- Un conjunto de **valores**.
- Un conjunto de **operaciones asociadas**, que se definen en una **especificación** independiente a la **implementación**.
- Una **interfaz pública** que permite manipular los datos sin acceder directamente a su representación.

>[!info]- ¿Qué es una interfaz pública?
>Si ya has cursado la asignatura de Cálculo, recordarás que en las prácticas de laboratorio que se hacían con Python, teníamos que importar librerías como sympy o numpy. Estas librerías contienen una serie de funciones y tipos de datos que nosotros utilizábamos:
>```python
>import sympy as sp
>
># Variable independiente (declaramos una variable de tipo Symbol)
>t = sp.Symbol ('t')
># Variable dependiente (declaramos una variable de tipo Function)
>v = sp.Function ('v')
># Escribimos la EDO
>eq = sp.Eq(v(t).diff(t), 2748000000*t**3 - 142605000*t**2 + 1610620*t + 79.317)
>```
>```python
>sp.dsolve (eq, ics={v(0): 5.6468}) # Llamamos a la función dsolve
>```
>Luego, cuando llamábamos a la función `dsolve` no teníamos que preocuparnos de cómo soluciona la ecuación sympy, o de otras funciones internas que utilizase la función. Desde nuestro código llamamos a `dsolve` porque forma parte de la interfaz pública de la librería.

## Ejemplo formal
**TAD: Natural**
- **Constructores**:
    - `cero → Natural`
    - `sucesor(Natural) → Natural`

- **Observadores**:
    - `escero(Natural) → Bool`
    - `igual(Natural, Natural) → Bool`

- **Generadoras**:
    - `suma(Natural, Natural) → Natural`

### Tipos de operaciones en un TAD:
1. **Constructoras**: crean nuevos valores del tipo.
2. **Generadoras**: permiten construir todos los valores posibles.
3. **Modificadoras**: cambian un valor existente.
4. **Observadoras**: devuelven información del valor.
5. **Destructoras**: eliminan valores (en algunos lenguajes).