# basico

## El número subred o Mascara de red

El número de subred es la cantidad de divisiones lógicas o segmentos en los que se puede dividir una red IP utilizando el enmascaramiento de subred.

10.20.30.131`/12`

La longitud del prefijo de red es `12` que significa que tiene los primeros `12 bits` de la dirección IP se utilizan para identificar la red y los bits restantes `20` se reservan para identificar los hots.

## Calcular el número de subredes

El numero de subredes se calcula con la siguiente formula.

$2^{(32 - prefijo)}$

Para el caso anterios seria:

$2^{32 - 12} = 2^{20}  = 1.048.576$

1.048.576 subredes posibles

## Calcular el número de hosts por redes

La formula es:

$2^{(32 - sufijo)-2}$

Para las redes el prefijo es `12` el sufijo es `20`

Para el caso `10.20.30.131/12`

$2^{(32 - 20)-2} = 2^{18} = 262.144$

Hay 262.144 direcciones de IP disponibles para los host.

Es importante restar 2 de la potencia de 2 para descontar la dirección de red y la dirección de broadcast, que no se asignan a hosts individuales. Así que, en este caso, hay 262144 direcciones IP disponibles para dispositivos y hosts en la red.


## Calcular la mascara de subred

A 32 la dividimos en 4 partes de 8 bits, de la red `12` tine los ultimos `20` con bit 0.

Empezando por el final. 

Primer Octecto.

|8|7|6|5|4|3|2|1|
|-|-|-|-|-|-|-|-|
|0|0|0|0|0|0|0|0|

$=0$

Segundo Octecto.

|8|7|6|5|4|3|2|1|
|-|-|-|-|-|-|-|-|
|0|0|0|0|0|0|0|0|

$=0$

Tercer Octecto

|8|7|6|5|4|3|2|1|
|-|-|-|-|-|-|-|-|
|1|1|1|1|0|0|0|0|

$=240$

Cuarto Octeto

|8|7|6|5|4|3|2|1|
|-|-|-|-|-|-|-|-|
|1|1|1|1|1|1|1|1|

$=255$

La mascara de red es:

$255.240.0.0$

## Dirección de transmisión (Broadcast Address)

La dirección de transmisión es la dirección que se utiliza para enviar mensajes a todos los hosts de la red. 

Se obtiene al aplicar la máscara de red y establecer todo los `bits de host en 1`

$Dirección de Transmisión=(Dirección de Red ∣ (NOT  Máscara de Red))$

$Dirección de Transmisión=(10.20.30.131 ∣ 0.15.255.255 )$


## Host Válidos

Los host válidos van desde la dirrección de red +1 hasta la dirección de transmissión -1.

$Hosts Válidos=(Dirección de Red+1) hasta (Dirección de Transmisión −1)$

$Rango de Hosts Válidos=(10.16.0.1 )hasta (10.31.255.254)$

Por lo tanto el primer host valido sera: $10.16.0.1$ y el ultimo $10.31.255.254$