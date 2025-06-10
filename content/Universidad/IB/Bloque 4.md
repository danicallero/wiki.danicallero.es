---
title: Redes de ordenadores
tags:
  - Universidad
  - Informática-Básica
date: 2025-06-10
aliases: 
draft: true
---
## Conceptos Básicos

### Red de computadores
Una **red informática** es un conjunto de dos o más ordenadores conectados por un medio físico –que puede ser un cable o una conexión inalámbrica– a través de una tarjeta de red, con el objetivo de compartir recursos y/o información.
  - **Esquema de una red**:</br>
  ![[Red_esquema.png|350]]

### Componentes de una red
Una red está formada por distintos dispositivos que colaboran para compartir información entre el emisor y el receptor. Distinguimos entre tres tipos de componentes:

  - Dispositivos finales (*Hosts*): Workstations, servidores, portátiles, PCs de sobremesa, tablets, smartphones.
  - Dispositivos de interconexión, intermedios o elementos activos:
      - Su objetivo es facilitar el envío de información entre origen y destino.
      - *Hubs*, *switches*, *routers*, *firewalls*, puntos de acceso... 
  - Elementos pasivos (medios de transmisión):
      - Cable coaxial, fibra óptica, cable de par trenzado.

-----

### Clasificación de una red por su extensión

  - **PAN (Personal Area Network):** Definidas sobre áreas muy pequeñas. Su objetivo es comunicar dispositivos muy próximos entre ellos. Ej: smartphone. Tecnologías comunes: Bluetooth e infrarrojos.
  - **LAN (Local Area Network):** Cubren áreas relativamente pequeñas como una clase, un edificio, un campus. Tecnologías: Ethernet, WiFi.
  - **MAN (Metropolitan Area Network):** Están definidas sobre áreas similares a una metrópolis. Tecnología: WiMax.
  - **WAN (Wide Area Network):** Cubren áreas muy amplias como regiones, provincias, países o incluso el mundo. Tecnologías:
      - Solo de Acceso: ADSL, cable módem, GPRS, UMTS.
      - Entre proveedores: SDH, DWDM.

### Clasificación según topología
##### Lineal
  - Ordenadores conectados a un cable.
  - Compiten por el medio.
  - Comparten el ancho de banda.
  - En caso de que haya un problema en el servicio (se estropea un segmento), se quedan sin servicio.</br>![[Red_lineal.png|300]]

##### Anillo

  - Una lineal unida por los dos extremos.
  - Si hay un fallo de segmento, la información puede ir por el otro lado.</br>![[Red_anillo.png|300]]
##### Estrella *(el más habitual)* 
  - Todos los nodos están conectados por un controlador.
  - Envían información de un dispositivo a otro.
  - El nodo central coordina la información.
  - Se ve limitada por el nodo controlador.
  - Aumenta en el ancho de banda.</br>![[Red_estrella.png|300]]
##### Árbol
  - Ancho de banda limitado por nodos controladores.
  - Su debilidad depende del nodo controlador más grande.
  - Nodos terminales (hojas de árboles).</br>![[Red_arbol.png|300]]
##### Malla 
  - Derivación de árbol.
  - Los nodos pueden estar conectados a otros nodos que no sean hijos o padres.
  - Permite muchos caminos alternativos.
  - El ancho de banda es puesto por los hijos involucrados de los nodos controladores.
  ![[Red_malla.png|300]]
---
## Modelo OSI
Un modelo es una simplificación de un objeto real.

El modelo OSI es una versión simplificada de las capas de red de comunicaciones. Facilita la comprensión, desarrollo y estandarización de protocolos de red.
### Capas del modelo OSI (de más bajo a más alto nivel) 

1.  **Físico** – Transmisión de bits a través del medio físico.
2.  **Enlace** – Detección y corrección de errores.
3.  **Red** – Enrutamiento y direccionamiento lógico.
4.  **Transporte** – Control de flujo y fiabilidad de la transmisión.
5.  **Sesión** – Control de sesiones entre aplicaciones.
6.  **Presentación** – Formato de datos y encriptación.
7.  **Aplicación** – Interfaz con el usuario final y servicios de red.

```
+-------------------+
| 7. Aplicación     |
+-------------------+
| 6. Presentación   |
+-------------------+
| 5. Sesión         |
+-------------------+
| 4. Transporte     |
+-------------------+
| 3. Red            |
+-------------------+
| 2. Enlace de datos|
+-------------------+
| 1. Física         |
+-------------------+
```

