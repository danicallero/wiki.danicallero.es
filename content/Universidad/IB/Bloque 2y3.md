---
title: Sistemas Operativos y Modelo Relacional
tags:
  - Universidad
  - Informática-Básica
date: 2025-06-10
aliases: 
draft: false
---
# Bloque 2: Sistemas Operativos

### Introducción a los Sistemas Operativos

#### Arquitectura básica del computador

La **máquina desnuda** (Hardware) es un ordenador carente de sistema operativo. Solo es el hardware, sin ningún software instalado. Por sí mismo no hace "nada". El hardware por sí mismo solo es capaz de ejecutar programas en código máquina (secuencias de instrucciones en lenguaje máquina). Un programador tendría que programar "TODO" (gestión de la CPU, memoria, I/O, etc.).

**Ejecución de un programa en código máquina (Ciclo de instrucción básico)**:

1. Leer la siguiente instrucción del programa.
2. Interpretar la instrucción leída.
3. Leer los operandos de la memoria principal.
4. Ejecutar la instrucción.
5. Almacenar el resultado de la instrucción.
6. Volver al paso 1.

#### Necesidad de un Sistema Operativo

Los usuarios y las aplicaciones necesitan un entorno más amigable y eficiente que la máquina desnuda. El Sistema Operativo (SO) proporciona funcionalidades clave:

- **Entorno de trabajo**: Un entorno donde lanzar programas (gestión de procesos), manejar ficheros (gestión de almacenamiento secundario), etc.
- **Multiprocesos y compartición de recursos**: Ejecutar varios procesos de forma simultánea, que tienen que compartir los recursos del computador (memoria, CPU, sistema de ficheros, etc.). Esto implica gestión de:
    - Procesos (creación, planificación, terminación).
    - Memoria (asignación, protección).
    - Protección (aislamiento entre procesos).
    - Almacenamiento secundario (gestión de discos y archivos).
    - Sincronización (coordinación entre procesos).
- **Múltiples usuarios**: Permitir que múltiples usuarios utilicen el sistema, posiblemente de forma concurrente (gestión de seguridad y recursos compartidos).
- **Programación de alto nivel**: Facilitar la escritura de programas en lenguajes de alto nivel sin necesidad de interactuar directamente con el hardware.

### Funciones básicas de un Sistema Operativo

Un Sistema Operativo es un conjunto de programas que gestionan los recursos de hardware y software de un computador. Sus funciones principales incluyen:

1. **Gestión de procesos**:
    
    - **Planificación**: Decidir qué proceso se ejecuta en la CPU y por cuánto tiempo.
    - **Creación y eliminación**: Gestionar el ciclo de vida de los procesos.
    - **Sincronización**: Coordinar la ejecución de procesos que comparten recursos.
    - **Comunicación entre procesos (IPC)**: Facilitar que los procesos intercambien información.
    - **Manejo de estados**: Mantener el estado de cada proceso (ej. listo, ejecutándose, bloqueado).
2. **Gestión de memoria**:
    
    - **Asignación y liberación**: Decidir qué procesos obtienen memoria y cuánta.
    - **Protección**: Asegurar que un proceso no acceda a la memoria de otro.
    - **Espacio de direcciones virtual**: Proporcionar a cada proceso una visión privada de la memoria, independientemente de la memoria física disponible.
    - **Paginación/Segmentación**: Técnicas para organizar la memoria.
3. **Gestión de almacenamiento secundario (Sistema de ficheros)**:
    
    - **Archivos**: Abstracción para almacenar datos en dispositivos de almacenamiento persistente.
    - **Directorios**: Estructuras para organizar los archivos.
    - **Gestión del espacio libre**: Mantener un registro de los bloques de disco disponibles.
    - **Asignación de espacio**: Decidir dónde almacenar los archivos.
    - **Acceso**: Proporcionar mecanismos para leer y escribir archivos.
    - **Protección**: Controlar los permisos de acceso a archivos y directorios.
4. **Gestión de entrada/salida (E/S)**:
    
    - **Controladores de dispositivo**: Software que interactúa con el hardware de E/S.
    - **Planificación de E/S**: Optimizar el orden de las operaciones de E/S.
    - **Manejo de interrupciones**: Responder a eventos generados por los dispositivos.
    - **Buffers/Cachés**: Mejorar el rendimiento de E/S.
5. **Gestión de usuarios y seguridad**:
    
    - **Cuentas de usuario**: Gestionar usuarios, grupos y sus permisos.
    - **Autenticación y autorización**: Verificar la identidad de los usuarios y sus derechos de acceso.
    - **Protección del sistema**: Aislar los procesos y recursos para evitar interferencias maliciosas.
6. **Gestión de la red**:
    
    - **Protocolos de red**: Implementar los protocolos de comunicación (ej. TCP/IP).
    - **Conexiones**: Gestionar las conexiones de red.
    - **Servicios de red**: Proporcionar servicios como acceso a la web, correo electrónico, etc.

---
# Bloque 3: Modelo Relacional

### Introducción a las Bases de Datos

#### Concepto de Base de Datos

