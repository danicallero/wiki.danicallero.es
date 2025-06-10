---
title: Representación de la información
tags:
  - Universidad
  - Informática-Básica
date: 2025-06-10
aliases: 
draft: true
---
## Codificación de caracteres

### CÓDIGO ASCII

ASCII (American Standard Code for Information Interchange) es una codificación binaria estándar propuesta en 1963 que utiliza **7 bits** para representar:

- El alfabeto inglés (mayúsculas y minúsculas).
- Cifras numéricas.
- Signos de puntuación.
- Otros símbolos y caracteres de control.

Originalmente, solo permitía la codificación de textos en inglés, por lo que **no incluye soporte para caracteres acentuados** ni muchos otros símbolos (e.g., matemáticos) que son necesarios en otros idiomas.

### ISO 8859
ISO 8859 define un conjunto estándar de **juegos de caracteres de 8 bits** (256 caracteres) para la codificación de textos latinos.

- **Extensión de ASCII**: ISO 8859 incluye a la codificación ASCII en su rango inicial (7 bits, 128 caracteres) y lo extiende con otros 128 caracteres adicionales para mejorar el soporte de otros idiomas.
- **Partes (Tablas)**: Dado que los caracteres extra no son suficientes para todos los idiomas del mundo, se definieron diferentes partes (actualmente 16) para diferentes grupos de idiomas.
    - **Ejemplo**: ISO 8859-1 (Latin-1) permite la codificación de textos en lenguas europeas occidentales, incluyendo soporte para caracteres como `ø, ñ, á, é, í, ó, ú`.
- **Problema de ISO 8859**: Cada una de sus partes define una tabla para un conjunto de lenguas con escrituras semejantes. No ofrece una solución unificada a la codificación de todas las lenguas del mundo. Un texto codificado con una tabla determinada mostrará caracteres diferentes si es reproducido con otra tabla.
    - **Ejemplo**: Un carácter como la 'ñ' puede mostrarse correctamente con ISO 8859-1, pero como un símbolo ilegible en una codificación diferente.

### UNICODE
Unicode es un estándar de codificación de caracteres diseñado para ofrecer una solución unificada y global a la codificación de caracteres. Es un estándar que incluye tanto un conjunto de caracteres como una codificación.

- **Objetivo**: Permite representar textos de cualquier idioma (más de 137.000 caracteres diferentes), símbolos de todo tipo (matemáticos, musicales, etc.) y emojis.
- **Compatibilidad**: Es compatible con ASCII (los primeros 128 caracteres de Unicode son idénticos a los de ASCII).
- **Codificaciones**: Define diferentes formas de codificar los caracteres:
    - **UTF-8**: Es la codificación más utilizada en la web y en muchos sistemas operativos.
        - Utiliza **entre 1 y 4 bytes** por carácter.
        - Es **compatible con ASCII** (los caracteres ASCII de 7 bits se codifican en 1 byte).
        - Es **variable**, lo que significa que el número de bytes por carácter depende del carácter.
        - **Ventaja**: Eficiencia de espacio para textos en inglés (ya que la mayoría de los caracteres se codifican en 1 byte).
    - **UTF-16**: Utiliza **2 o 4 bytes** por carácter.
        - Utilizado internamente por algunos sistemas (ej. Java, Windows).
    - **UTF-32**: Utiliza **4 bytes fijos** por carácter.
        - Menos común en la práctica, ya que consume más espacio.

