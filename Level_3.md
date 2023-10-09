```bash
cliente A
interface
IP: 104.198.79.125
mask: resolver

cliente B
IP:resolver
mask: resolver

cliente B
IP:resolver
mask: 255.255.255.128

```

Para que los clientes A y B puedan comunicarse en una red, necesitan estar en la misma subred IP, lo que significa que deben tener direcciones IP en el mismo rango y una máscara de subred que les permita comunicarse. Dado que el cliente A tiene una dirección IP de **104.198.79.125** pero no se proporciona la máscara de subred, primero necesitamos determinar la máscara de subred antes de asignar las direcciones IP para los clientes B.

Usando la dirección IP proporcionada para el cliente A (**104.198.79.125**), podemos ver que está en la red pública de Google (Google Cloud). Supongamos que esta dirección IP está en una red privada y se utiliza una máscara de subred que pertenece a la clase B, lo que significa una máscara de subred predeterminada de **255.255.0.0**. Si esta es la máscara de subred que se utiliza para el cliente A, los clientes B también deben utilizar una máscara de subred similar para estar en la misma red.

Ahora, para el cliente B, supongamos que se utiliza una máscara de subred de **255.255.255.128**. Esta máscara de subred indica que los primeros 25 bits son parte de la red y los últimos 7 bits son para hosts. Para que los clientes B estén en la misma red que el cliente A, deben tener el mismo prefijo de red. Supongamos que los primeros 25 bits de la dirección IP del cliente A son **104.198.79.0**, entonces los clientes B deben tener direcciones IP que comiencen con **104.198.79.0**.

Aquí hay algunas posibles configuraciones para los clientes B:

- **Cliente B1**: IP: **104.198.79.1**, Máscara: **255.255.255.128**
- **Cliente B2**: IP: **104.198.79.2**, Máscara: **255.255.255.128**
- **Cliente B3**: IP: **104.198.79.3**, Máscara: **255.255.255.128**

En estas configuraciones, todos los clientes (A, B1, B2, B3) estarían en la misma red y podrían comunicarse entre sí a través del switch. Ten en cuenta que la elección exacta de las direcciones IP dependerá de la estructura de la red y de cómo quieras organizar las direcciones para tus dispositivos.