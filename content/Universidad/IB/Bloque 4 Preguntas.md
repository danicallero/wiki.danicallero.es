---
title: B4. Recopilación
tags:
  - Universidad
  - Informática-Básica
date: 2025-06-10
aliases: 
draft: false
---
>[!warning] ¡Cuidado!
>Estos ejercicios los he hecho con mi –poco– conocimiento, y no prometo que estén bien. Si encuentras algún error no dudes en comunicármelo: hola@danicallero.es

![[IB_red1.jpeg|450]]

**X)** En el diagrama, sin contar las conexiones a internet ni las conexiones opcionales (a, b, c y d) ¿cuántos dominios de colisión y cuantos de difusión hay?</br>
**a)** 5 dominios de colisión y 2 de difusión. $\checkmark$</br>
**b)** 2 dominios de colisión y 5 de difusión.</br>
**c)** 3 dominios de colisión y 6 de difusión.</br>
**d)** 6 dominios de colisión y 3 de difusión.

**X)** ¿Cuál de los siguientes dispositivos NO utiliza memoria adicional para almacenar la ubicación de los destinatarios del mensaje?</br>
**a)** Hub. $\checkmark$</br>
**b)** Router.</br>
**c)** Switch.</br>
**d)** Bridge.</br>

![[IB_red2.jpeg|450]]

| ID         | IP                |
| ---------- | ----------------- |
| PC-0       | 172.30.1.0/16     |
| PC-1       | 172.30.1.1/16     |
| LP-0       | 172.30.0.2/16     |
| R1(Left)   | 172.30.0.1/16     |
| R1(Down)   | 201.19.21.8/24    |
| R1(Right)  | 193.168.0.1/24    |
| R2(Left)   | 4.2.1.2/8         |
| R2(Up)     | 193.144.48.33/27  |
| R2(Right)  | 196.100.48.129/27 |
| Web server | 196.100.48.35/27  |
| DNS        | ?                 |
**X)** Asumiendo que el resto de la red está perfectamente configurada, ¿Cuál de las siguientes IPs podríamos asignarle al DNS para el PC-0 lo utilice?</br>
**a)** 172.19.14.21 $\checkmark$</br>
**b)** Ninguna de ellas ya que debe de estar en la misma red.</br>
**c)** 193.144.48.130</br>
**d)** 192.168.30.14</br>
>[!info]- Explicación:
>Aunque a) no está en la misma subred que el PC, eso no es un problema, porque los servidores DNS no necesitan compartir red local siempre que existan rutas válidas entre ellos, y el enunciado indica que la red está correctamente configurada. La opción **c) 193.144.48.130** parece válida a simple vista, pero está fuera del rango de su subred. La interfaz R2(Up) tiene IP **193.144.48.33/27**, lo que significa que los primeros 27 bits identifican la red y los últimos 5 bits los hosts. Con eso se calculan $2^{(32-{máscara})}$ **2⁵ = 32 direcciones totales** por subred, y el bloque al que pertenece esa IP va de **193.144.48.32 a 193.144.48.63**, por lo que la dirección .130 está claramente fuera de ese rango. Las opciones b) y d) también son inválidas: b) parte de una suposición incorrecta (no es necesario estar en la misma subred), y d) pertenece a una red que no aparece conectada en ningún punto del esquema.

**X)** Asumiendo que el resto de la red está perfectamente configurada cual de las siguientes ips NO se podría asignar al dns para que el pc-0 lo configure y utilice?</br>
**a)** 172.30.1.2</br>
**b)** 192.168.48.32 $\checkmark$</br>
**c)** 8.4.4.8</br>
**d)** 193.144.48.62</br>
>[!info]- Explicación:
> - 172.30.1.2 puede usarse porque está en la misma red que el PC.
> - 8.4.4.8 puede usarse porque es una IP pública, por lo que se podría establecer ruta a ella.
> - 193.144.48.62 puede usarse porque el router R2 está conectado a la red=>se puede establecer ruta. Además, está dentro de rango: como tiene máscara /27, solo hay **2⁵ = 32 direcciones totales** por subred, y el bloque al que pertenece esa IP va de **193.144.48.32 (IP red) a 193.144.48.63 (IP broadcast)**.

![[IB_red1.jpeg|450]]

**X)** ¿En cuál de las siguientes posiciones se puede ubicar un servidor DHCP para el uso de PC-0 y PC-1?</br>
**a)** D</br>
**b)** B</br>
**c)** A $\checkmark$</br>
**d)** C</br>