Una **Base de Datos (BD)** es un conjunto de datos organizados y relacionados entre sí, que se almacenan de forma persistente y que pueden ser compartidos por diferentes usuarios y aplicaciones de manera controlada.

#### Características de una BD

- **Persistencia**: Los datos permanecen almacenados incluso después de que los programas que los usaron terminen su ejecución.
- **Compartición**: Múltiples usuarios y aplicaciones pueden acceder y utilizar los mismos datos simultáneamente.
- **Integridad**: Los datos son correctos y consistentes. Se definen reglas y restricciones para asegurar la validez de los datos.
- **Seguridad**: Se establecen mecanismos para controlar el acceso a los datos, protegiéndolos contra accesos no autorizados o modificaciones incorrectas.
- **Redundancia controlada**: Se busca minimizar la duplicidad de datos para evitar inconsistencias, pero se permite cierta redundancia controlada para mejorar el rendimiento.
- **Independencia de los datos**: La estructura de los datos puede modificarse sin afectar a las aplicaciones que los utilizan.

#### Sistemas Gestores de Bases de Datos (SGBD)

Un **SGBD** es un software que permite a los usuarios definir, crear, mantener y controlar el acceso a una base de datos. Actúa como una interfaz entre las aplicaciones y los datos.

- **Funciones de un SGBD**:
    - **Definición de datos (DDL)**: Permite definir la estructura de la base de datos (tablas, campos, tipos de datos, restricciones).
    - **Manipulación de datos (DML)**: Permite insertar, actualizar, eliminar y consultar datos.
    - **Control de concurrencia**: Gestiona el acceso simultáneo de múltiples usuarios para evitar conflictos.
    - **Recuperación y respaldo**: Permite restaurar la base de datos a un estado consistente en caso de fallos.
    - **Seguridad**: Implementa los mecanismos de autenticación y autorización.

### El Modelo Relacional: Estructura

#### Definición "informal"

Este modelo establece la relación como la estructura fundamental para almacenar los datos de la BD.

Una relación es un concepto matemático. El modelo relacional es un modelo formal.

Informalmente, podemos ver una relación como una tabla (aunque NO ES LO MISMO matemáticamente, es una buena analogía).

Una base de datos relacional consiste en un **conjunto de relaciones (tablas) vinculadas entre sí**.

#### Si vemos una relación como una tabla...

- **Cada tabla** almacena datos de **entidades del mundo real**, todas del mismo tipo y con propiedades comunes. Entidades de tipos diferentes están en tablas diferentes.
    - **Ejemplo**: tabla `Estudiantes`, tabla `Docentes`, tabla `Materias`.
- **Cada fila de una tabla** representa hechos que se corresponden con una entidad del mundo real.
    - **Ejemplo**: En la tabla `Estudiantes`, cada fila es un estudiante.
- **Cada columna** representa una **propiedad común** a todas las entidades del mismo tipo.
    - **Ejemplo**: En la tabla `Estudiantes`: `dni`, `nombre`, `dirección`, `teléfono`.
- El nombre de la tabla y los nombres de las columnas ayudan a interpretar el significado de los valores que están en cada1 fila.

#### Conceptos formales (equivalencias a la "tabla")

- Una fila en realidad es una **tupla**.
- El nombre de una columna en realidad es un **atributo**.
- La tabla en realidad es una **relación**.
- Las filas de una tabla son **registros** o **ocurrencias**.
- Las columnas de una tabla son **campos**.

#### Propiedades formales de una relación (tabla)

1. **No hay tuplas (filas) duplicadas**: Cada tupla es única (implica la existencia de una clave).
2. **El orden de las tuplas (filas) no es significativo**: Las filas pueden mostrarse en cualquier orden.
3. **El orden de los atributos (columnas) no es significativo**: El orden de las columnas no afecta al significado de los datos.
4. **Todos los valores de un atributo (columna) son del mismo tipo de dato**: Cada columna tiene un dominio (tipo de dato) definido.
5. **Cada atributo (columna) tiene un nombre único en la relación**: No puede haber dos columnas con el mismo nombre en la misma tabla.
6. **Todos los valores de un atributo son atómicos**: No se permiten grupos repetitivos ni valores multivaluados (primera forma normal).

### Claves en el Modelo Relacional

#### Clave Primaria (Primary Key, PK)

- Uno o más atributos (columnas) que identifican de forma **única** a cada tupla (fila) en una relación.
- **Propiedades**:
    - **Unicidad**: No puede haber dos tuplas con el mismo valor para la clave primaria.
    - **No nulidad**: Ningún componente de la clave primaria puede tener valor nulo (vacío).
    - **Minimalidad**: No se pueden quitar atributos de la clave sin perder la unicidad.
- Una relación solo puede tener **una** clave primaria.

#### Clave Candidata

- Cualquier conjunto de atributos que puede servir como clave primaria (cumple unicidad y minimalidad).
- Entre todas las claves candidatas, se elige una como clave primaria.

#### Clave Foránea (Foreign Key, FK)

- Uno o más atributos en una relación que hacen referencia a la clave primaria (o a otra clave candidata) de **otra relación** (o de la misma relación).
    
