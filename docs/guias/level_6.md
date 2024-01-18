# Level 6

<div align=center>
<img src="/assets/Level_6.png" alt="Level_6" />
</div>

- Disponemos de la mascara `255.255.255.128` de la interface `R1` del router.
- Disponemos de la IP `44.223.134.227` del host `A1`.


1. **red naranja: 44.223.134.128/25**
   - **Rango de direcciones:** 44.223.134.129 a 44.223.134.254
   - **Longitud del prefijo de red:** 25 bits
   - **Número de direcciones en la subred:** $(2^{32-25} = 2^7 = 128)$ hosts
   - **Dirección de red:** `44.223.134.128`
   - **Dirección de broadcast:** 160.73.28.255

En la tabla de enrutamiento del `internet I` debe de dar acceso a la red Naranja, podemos poner directamente la IP del host `R1` `44.223.134.226/` pero lo correcto seria poner toda la dirección de red a la que se quiere dar conectividad `44.223.134.128/25`