Cada capa se comunica con su equivalente en el dispositivo remoto y con las capas adyacentes en el mismo dispositivo.

### Medios de transmisión 

Medios de transmisión incluyen: Cable Coaxial - RG58 , Cable de cobre de par trenzado - RJ45 , y Fibra Óptica.
![[Redes_transmision.png|550]]
![[Redes_transmision2.png|550]]

### Tarjeta de red (*NIC*) –*Network Interface Card*
La **tarjeta de red (NIC - Network Interface Card)** está directamente conectada al ordenador y proporciona un punto de conexión a la red. Facilita la conexión física al medio de transmisión, que puede ser cableado o inalámbrico.

La NIC es el dispositivo responsable de crear y recibir la información en forma de señales adecuadas para llegar al siguiente dispositivo. Las NICs envían y reciben datos binarios mediante impulsos eléctricos, pulsos luminosos u ondas de radio. Opera principalmente en el **Nivel Físico** del modelo OSI y parte del **Nivel de Enlace de Datos**.

En el Nivel Físico, **acepta tramas de la capa de enlace** y las codifica como una serie de señales (impulsos eléctricos, pulsos luminosos u ondas de radio) que se transmiten por el medio.
  - **Codificación**: convierte los bits en un formato reconocible por el receptor.
  - **Señalización**: define cómo se representan los bits «1» y «0» en el medio físico.

---
### Enlaces

La **capa de enlace de datos** del modelo OSI se encarga de establecer y mantener una conexión fiable entre dos dispositivos que comparten un medio de transmisión físico. Sus principales funciones son:

  - Detección y corrección de errores a nivel de trama.
  - Control de acceso al medio compartido (por ejemplo, CSMA/CD en Ethernet).
  - Encapsulamiento de los datos en tramas.
  - Identificación mediante direcciones MAC.

Cada trama contiene:

  - Cabecera: dirección MAC origen y destino, tipo de protocolo, control de flujo...
  - Datos: la carga útil que transporta.
  - Cola: campos de control, como el CRC (Cyclic Redundancy Check).

---
#### Dirección MAC (Media Access Control) 

Cada NIC tiene un identificador único que se conoce como Dirección MAC Address (Media Access Control). Las direcciones MAC son identificadores compuestos por 48 bits que se escriben en notación hexadecimal. Se utilizan para identificar de forma exclusiva a cada dispositivo dentro de una red local.
  - Ejemplo: `00-03-FF-F9-0F-63`.
  - La dirección se divide en dos partes:
      - **OUI (Organizationally Unique Identifier)**: identifica al fabricante.
      - **Número de serie** asignado por el fabricante.

Estas direcciones no son jerárquicas, lo que limita su escalabilidad.

---
#### Tramas y transmisión de datos 

La transmisión de datos en redes Ethernet se realiza mediante **tramas**. El formato de una trama típica, conocido como datagrama de nivel de enlace, incluye:
  - **Encabezado**: Flag Start , MAC Destino , MAC Origen , Tipo/Longitud.
  - **Datos** (payload).
  - **Cola**: CRC , Flag End.

Ejemplo de trama Ethernet: 
```
| Flag Start | MAC Destino | MAC Origen | Tipo/Longitud | Datos | CRC | Flag End |
```

El campo CRC permite verificar que la información no se ha corrompido en el camino.

---
#### Ethernet y acceso al medio
##### CSMA/CD
Ethernet Standard (IEEE 802.3) garantiza la compatibilidad de los dispositivos en una red. Las tarjetas de red Ethernet utilizan un método de control de acceso al medio conocido como **CSMA/CD** (*Carrier Sense Multiple Access / Collision Detection*). Los dispositivos en la red respetan su turno para hablar, pues si uno quiere transmitir debe escuchar el medio hasta que no haya otro transmitiendo. A veces ocurren colisiones aún siendo muy cuidadosos y es necesario detectarlas.