## Representación de números
### Sistemas de numeración
Los sistemas de numeración se utilizan para representar números. Un sistema de numeración está definido por:
- **Base (b)**: Número de símbolos válidos que utiliza.
- **Símbolos (o dígitos)**: Caracteres utilizados para representar las cantidades.
#### Sistema decimal (base 10)
- Símbolos: {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
- Valor de un número: ∑i=−mn​di​×10i
    - **Ejemplo**: 345.12=3×102+4×101+5×100+1×10−1+2×10−2
#### Sistema binario (base 2)
- Símbolos: {0, 1}
- Es el sistema de representación de datos que usan los ordenadores (bit = Binary Digit).
- Valor de un número: ∑i=−mn​di​×2i
    - **Ejemplo**: 101.112​=1×22+0×21+1×20+1×2−1+1×2−2=4+0+1+0.5+0.25=5.7510​
#### Sistema octal (base 8)
- Símbolos: {0, 1, 2, 3, 4, 5, 6, 7}
- Útil para la representación de números binarios de forma más compacta (3 bits binarios = 1 dígito octal).
    - **Ejemplo**: 7438​=7×82+4×81+3×80=7×64+4×8+3×1=448+32+3=48310​
#### Sistema hexadecimal (base 16)
- Símbolos: {0, 1, ..., 9, A, B, C, D, E, F}
    - Donde A=10, B=11, ..., F=15.
- Muy utilizado en informática para representar números binarios de forma más compacta (4 bits binarios = 1 dígito hexadecimal).
    - **Ejemplo**: 3A416​=3×162+A×161+4×160=3×256+10×16+4×1=768+160+4=93210​
### Conversión entre bases
#### Conversión de base 'b' a base 10
- Se utiliza la fórmula polinómica: ∑i=−mn​di​×bi
    - **Ejemplo**: Convertir 10112​ a decimal. 1×23+0×22+1×21+1×20=8+0+2+1=1110​
#### Conversión de base 10 a base 'b'
- **Parte entera**: Dividir la parte entera sucesivamente por la base 'b' y tomar los restos en orden inverso.
    - **Ejemplo**: Convertir 1310​ a binario. 13÷2=6 (resto 1) 6÷2=3 (resto 0) 3÷2=1 (resto 1) 1÷2=0 (resto 1) Resultado: 11012​
- **Parte fraccionaria**: Multiplicar la parte fraccionaria sucesivamente por la base 'b' y tomar las partes enteras en orden directo.
    - **Ejemplo**: Convertir 0.62510​ a binario. 0.625×2=1.25 (entero 1) 0.25×2=0.50 (entero 0) 0.50×2=1.00 (entero 1) Resultado: 0.1012​
#### Conversión entre binario, octal y hexadecimal
- **Binario a Octal**: Agrupar los bits binarios de 3 en 3 desde el punto decimal hacia la izquierda y hacia la derecha. Convertir cada grupo de 3 bits a su equivalente octal.
    
    - **Ejemplo**: 110101.1012​ 1102​=68​ 1012​=58​ 1012​=58​ Resultado: 65.58​
- **Binario a Hexadecimal**: Agrupar los bits binarios de 4 en 4 desde el punto decimal hacia la izquierda y hacia la derecha. Convertir cada grupo de 4 bits a su equivalente hexadecimal.
    
    - **Ejemplo**: 11101011.01102​ 11102​=E16​ 10112​=B16​ 01102​=616​ Resultado: EB.616​
- **Octal a Binario**: Convertir cada dígito octal a su equivalente binario de 3 bits.
    
    - **Ejemplo**: 728​ 78​=1112​ 28​=0102​ Resultado: 1110102​
- **Hexadecimal a Binario**: Convertir cada dígito hexadecimal a su equivalente binario de 4 bits.
    
    - **Ejemplo**: C516​ C16​=11002​ 516​=01012​ Resultado: 110001012​

---
## Almacenamiento de números enteros
### Números enteros sin signo
- Todos los bits se utilizan para la magnitud del número.
- Si tenemos N bits, el rango de valores es de 0 a 2N−1.
    - **Ejemplo**: Con 8 bits, el rango es de 0 a 28−1=255.
        - Mínimo: 000000002​=010​
        - Máximo: 111111112​=25510​
### Números enteros con signo (Representación en Complemento a 2)

Es el método más común para representar números enteros con signo en sistemas computacionales, ya que simplifica las operaciones aritméticas (suma y resta).
- El bit más significativo (MSB) indica el signo (0 para positivo, 1 para negativo).
- El resto de los bits representan la magnitud (pero codificada de una manera especial para los negativos).

**Rango de valores con N bits**:
- De −(2N−1) a (2N−1−1)
    - **Ejemplo**: Con 8 bits, el rango es de −(28−1) a (28−1−1)=−128 a 127.

**Conversión de decimal a Complemento a 2 (para negativos)**:
1. Convertir el valor absoluto del número a binario.
2. Invertir todos los bits (cambiar 0s por 1s y 1s por 0s). Esto se conoce como complemento a 1.
3. Sumar 1 al resultado.
    - **Ejemplo**: Representar −510​ en 8 bits en Complemento a 2.
        1. 510​=000001012​
        2. Invertir bits: 111110102​ (Complemento a 1)
        3. Sumar 1: 111110102​+1=111110112​ Así, −510​ se representa como 111110112​ en Complemento a 2 de 8 bits.

**Suma en Complemento a 2**:
La suma se realiza directamente, ignorando cualquier acarreo final.
- **Ejemplo**: Sumar 5+(−5) en 8 bits (Complemento a 2). 510​=000001012​ −510​=111110112​

    ```
      00000101  (5)
    + 11111011  (-5)
    ----------
    1 00000000  (0, el acarreo se ignora)
    ```

>[!todo] El resultado es 000000002​=010​, lo que es correcto.

## Almacenamiento de números reales (coma flotante) –_float_

Los números reales se almacenan en formato de coma flotante, siguiendo el estándar IEEE 754. Este estándar define cómo representar números reales en binario, similar a la notación científica.
### Formato de un número en coma flotante (IEEE 754)
Un número se representa como:
(−1)sign×mantisa×2exponente

- **Signo (1 bit)**:
    - 0 para números positivos.
    - 1 para números negativos.
- **Exponente (varios bits)**:
    - Se representa en **exceso a 2k−1−1** (donde `k` es el número de bits del exponente). Esto permite representar exponentes tanto positivos como negativos sin necesidad de un bit de signo adicional.
    - La notación en exceso (o "polarizada") implica que se le suma un "sesgo" (bias) al exponente real.
    - **Ejemplo**: Para un exponente de 8 bits (como en el formato de precisión simple), el bias es 28−1−1=127. Si el exponente almacenado es E′, el exponente real es E=E′−127.
- **Mantisa (varios bits)**:
    - Representa las cifras significativas del número.
    - Se asume que el bit más significativo (el "1" implícito) no se almacena para ganar precisión. Esto es posible porque en la notación científica binaria normalizada, siempre el primer bit de la mantisa es un '1'.
    - Por lo tanto, la mantisa almacenada es en realidad la parte fraccionaria de la mantisa normalizada.

### Formatos IEEE 754 comunes
#### Precisión simple (32 bits)
- **Signo**: 1 bit
- **Exponente**: 8 bits (bias = 127)
- **Mantisa**: 23 bits (con un 1 implícito al principio)
- **Rango aproximado**: ±10−38 a ±1038

#### Precisión doble (64 bits)
- **Signo**: 1 bit
- **Exponente**: 11 bits (bias = 1023)
- **Mantisa**: 52 bits (con un 1 implícito al principio)
- **Rango aproximado**: ±10−308 a ±10308

Ejemplo de conversión de decimal a IEEE 754 (simplificado):

Convertir 5.7510​ a formato IEEE 754 de precisión simple.
1. **Signo**: Positivo, S = 0.
2. **Convertir a binario**: 5.7510​=101.112​.
3. **Normalizar**: Mover el punto decimal hasta tener solo un 1 a la izquierda. 101.112​=1.01112​×22 El exponente real es 2.
4. **Calcular el exponente almacenado**: Exponente real + bias = 2+127=12910​. 12910​=100000012​ (en 8 bits).
5. **Obtener la mantisa**: La mantisa es la parte fraccionaria después del 1 implícito. Mantisa = `0111` (completar con ceros hasta 23 bits si es necesario, `01110000000000000000000`).

>[!todo] Resultado (concatenando signo, exponente y mantisa):
>
>0 10000001 01110000000000000000000

---
## Compresión de datos
La compresión de datos es un proceso para reducir el tamaño de los datos, eliminando redundancias para ahorrar espacio de almacenamiento y ancho de banda en la transmisión.
### Compresión sin pérdida (Lossless)
- Permite reconstruir los datos originales exactamente igual, sin ninguna pérdida de información.
- Ideal para datos donde la fidelidad es crítica (ej. documentos de texto, código fuente, bases de datos).
- **Algoritmos/Técnicas**:
    - **RLE (Run-Length Encoding)**: Sustituye secuencias repetidas de un mismo carácter por una única ocurrencia del carácter y el número de veces que se repite.
        - **Ejemplo**: `AAAAABBCDDD` se convierte en `A5B2CD3`.
    - **Codificación Huffman**: Asigna códigos de longitud variable a los símbolos, donde los símbolos más frecuentes tienen códigos más cortos.
        - **Ejemplo**: Si 'A' es muy frecuente, podría tener un código "0", mientras que 'Z' poco frecuente podría ser "1101".
    - **LZW (Lempel-Ziv-Welch)**: Construye un diccionario de secuencias de datos repetidas y las sustituye por referencias a ese diccionario.
        - Utilizado en formatos como GIF, TIFF y PDF.
    - **LZ77/LZ78 (Lempel-Ziv)**: Algoritmos base para muchos compresores como Zip, gzip. Buscan secuencias repetidas en una "ventana deslizante" del texto ya procesado.

### Compresión con pérdida (Lossy)
- Elimina cierta cantidad de información para lograr una mayor reducción de tamaño. La información eliminada se considera "menos importante" o imperceptible para el usuario.
- Ideal para datos multimedia donde una pequeña pérdida de calidad es aceptable a cambio de un archivo mucho más pequeño (ej. imágenes, audio, video).
- **Algoritmos/Técnicas**:
    - **DCT (Discrete Cosine Transform)**: Utilizado en JPEG (imágenes) y MPEG (video). Transforma los datos espaciales en componentes de frecuencia, permitiendo descartar las frecuencias menos perceptibles.
    - **Cuantificación**: Reduce la cantidad de información para cada valor de color o amplitud de sonido.
    - **Compresión de Audio (ej. MP3)**: Utiliza modelos psicoacústicos para eliminar sonidos que el oído humano no puede percibir o que son enmascarados por otros sonidos.
        - **Ejemplo**: En un archivo de música, se pueden eliminar frecuencias muy altas o muy bajas, o sonidos que están enmascarados por un sonido más fuerte.
    - **Compresión de Video (ej. MPEG, H.264)**: Además de la compresión de imágenes, utiliza técnicas de redundancia temporal (inter-frame coding) para almacenar solo los cambios entre fotogramas consecutivos.
        - **Ejemplo**: Si un objeto no se mueve en el video, solo se almacena su posición y contenido una vez, y para los fotogramas siguientes solo se registra "no cambió".
### Entropía de la información
- **Definición**: La entropía es una medida de la incertidumbre o la cantidad de información que contiene una fuente de datos. Cuanto mayor es la entropía, más impredecible (y, por tanto, más "informativa") es la fuente, y más difícil será comprimirla.
- **Fórmula de Shannon**: H(X)=−∑i​P(xi​)log2​P(xi​)
    - Donde P(xi​) es la probabilidad de ocurrencia del símbolo xi​.
- **Límite Teórico de Compresión**: La entropía establece el límite inferior teórico para la longitud media de bits por símbolo que se puede lograr mediante una compresión sin pérdida. Un código no puede ser más corto que la entropía de la fuente.
    - **Ejemplo**: Si una fuente tiene una entropía de 1.8334 bits/símbolo, un código de Huffman para esa fuente (que en el ejemplo del PDF tiene una longitud media de 1.86 bits/símbolo) está muy cerca del límite teórico, solo superándolo en 0.0266 bits/símbolo.
    - **Caso particular**: Si todos los símbolos son equiprobables (misma probabilidad), la entropía es máxima y la compresión es menos efectiva. Si solo hay un símbolo con probabilidad 1 y el resto 0, la entropía es 0 (no hay información).
        - **Ejemplo**: Una fuente con 2L símbolos equiprobables (probabilidad 1/2L) tiene una entropía de L bits/símbolo, lo que significa que el mejor código posible es simplemente un código de longitud fija de L bits.

---

---

Ahora, aquí tienes los apuntes mejorados para el Bloque 2 y 3:

# Bloque 2 y 3: Sistemas Operativos y Modelo Relacional

tags:

- Universidad
- Informática-Básica date: 2025-06-10 aliases: draft: false

## Bloque 2: Sistemas Operativos

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

## Bloque 3: Modelo Relacional

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
    - **Ejemplo**: Calcular la edad media de los estudiantes por carrera. $\mathcal{G}_{\text{ID_Carrera}, \text{AVG(Edad)}}(\text{Estudiantes})$

#### Ventajas del Modelo Relacional

- **Simplicidad**: El modelo se basa en el concepto intuitivo de tablas.
- **Fundamentación matemática**: Se apoya en una base matemática formal (Álgebra Relacional, Cálculo Relacional).
- **Flexibilidad**: Facilita el diseño de BD de forma sencilla en la mayoría de los dominios.

---