---
title: Práctica 2025
tags:
  - Programación-2
  - Universidad
  - Prácticas
date: 2025-06-21
draft: true
---
# Plataforma de Subastas de Consolas

Este proyecto forma parte del curso de Programación II del Grado en Ingeniería Informática en la Universidade da Coruña (UDC). Consiste en la implementación de un sistema de gestión de subastas de consolas retro, combinando estructuras dinámicas y estáticas de datos.

El sistema permite registrar consolas, gestionar pujas, adjudicar ventas y generar estadísticas a partir de la información almacenada.

## Funcionalidad principal

- Registro y eliminación de consolas.
- Gestión de pujas mediante una pila por consola.
- Adjudicación automática al mejor postor.
- Generación de informes estadísticos y limpieza de datos no válidos.

## Estructuras de datos

- **Lista dinámica ordenada (`tList`)**: Almacena las consolas activas, ordenadas alfabéticamente por su identificador.
- [[Pilas Estáticas|Pila estática]] (`tStack`)**: Mantiene el historial de pujas de cada consola individualmente.

## Comandos soportados

| Comando | Acción |
|--------|--------|
| `N` | Registra una consola. |
| `D` | Elimina una consola. |
| `B` | Añade una puja. |
| `A` | Adjudica una consola al mejor postor. |
| `S` | Muestra estadísticas. |
| `R` | Elimina consolas sin pujas. |
| `I` | Invalida pujas que incumplen criterios. |

Cada comando sigue un formato específico y puede generar errores si las condiciones de entrada no se cumplen. Se incluyen ejemplos detallados en los comentarios del código.

### `New`
Formato:
```plaintext
New <númeroDeComando> <ConsoleID> <vendedor> <marca> <precio>
```
Errores comunes:
- ID duplicado.
- Cadena inválida o marca desconocida.

Ejemplo de uso:
```plaintext
01 N console1 seller1 sega 150.00
```
Salida esperada:
```plaintext
********************
01 N: console console1 seller seller1 brand sega price 150.00
* New: console console1 seller seller1 brand sega price 150.00
```

### `Delete`
Formato:
```plaintext
Delete <númeroDeComando> <ConsoleID>
```
Errores comunes:
- ID no encontrado.

Ejemplo de uso:
```plaintext
09 D console2
```
Salida esperada:
```plaintext
********************
09 D: console console2
* Delete: console console2 seller user1 brand sega price 120.00 bids 0
```

### `Bid`
Formato:
```plaintext
Bid <númeroDeComando> <ConsoleID> <postor> <nuevoPrecio>
```
Errores comunes:
- Precio menor al actual.
- Postor igual al vendedor o postor actual.
- ID inexistente.

Ejemplo de uso correcto:
```plaintext
09 B console2 bidder1 125.00
```
Salida esperada:
```plaintext
********************
09 B: console console2 bidder bidder1 price 125.00
* Bid: console console2 bidder bidder1 brand sega price 125.00 bids 1
```
Ejemplo con error:
```plaintext
09 B console1 bidder1 120.00
```
Salida esperada:
```plaintext
********************
09 B: console console1 bidder bidder1 price 120.00
+ Error: Bid not possible
```

### `Award`
Formato:
```plaintext
Award <númeroDeComando> <ConsoleID>
```
Errores comunes:
- ID inexistente.
- Pila de pujas vacía.

Ejemplo de uso correcto:
```plaintext
12 A console2
```
Salida esperada:
```plaintext
********************
12 A: console console2
* Award: console console2 bidder bidder1 brand sega price 125.00
```

### `Stats`
Formato:
```plaintext
Stats <númeroDeComando>
```
Errores comunes:
- Lista vacía.

Ejemplo de uso correcto:
```plaintext
04 S
```
Salida esperada:
```plaintext
********************
04 S
Console console1 seller seller1 brand sega price 150.00 bids 0
Console console2 seller seller2 brand nintendo price 120.00 bids 1

Brand     Consoles    Price  Average
Nintendo         1    120.00   120.00
Sega             1    150.00   150.00
Top bid: console console2 seller seller2 brand nintendo price 120.00 bidder bidder1 top price 125.00 increase 4.17%
```

### `Remove`
Formato:
```plaintext
Remove <númeroDeComando>
```
Errores comunes:
- Lista vacía.
- No hay consolas sin pujas.

Ejemplo de uso:
```plaintext
10 R
```
Salida esperada:
```plaintext
********************
10 R
Removing console console1 seller seller1 brand sega price 150.00 bids 0
```

### `InvalidateBids`
Formato:
```plaintext
InvalidateBids <númeroDeComando>
```
Errores comunes:
- Lista vacía.
- Ninguna consola supera el umbral de pujas.

Ejemplo de uso:
```plaintext
11 I
```
Salida esperada:
```plaintext
********************
11 I
* InvalidateBids: console console5 seller seller5 brand sega price 120.00 bids 6 average bids 2.50
```

---

# Estructura del proyecto

- **main.c**: Entrada principal, lógica de procesamiento de los comandos.
- **console_list.c/.h**: Definición e implementación de la [[Listas Dinámicas|lista dinámica]].
- **bid_stack.c/.h**: Definición e implementación de la [[Pilas Estáticas|pila estática]] de pujas.
- **types.c**: Definición de tipos.

# Consideraciones

- El tamaño máximo de la pila está limitado por SMAX.
- Algunas validaciones están intencionalmente omitidas para ceñirse al enfoque de programación contractual exigido por la asignatura (por ejemplo, punteros nulos o inválidos no tratados en el TAD).
- La eliminación de nodos en el TAD sigue el método de aliasing por exigencia del profesorado de la asignatura.

# Autoría

Daniel Callero Costales – hola@danicallero.es

<div align="center">
  Made with ❤️ & C by Daniel Callero
</div>
