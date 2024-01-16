# Level 9

<div align=center>
<img src="/assets/Level_9.png" alt="Level_9" />
</div>


Hay 4 redes, 3 con host y una entre routers

- Disponemos de la IP `56.199.24.26` en la tabla de enrutamiento del host `D1`
- Prefijo `/18` en la interface `R23` del router `R2`
- Mascara `255.255.255.252` en la Interface `R21`
- Tabla de enrutado del router `R1` `0.0.0.0/0 => 163.172.250.1`
- Mascara `255.255.255.128` de la interface `R11` del router `R1`

Según la IP `56.199.24.26` y el Prefijo `/18` podemos componer la red (verde)

Según la mascara `255.255.255.252` podemo componer la red (naraja) y rellenar la tabla de enrutado de `R1`

Utilizando el prefijo `/18` componemos la red (azul)

Según la mascara `255.255.255.128` componemos la red (roja) y rellenamos las tablas de enrutado.

Por utilo rellenamos la entrada de la tabla de enrutado de Intenet I con las direcciones de red de las redes Roja y Azul, para que dispongan de salida a Internet como pide el enunciado.