**Tipos de Ethernet:** 
  - **Legacy Ethernet**: Es la implementación más antigua de Ethernet, centrada en resolver los problemas causados por el cable coaxial. Una estación pone 1 trama en el cable y las demás reciben el mismo mensaje. Cada estación se queda solo con las tramas que la tienen a ella misma como destinataria.
      - El "dominio de colisión" (D de C) es el conjunto de dispositivos que comparten un medio físico para transmitir y, por tanto, compiten por él.
      - Dispositivos intermedios como el repetidor de red permiten superar las restricciones físicas establecidas por la atenuación de la señal en el medio.
      - Hub o repetidor multipuerto: Repite y concentra las señales de tráfico de una red. Recibe datos por un puerto y lo reenvía y regenera en el resto de puertos.
      - Problemas sin resolver con repetidores/hubs: NO procesan datos, solo regeneran y sincronizan la señal. Ancho de banda compartido y colisiones.
      - Solución: Creación de múltiples dominios de colisión mediante dispositivos de red más avanzados como Bridges y Switches.
  - **Ethernet conmutado (Switching)**: introduce switches para segmentar la red, reducir colisiones y aumentar el rendimiento.

---
##### Switches y Bridges
###### Bridge
  - Dispositivo que interconecta redes y toma decisiones acerca del reenvío de las tramas. Para ello, utiliza las direcciones MAC como fuente de información.
  - Mantienen una tabla de direcciones que asocia una MAC de destino con el puerto físico donde se encuentra (**Content-Addressable Memory Table, CAM Table**). Este proceso permite al bridge redirigir los datos solo al puerto físico donde encontrará al destinatario (esta es la principal diferencia con el HUB). Se crean, por tanto, múltiples dominios de colisión (1 por cada puerto).
  - **Funcionamiento**:
    1.  **Actualizar la tabla de direcciones MAC**: Cuando se recibe una trama en un puerto físico del bridge, se crea una nueva entrada en la tabla. Esa nueva entrada asocia la MAC del origen con el número de puerto por el que se recibió. Así, el bridge sabrá el puerto en el que está ubicado si recibe una trama con destino a ese dispositivo. El bridge elimina de la tabla una MAC si no está activa durante un periodo limitado de tiempo (habitualmente en torno a 300 segundos).
    2.  **Envío de tramas: Buscar la MAC destino en la tabla**:
          - Si está en la lista, la trama se envía solo por el puerto que tiene asociado.
          - Si no está en la lista (el dispositivo no envió tráfico previamente o su entrada en la tabla caducó): la trama se reenvía por todos los puertos, excepto por el que se recibió (se "inunda" la red). Todos los dispositivos reciben la trama, pero solo la que tenga la MAC de destino responderá. Entonces el bridge podrá registrar el dispositivo como una nueva entrada de la tabla CAM. Mientras la entrada permanezca en la tabla, el bridge no volverá a inundar (flood) todos los puertos por tramas dirigidas a esa dirección MAC.
    3.  **Problemas generados por el uso de bridges**:
          - Incremento de la latencia. Los bridges son habitualmente dispositivos lentos que tienen un retardo en el procesado de las tramas. El procesado se realiza mediante software: sistema operativo, acceso a memoria, etc..
          - No permiten concentrar grandes cantidades de dispositivos. Esto se debe a que el número de puertos de este tipo de dispositivos es muy limitado (2, 4, 8...).
  - **Solución**: Switches.
###### Switch
  - Un conmutador o switch es un dispositivo que interconecta redes de manera similar a como lo hace un bridge, pero es más rápido. Utiliza una Tabla CAM (Content-Addressable Memory).
  - Principal diferencia: los switches realizan sus funciones (aprendizaje de direcciones, selección de puertos y conmutación de tramas) mediante hardware, mientras que los bridges las realizan mediante software.
  - Los switches son los dispositivos más habituales en la capa de acceso de las redes corporativas.
  - Los switches suelen tener una densidad de puertos mayor que los bridges.
  - El escenario más habitual en una LAN actualmente es hosts conectados a un switch, con un único host por puerto.
  - Admite conexiones full-duplex.

**Paquetes de difusión / Broadcast**
  - Muchas de las tecnologías de acceso múltiple, como, por ejemplo, Ethernet, tienen algunos paquetes/tramas especiales denominados de difusión o broadcast.
  - Una de las características más importantes de estos paquetes es que tienen dirección de destino MAC FF-FF-FF-FF-FF-FF.
  - Estos paquetes son recibidos y procesados por todos los dispositivos en una red.
  - Este tráfico es necesario para administrar la red y su flujo, por lo tanto, no puede ser eliminado.
  - El número de dispositivos en una red es proporcional a la cantidad de tráfico broadcast en la misma. Más dispositivos implican más tráfico de broadcast que afecta al rendimiento de la red en general y de los dispositivos en particular.
  - Conclusión: Es necesario mantener el tamaño de los dominios de broadcast tan pequeño como se pueda.
