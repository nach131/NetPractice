# Level 8

<div align=center>
<img src="/assets/Level_8.png" alt="Level_8" />
</div>

Contamos con 3 redes separadas en superposición, y el router superior R12 con acceso a internet dando conectividad al resto.

- Disponemos de la mascara en la interface D1 `255.255.255.240` de `/28`
- Y la tabla de enrutamiento de R2 con IP `135.162.86.62` que sera la ip de R3

Desglosamos las posibles redes de `/28` con la ip `135.162.86.0`

$28 - 32 = 4$

4 bits para los hots

$2^4=16$

16 host por red

| Address | Inicio | Fin | Broadcasr |
| :-: | :-: | :-: | :-: |
|135.162.86.0|`135.162.86.1`|`135.162.86.14`|135.162.86.15|
|135.162.86.16|`135.162.86.17`|`135.162.86.30`|135.162.86.31|
|135.162.86.32|135.162.86.33|135.162.86.46|135.162.86.47|
|135.162.86.48|`135.162.86.34`|`135.162.86.62`|135.162.86.63|

Utilizare el tercer lango de red para R (azul), el primer rango para D (naranga) y el segundo rango para C (verde)