## Operadores

| Nombre            | Operador    |
| ------------------|-------------|
| Suma              | `+`         |
| Resta             | `-`         |
| Multiplicación    | `*`         |
| División          | `/`         |
| Módulo / Residuo  | `%`         |

----------

## Operadores
### Precendecia

| Operadores  | Operación                       | Precedencia                                         |
| ------------|---------------------------------|-----------------------------------------------------|
| `*` `/` `%` | Multiplicación, Divisón, Módulo | Se evalua primero. De izquierda a derecha           |
| `+` `-`     | Suma, Resta                     | Se evalúan en segundo lugar. De izquierda a derecha |

----------

## Operadores
### Asignación

Como en la mayoría de los estudios, el signo `=` es utilizado como igualdad. Mediante esto, podemos asignarle un valor a una variable como sigue:

`a = a + b;`

El mismo operador de igualdad, para el caso anterior, también podría escribirse de la siguiente manera:

`a += b;`

----------

## Operadores
### Asignación

`a+=b`:	Suma `a` y `b` y guarda el resultado en `a

`a-=b`:	A la variable `a` se le resta `b` y el resultado se guarda en `a`

`a/=b`:	Se divide la variable `a` entre la variable `b` y el resultado se guarda en `a`

`a*=b`:	Se multiplican `a` por `b` y el resultado se guarda en `a`

`a%=b`:	Se divide la variable `a` entre la variable `b` y se guarda el residuo en `a`

----------

## Operadores
## Incremento y decremento

Los operadores de incremento (++) y decremento (--) son utilizados para **aumentar** o **disminuir** en uno el valor de una variable.

Pre-incremento: Incrementa en uno la variable y después se valida el valor: ++v.

Post-incremento: Valida el valor almacenado en la variable y después lo incrementa en uno: v++.