### VLANs
  - Una **VLAN (Virtual LAN)** permite segmentar lógicamente una red sin importar su distribución física.
  - Mejora el rendimiento y la seguridad al reducir el dominio de broadcast.

---

## Modelo de direccionamiento IP
### IP: Internet Protocol
Las direcciones MAC tienen una estructura plana que no permite jerarquía. Este hecho tiene como problema que las direcciones MAC no son escalables. Se necesita algo para unificar las tecnologías subyacentes (Ethernet, ADSL, PPP, ...). Se necesita definir un protocolo en la capa de red.

  - Direcciones IP: Secuencias de 32 bits que identifican un dispositivo conectado a una red de forma no ambigua.
  - Jerarquía en las direcciones: Formadas por dos partes.
      - Un ID de la red lógica (Dominio de difusión).
      - Un ID del host dentro de la red lógica.
  - Habitualmente se escriben en formato decimal separado por punto.

**Funcionamiento IP: ¿Cómo envía datos un dispositivo a otra red?** 
1.  Necesita una manera en la que con la dirección IP identifique la LAN.
2.  Permitir la interconexión de LANs mediante el uso de routers y ofreciendo un sistema para usar las IPs para encaminar correctamente los paquetes.
3.  Dar a todos los hosts de una red un mecanismo para identificar si un paquete es para un dispositivo en la LAN o debe ser encaminado hacia otra red.

**ID de Red en las Direcciones IP**
  - Las direcciones IP están compuestas por dos partes: ID de red e ID de host.
  - Todos los dispositivos de una red tienen el mismo ID de red.
  - Para diferenciar los hosts en una red lógica se utiliza el ID de host o dirección local.

**Interconexión**
  - Las LANs se organizan en redes más grandes, donde los routers son necesarios para administrar la comunicación entre ellas.
  - Los routers usan las direcciones IP para decidir el destino de un paquete.
  - Los routers necesitan tener una IP asignada en cada red a la que están directamente conectados.

### Router 
  - El dispositivo responsable de conectar dos o más redes.
  - **Funciones Principales**:
      - Escoger una ruta para los paquetes (enrutamiento).
      - Transmitir los paquetes por el interfaz adecuado (conmutación).
  - Sobre las IPs, los routers escogen la interfaz de salida o la ruta para cada paquete en función de la IP de destino. Para conseguir este objetivo, los routers mantienen una tabla de enrutamiento en memoria, esta tabla contiene la información de todas las redes conocidas. Dicha tabla asocia ID de red con el interfaz donde se puede encontrar.

### Clases de direcciones IPv4

| Clase | Bits más significativos | Primer octeto | Bits de red | Bits de host | Host en la red | Máscara de red |
|---|---|---|---|---|---|---|
| A | 0 | 0-127 | 1+7 | 24 | 16,277,214 | 255.0.0.0 |
| B | 10 | 128-191 | 2+14 | 16 | 65,534 | 255.255.0.0 |
| C | 110 | 192-223 | 3+21 | 8 | 254 | 255.255.255.0 |
| D | 1110 | 224-239 | Multicast | - | - | - |
| E | 1111 | 240-255 | Experimental | - | - | - |

**Ejemplos**: 
  - ¿Cuál es el identificador de red para las siguientes direcciones IP?
      - 10.10.100.5 -\> Clase A, máscara 255.0.0.0 identificador 10.0.0.0.
      - 130.100.1.4 -\> Clase B, máscara 255.255.0.0 identificador 130.100.0.0.

-----

## Subnetting y máscaras de red

Se introduce un tercer nivel en el espacio de direcciones IP. Los tres niveles de direccionamiento son:
  - **Dirección de red**: Es un campo de longitud fija que identifica a la propia red en Internet. La longitud de este campo depende de la clase de la dirección.
  - **ID de subred (D de subred)**: Es un campo de longitud variable que permite usar cualquier número de bits de la parte host para codificar la subred (restricciones).
  - **D local o de "host"**: Identifica al dispositivo dentro de la subred local.

Para indicar cuántos bits forman el campo de subred y cuántos forman el campo de host fue necesario introducir un elemento adicional en el direccionamiento: la máscara de subred.

