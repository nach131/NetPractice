# Level 7

## Supernetting (superposición)

Es una têcnica de diseño de redes que implica combinar múltiples bloques de direcciones IP de única red mas grande.

Esta  práctica es opuesta al subnetting, donde una red se divide en subredes más pequeñas.

El objetivo del supernetting es reducir la cantidad de información en la tabla de enrutamiento, simplificando el proceso de enrutado.

1. **Agregación de direcciones:** En lugar de anunciar muchas rutas más específicas en una tabla de enrutamiento, el supernetting permite la agregación de estas rutas en una única ruta más general. Esto ayuda a reducir el tamaño de las tablas de enrutamiento y mejora la eficiencia del enrutamiento.

2. **Utilización de bloques de direcciones contiguas:** Para aplicar supernetting, las direcciones IP que se combinan deben ser contiguas. Esto significa que los bloques de direcciones que se están supernetting deben estar adyacentes en términos de numeración.

3. **Longitud del prefijo de red variable:** A diferencia de las clases de direcciones tradicionales (A, B, C), el supernetting permite tener bloques de direcciones con longitudes de prefijo de red variables. Esto proporciona flexibilidad para crear superrutas con tamaños de red personalizados.


<div align=center>
<img src="/assets/Level_7.png" alt="Index Banner" />
</div>

Contamos con 3 redes separadas:

- Entre el cliente A1 y el enrutador R11.`Verde`
- Entre el enrutador R12 y el enrutador R21. `Naranja`
- Entre el enrutador R22 y el cliente C1. `Rojo`

Para la red verde, ya tenemos asignada dirección IP `90.198.14.1` y no puede tener una mascara de `/24`, por que se superpondrá con el rango de la Interfaz R12 , que ya está ingresado. Ambos estarían en el rango de 93.198.14.0 - 93.198.14.255.

Como necesitamos direcciones para 3 redes separadas, es conveniente dividir los últimos bytes de la dirección en 4 o más rangos de direcciones. Y las redes lo mas proximas entre ellas.

En el ejemplo se ha decidido por una red `/26` que dispone de cuatro tramos de `62` hosts y dejando una red libre.

::: tip 
Podria ser valido cualquier red superior a `/24`
:::