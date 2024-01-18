# bc

Es una herramienta de línea de comandos que proporciona una calculadora de precisión arbitraria. 

Su nombre es una abreviatura de `basic calculator`, y está diseñada para realizar operaciones matemáticas con números de punto flotante de alta precisión.

- **Sintaxis de Estilo C:**

La sintaxis de las expresiones en bc es similar a la de C. Puedes realizar operaciones aritméticas básicas, funciones matemáticas y asignaciones de variables.

- ** Soporte de Bases Numéricas:**
bc admite diversas bases numéricas, incluyendo binario (base 2), octal (base 8), decimal (base 10) y hexadecimal (base 16).

- **Operaciones Avanzadas:** Además de las operaciones aritméticas básicas, bc permite realizar funciones matemáticas más avanzadas, como raíces cuadradas, exponenciación y funciones trigonométricas.

## Pasar deciamal a binario.

```shell
bc <<< "obase=2;240"
```

```shell
echo "obase=2; 240" | bc
```
<Badge type="info" text="output" />
```shell
11110000
```

## Pasr binario a decimal

```shell
bc <<< "obase=10; ibase=2; 11100000"
```

```shell
echo "obase=10; ibase=2; 11110000" | bc
```