La **máscara de subred** es una cadena de 32 bits , una serie de "unos" seguida de una serie de "ceros". Se representa en formato decimal punteado.

  - Ejemplo:
      - IP: `193.17.17.205`
      - Máscara: `255.255.255.0`
      - Resultado:
          - ID de red: `193.17.17.0`
          - ID de host: `.205`

      - Ejemplos de máscaras: 255.255.255.0 , 255.255.255.128 -\> Máscara/25 , 255.0.0.0.
      - Se usa para diferenciar la dirección de red de la dirección de host. Cuando se ponen los bits del host a 0, se calcula la dirección de red, y cuando se ponen a 1, la de broadcast.

También se puede representar como: `193.17.17.205/24` (CIDR).

-----

## ARP: Address Resolution Protocol

El protocolo **ARP** permite resolver direcciones IP a direcciones MAC dentro de una red local:
1.  Un host envía un **ARP Request** por broadcast preguntando "¿quién tiene la IP X?"
2.  El host con esa IP responde con un **ARP Reply** que incluye su MAC.
3.  El solicitante guarda la IP/MAC en la **caché ARP** para futuras comunicaciones.

Si el destino está fuera de la red local, se solicita la MAC del **gateway predeterminado**.

---
## DHCP: Asignación dinámica de IP

El protocolo **DHCP** asigna dinámicamente direcciones IP y otros parámetros:

  - IP
  - Máscara de subred
  - Dirección del gateway
  - Servidor DNS

**Funcionamiento:**

1.  Descubrimiento (cliente → broadcast)

2.  Oferta (servidor → cliente)

3.  Solicitud (cliente → servidor)

4.  Confirmación (ACK)

-----

## Direcciones IP especiales

  - **Privadas**:

      - Clase A: 10.0.0.0/8

      - Clase B: 172.16.0.0/12

      - Clase C: 192.168.0.0/16

  - **Loopback**: 127.0.0.1 (localhost)

  - **Enlace local (APIPA)**: 169.254.0.0/16 (autoasignadas cuando falla DHCP)

-----

## NAT (Network Address Translation)

**NAT** permite que múltiples dispositivos con IP privadas compartan una sola IP pública para acceder a Internet.

  - Traduce las IPs internas a una externa.

  - Guarda correspondencia en una tabla NAT.

  - Imprescindible por la escasez de direcciones IPv4.

-----

## IPv6

Soluciona limitaciones de IPv4:

  - Espacio de direcciones mayor (128 bits)

  - Mejora de seguridad, movilidad y eficiencia del enrutamiento

  - No hay broadcast, solo unicast, multicast y anycast

  - Ejemplo: `2001:0db8:85a3:0000:0000:8a2e:0370:7334`

  - Representación simplificada: `2001:db8:85a3::8a2e:370:7334`

-----

## Transporte: TCP y UDP

### TCP (Transmission Control Protocol)

  - Orientado a conexión

  - Fiable, con control de errores

  - Ordena y confirma recepción de datos

### UDP (User Datagram Protocol)

  - No orientado a conexión

  - Más rápido, menos sobrecarga

  - Sin garantías de entrega

  - Usado en DNS, VoIP, streaming, juegos

-----

## Puertos y sockets

  - Un **puerto** identifica a cada servicio que corre sobre un host.

  - Combinación de IP + Puerto → **Socket**

  - Puerto + protocolo determina la aplicación

|Tipo|Rango|Ejemplos|
|---|---|---|
|Well-known|0 - 1023|HTTP (80), FTP (21), SSH (22)|
|Registrados|1024 - 49151||
|Dinámicos|49152 - 65535||

-----

## DNS: Sistema de nombres de dominio

El sistema **DNS** traduce nombres de dominio legibles por humanos (como `www.google.com`) a direcciones IP.

  - Cliente consulta al **servidor DNS** configurado.

  - El servidor responde con la IP asociada al nombre.

### DNS públicos conocidos

  - Google: 8.8.8.8 / 8.8.4.4

  - Cloudflare: 1.1.1.1

  - OpenDNS: 208.67.222.222

-----

## Comparativa modelos OSI vs TCP/IP

|Modelo OSI|Modelo TCP/IP|Ejemplos|
|---|---|---|
|Aplicación|Aplicación|HTTP, FTP, SMTP|
|Presentación|-|Compresión, cifrado|
|Sesión|-|Control de sesión|
|Transporte|Transporte|TCP, UDP|
|Red|Internet|IP|
|Enlace de datos|Acceso a red|Ethernet, WiFi|
|Física|Acceso a red|Cables, radio|