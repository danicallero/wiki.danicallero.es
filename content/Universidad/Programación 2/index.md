---
title: Programación 2
tags:
  - Programación-2
  - Universidad
date: 2025-05-10
---
# Overview
Programación II –Pro 2 para los amigos– se basa en la programación con estructuras de datos dinámicas, enfocadas desde el punto de vista de los **Tipos Abstractos de Datos** *(TAD)*. Evidentemente, está altamente relacionada con la asignatura Programación I, pero –aunque oficialmente es lo que pone en la guía docente– la relación que pueda tener con Matemáticas Discretas es ligera, siendo generosos.

Si ya estás familiarizado con estructuras como arrays, Programación II te lleva un paso más allá, enseñándote a trabajar con listas enlazadas, pilas, colas, árboles... y a gestionarlo todo **dinámicamente** con punteros y memoria.

# ¿Qué se estudia?
- **Gestión dinámica de memoria**: cómo reservar, liberar y manipular memoria con punteros.
- **Abstracción y TAD**: entender estructuras como conceptos independientes de su [implementación](tags/Implementaciones).
- **[[Lista|Listas]]**: simples, dobles, ordenadas, multilistas...
- **[[Pila|Pilas]] y [[Cola|colas]]**: sus variantes, implementaciones y usos.
- **[[Universidad/Programación-2/Árboles-binarios|Árboles]]**: desde los binarios básicos hasta los árboles AVL.

Además de verlo desde la teoría, la mayoría de estos conceptos también se implementarán en lenguajes como **C**.

>[!ojo] ¡Ojo!
>Aunque la asignatura sea de "formación básica", nadie te va a explicar las bases de C, cómo abordar un proyecto desde cero, cómo usar un sistema de control de versiones o qué se consideran buenas (o malas) prácticas.
>
></br>La asignatura implica un salto importante respecto a Programación I. Muchos estudiantes que llegaron a la facultad sin haber escrito una línea de código en su vida aún están aterrizando conceptos básicos como qué es una función o cómo organizar un programa más allá del `main`, y en Pro 2 se espera que –sin ninguna explicación– entiendan de primeras la relación entre programas dentro de un repositorio.

# Consejos
Por si te lo estabas preguntando, claro que es posible sobrevivir a Pro 2, incluso teniendo Pro 1 suspensa, pero es una asignatura que debes coger con ganas desde el principio; si fallas en los conceptos básicos, cada vez te será más difícil ponerte.

>[!tip] Consejos para sobrevivir a Pro 2
>
>- **Domina bien los punteros desde el principio**: aunque se vieron por encima en Pro 1, ahora es muy importante entender qué es un puntero, cómo se declara, asigna y manipula. Todos los TADs requieren algún grado de gestión de punteros.
></br>
>- **Gestiona la memoria con cabeza**: cuando utilices estructuras dinámicas, recuerda que cada `malloc` debe tener su correspondiente `free`. Olvidar liberar memoria provoca fugas y es un error que en muchos casos tendrás que identificar sin ayuda de ningún analizador de código.
></br>
>- **Haz uso del control de versiones desde la primera entrega**: aunque nadie te lo enseñe en clase –ni forme parte del temario, usar Git te salvará cuando, inevitablemente, al arreglar un fallo rompas otras partes del código y necesites consultar la anterior iteración del código.
></br>
>- **Ojo con la modularidad**: escribe funciones pequeñas y modulares para cada estructura o funcionalidad. Así es más fácil entender y depurar el código. Una buena forma de pensar en la modularidad de funciones es que cada función debe servir un único propósito, y acciones que se reutilicen entre funciones pueden formar su propia función auxiliar.  Además, esto es algo que se pide en las prácticas.
></br>
>- **Aprende a usar el debugger**: el mayor aprendizaje que te puedes llevar de Pro 2 es que la programación no es una magia oscura. Cuando pruebes tus programas y se produzca algún runtime error, prueba a utilizar el debugger para ver dónde se rompe el código; desde ahí, utiliza breakpoints en puntos clave para entender cómo se mueve la información dentro de tus funciones, y desde dónde se propaga el error.
></br>
>- **No te frustres si te atascas**: Pro 2 es un salto grande, es normal que cueste. Haz preguntas, a compañeros, profesores y –sobre todo– a ti mismo.

# Materiales
Con la mejor de mis intenciones, he publicado en esta web algunos contenidos que pueden ser de ayuda para seguir mejor la materia. Entre ellos destaco mi [[Universidad/Programación 2/Práctica-2025|práctica]], algunos [[Universidad/Programación-2/Exámenes|exámenes resueltos]], y las [implementaciones](tags/Implementaciones) y [especificaciones](tags/Especificaciones) de los TADs trabajados en clase.

---