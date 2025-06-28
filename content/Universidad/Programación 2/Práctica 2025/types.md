---
title: types.h
tags:
  - Programación-2
  - Universidad
  - Prácticas
date: 2025-06-21
draft: false
---
```c
#ifndef PRO2_2025_P2_TYPES_H
#define PRO2_2025_P2_TYPES_H


/**
 * @brief Longitud máxima permitida para IDs de usuario y consola (incluyendo null termination).
 */
#define NAME_LENGTH_LIMIT 10

/**
 * @brief Identificador de usuario.
 *
 * Cadena de caracteres de longitud limitada por NAME_LENGTH_LIMIT.
 */
typedef char tUserId[NAME_LENGTH_LIMIT];

/**
 * @brief Identificador de consola.
 *
 * Cadena de caracteres de longitud limitada por NAME_LENGTH_LIMIT.
 */
typedef char tConsoleId[NAME_LENGTH_LIMIT];

/**
 * @brief Marca de la consola.
 *
 * Enumera las marcas posibles de consolas en el sistema.
 */
typedef enum {nintendo, sega} tConsoleBrand;

/**
 * @brief Precio asociado a una consola.
 */
typedef float tConsolePrice;

/**
 * @brief Contador de pujas realizadas.
 */
typedef int tBidCounter;

#endif //PRO2_2025_P2_TYPES_H
```