- Establece un vínculo o relación entre las tablas.
    
- **Referencia a la clave primaria**: El valor de la clave foránea debe existir como valor de la clave primaria en la tabla a la que referencia, o ser NULL (si se permite).
    
- **Integridad referencial**: Es la regla que asegura que toda clave foránea en una tabla hace referencia a una fila existente en la tabla primaria.
    
    - **Ejemplo**:
        - Tabla `Estudiantes`: `(ID_Estudiante (PK), Nombre, ID_Carrera (FK))`
        - Tabla `Carreras`: `(ID_Carrera (PK), Nombre_Carrera)`
        - La `ID_Carrera` en `Estudiantes` es una clave foránea que referencia a `ID_Carrera` en `Carreras`. Esto asegura que cada estudiante esté asociado a una carrera válida existente.

### Álgebra Relacional

El Álgebra Relacional es un lenguaje de consulta formal y procedimental. Opera sobre relaciones (tablas) y produce nuevas relaciones. Es la base teórica de SQL.

#### Operadores Fundamentales

1. **Selección (σ)**:
    
    - Filtra tuplas (filas) de una relación que satisfacen una condición.
    - Símbolo: σcondicioˊn​(R)
    - **Ejemplo**: Seleccionar estudiantes mayores de 18 años de la tabla `Estudiantes`. σEdad>18​(Estudiantes)
2. **Proyección (π)**:
    
    - Selecciona un subconjunto de atributos (columnas) de una relación.
    - Símbolo: πlista de atributos​(R)
    - **Ejemplo**: Obtener solo el `Nombre` y `Edad` de la tabla `Estudiantes`. πNombre, Edad​(Estudiantes)
3. **Unión (∪)**:
    
    - Combina tuplas de dos relaciones. Ambas relaciones deben tener el mismo número de atributos y los atributos correspondientes deben ser del mismo dominio.
    - Símbolo: R∪S
    - **Ejemplo**: Obtener la lista de `Nombres` de `Estudiantes` y `Docentes`. πNombre​(Estudiantes)∪πNombre​(Docentes)
4. **Intersección (∩)**:
    
    - Devuelve las tuplas que están presentes en ambas relaciones. Las relaciones deben ser "compatibles por unión".
    - Símbolo: R∩S
5. **Diferencia (− )**:
    
    - Devuelve las tuplas que están en la primera relación pero no en la segunda. Las relaciones deben ser "compatibles por unión".
    - Símbolo: R−S
6. **Producto Cartesiano (×)**:
    
    - Combina cada tupla de la primera relación con cada tupla de la segunda relación. Resulta en una relación con todos los atributos de ambas y un número de tuplas igual al producto del número de tuplas de ambas.
    - Símbolo: R×S
    - **Ejemplo**: Combinar cada estudiante con cada carrera (útil como paso intermedio para otras operaciones). Estudiantes×Carreras
7. **Renombrado (ρ)**:
    
    - Permite cambiar el nombre de una relación o de sus atributos.
    - Símbolo: $\rho_{\text{nuevo_nombre(nuevos_atributos)}}(R)$
    - **Ejemplo**: Renombrar la tabla `Estudiantes` a `Alumnos` y sus atributos. ρAlumnos(ID, NombreCompleto)​(Estudiantes)

#### Operadores Derivados

1. **JOIN (Reunión)**:
    
    - Combina tuplas de dos relaciones basándose en una condición de igualdad entre sus atributos relacionados (generalmente claves foráneas y primarias). Es el operador más utilizado para combinar información de diferentes tablas.
        
    - **Natural Join (⋈)**: Une las tuplas basándose en los atributos con el mismo nombre y dominio, y elimina las columnas duplicadas.
        
        - **Ejemplo**: Unir `Estudiantes` con `Carreras` donde `ID_Carrera` sea igual. Estudiantes⋈Carreras
    - **Theta Join (⋈θ​)**: Une las tuplas basándose en cualquier condición θ.
        
        - **Ejemplo**: Estudiantes y Docentes donde la edad del estudiante sea mayor que la edad del docente. Estudiantes⋈Estudiantes.Edad>Docentes.Edad​Docentes
2. **División (÷)**:
    
    - Opera sobre dos relaciones y devuelve las tuplas de la primera que están "relacionadas" con todas las tuplas de la segunda. Útil para consultas del tipo "encuentra X que ha hecho Y de todo lo posible".
3. **Agregación (G)**:
    
    - Permite realizar cálculos sobre grupos de tuplas (SUM, AVG, COUNT, MIN, MAX).
    - **Ejemplo**: Calcular la edad media de los estudiantes por carrera. 
      $$ \mathcal{G}_{\text{ID\_Carrera}, \text{AVG(Edad)}}(\text{Estudiantes}) $$

#### Ventajas del Modelo Relacional

- **Simplicidad**: El modelo se basa en el concepto intuitivo de tablas.
- **Fundamentación matemática**: Se apoya en una base matemática formal (Álgebra Relacional, Cálculo Relacional).
- **Flexibilidad**: Facilita el diseño de BD de forma sencilla en la mayoría de los dominios.