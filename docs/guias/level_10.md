
# Red jerarquica

La configuración en cascada de redes, en la que se tienen múltiples subredes conectadas a través de un conjunto de routers, es comúnmente conocida como una "topología de red jerárquica" o "red jerárquica". En esta configuración, los routers actúan como puntos de conexión entre las diferentes subredes, facilitando el enrutamiento del tráfico de datos entre ellas.

<div align=center>
<img src="/assets/Level_10.png" alt="Level_10" />
</div>


1. **Subred A: 160.73.28.1/25** (Azul)
   - **Rango de direcciones:** 160.73.28.1 a 160.73.28.126
   - **Longitud del prefijo de red:** 25 bits
   - **Número de direcciones en la subred:** $(2^{32-25} = 2^7 = 128)$ hosts
   - **Dirección de red:** 160.73.28.0
   - **Dirección de broadcast:** `160.73.28.127`

2. **Subred B: 160.73.28.129/26** (Verde)
   - **Rango de direcciones:** 160.73.28.129 a 160.73.28.190
   - **Longitud del prefijo de red:** 26 bits
   - **Número de direcciones en la subred:** $(2^{32-26} = 2^6 = 64)$ hots
   - **Dirección de red:** 160.73.28.128
   - **Dirección de broadcast:** `160.73.28.191`

3. **Subred C: 160.73.28.193/27** (Naranja)
   - **Rango de direcciones:** 160.73.28.193 a 160.73.28.222
   - **Longitud del prefijo de red:** 27 bits
   - **Número de direcciones en la subred:** $(2^{32-27} = 2^5 = 32)$ hots
   - **Dirección de red:** `160.73.28.192`
   - **Dirección de broadcast:** 160.73.28.223

Podemos apreciar que la topología  es en cascada el primer rango de red es para la red azul `160.73.28.127`, donde se acaba esta empieza el siguiente red Verde `160.73.28.128` y su primer hots disponible `160.73.28.129` de esta forma podemos calcular la red Naranja, dirección de red `160.73.28.192` primer host `160.73.28.193`