>[!ojo] Dato útil:
> Un servidor DHCP debe estar en la misma LAN que el cliente que lanza el DHCP discover; no obstante, si el router al que están conectados cuenta con [DHCP relay](https://learn.microsoft.com/en-us/windows-server/networking/technologies/dhcp/dhcp-deploy-relay-agent), al recibir el router una llamada DHCP req., la propagará a todas las LANs conectadas a él. Como no se menciona el relay, la única opción correcta es la A.

**X)** La dirección ip 19.44.48.132</br>
**a)** [Por defecto tiene 8 bits como id de red.](Universidad/IB/Bloque-4#clases-de-direcciones-ipv4) $\checkmark$</br>
**b)** Los bits más significativos que la identifican tienen valor 10.</br>
**c)** Puede estar configurada en más de un equipo.</br>
**d)** Por defecto tiene una máscara de red 255.255.255.0.</br>

**X)** Según el diagrama de la tabla, que dirección de destino en el nivel de enlace de datos utilizará el pc-1 cuando construya una trama que contenga un paquete ip dirigido al servidor web?**</br>
a)** 00:10:BA:E4:FE:82</br>
**b)** 00:01:BE:FA:56:82</br>
**c)** 00:E0:8F:BD:5C:01</br>
**d)** FF:FF:FF:FF:FF:FF $\checkmark$</br>
>[!info]- Explicación:
> La tabla de la que se habla solo incluye las direcciones IP, y la [trama](Universidad/IB/Bloque-4#tramas-y-transmisión-de-datos) necesita las direcciones MAC de origen y destino. Por ello, necesitamos hacer un ARP request con la IP del servidor y MAC broadcast.
> >[!ojo] Si supiésemos la MAC del servidor, sería **esa MAC** la dirección de destino.

**X)** En el caso de querer mandar un paquete a únicamente a todos los dispositivos de la subred donde se encuentra el servidor que tiene IP 172.100.36.130/16. cual debe usarse como destino?</br>
**a)** 172.100.255.255 $\checkmark$</br>
**b)** 255.255.255.255</br>
**c)** FF:FF:FF:FF:FF:FF</br>
**d)** 172.100.36.130</br>
>[!info]- Explicación:
>Como la IP tiene máscara /16, sabemos que los primeros 16 bits de la IP en binario serán los que identifiquen a la red, y el resto serán los host. Como cada "bloque" de la IP se representa con ocho bits: 10101100.01100100.00100100.10000010, sabemos que la dirección de broadcast de una red /16 es x.x.255.255

**X)** En el diagrama, ¿Cuántas redes LAN hay representadas en la figura adjunta sin contar las conexiones a Internet, sin las conexiones opcionales (A, B y C)?

![[IB_red2.jpeg|450]]

**a)** 3 $\checkmark$</br>
**b)** 2</br>
**c)** 4</br>
**d)** 1</br>
>[!ojo] ¡Ojo!
>Como solo tenemos el diagrama sin tabla de IPs, asumimos que el switch no crea VLAN separada.

**X)** En el diagrama, ¿Cuántas redes LAN hay representadas en la figura adjunta sin contar las conexiones a Internet, sin las conexiones opcionales (A, B y C)?

![[IB_red3.jpeg|450]]

**a)** 3</br>
**b)** 2 $\checkmark$</br>
**c)** 4</br>
**d)** 1</br>
>[!ojo] ¡Ojo!
>Como solo tenemos el diagrama sin tabla de IPs, asumimos que el switch no crea VLAN separada.

![[IB_red3.jpeg|450]]

**X)** En el diagrama, sin contar las conexiones a internet ni las conexiones opcionales (a, b, c y d) ¿cuántos dominios de colisión y cuantos de difusión hay?</br>
**a)** 2 dominios de colisión y 2 de difusión.</br>
**b)** 2 dominios de colisión y 6 de difusión.</br>
**c)** 6 dominios de colisión y 2 de difusión. $\checkmark$</br>
**d)** 4 dominios de colisión y 4 de difusión.

**X)** En el modelo OSI, un [NIC](Universidad/IB/Bloque-4#tarjeta-de-red-nic-network-interface-card) se define en el nivel...</br>
**a)** Físico.</br>
**b)** De transporte.</br>
**c)** De enlace de datos. $\checkmark$</br>
**d)** De red.</br>

![[IB_red2.jpeg|450]]

**X)** En el diagrama, sin contar las conexiones a internet ni las conexiones opcionales (a, b, c y d) ¿cuántos dominios de colisión y cuantos de difusión hay?</br>
**a)** 4 dominios de colisión y 4 de difusión.</br>
**b)** 2 dominios de colisión y 2 de difusión.</br>
**c)** 3 dominios de colisión y 5 de difusión. </br>
**d)** 5 dominios de colisión y 3 de difusión. $\checkmark$