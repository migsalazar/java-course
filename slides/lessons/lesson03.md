## Operadores

| Nombre            | Operador    |
| ------------------|-------------|
| Suma              | `+`         |
| Resta             | `-`         |
| Multiplicación    | `*`         |
| División          | `/`         |
| Módulo / Residuo  | `%`         |

----------

### Precendecia

| Operadores  | Operación                       | Precedencia                                         |
| ------------|---------------------------------|-----------------------------------------------------|
| `*` `/` `%` | Multiplicación, Divisón, Módulo | Se evalua primero. De izquierda a derecha           |
| `+` `-`     | Suma, Resta                     | Se evalúan en segundo lugar. De izquierda a derecha |

----------

### Asignación

Como en la mayoría de los estudios, el signo `=` es utilizado como igualdad. Mediante esto, podemos asignarle un valor a una variable como sigue:

`a = a + b;`

El mismo operador de igualdad, para el caso anterior, también podría escribirse de la siguiente manera:

`a += b;`

----------

### Ejemplo | Asignación

`a += b`:	Suma **a** y **b** y guarda el resultado en **a**

`a -= b`:	A la variable **a** se le resta **b** y el resultado se guarda en **a**

`a /= b`:	Se divide la variable **a** entre la variable **b** y el resultado se guarda en **a**

`a *= b`:	Se multiplican **a** por **b** y el resultado se guarda en **a**

`a %= b`:	Se divide la variable **a** entre la variable **b** y se guarda el residuo en **a**

----------

### Incremento y decremento

Los operadores de incremento (++) y decremento (--) son utilizados para **aumentar** o **disminuir** en uno el valor de una variable.

Pre-incremento: Incrementa en uno la variable y después se valida el valor: ++v.

Post-incremento: Valida el valor almacenado en la variable y después lo incrementa en uno: v++.

----------

### Ejemplo | Incremento y decremento
```java
int v, n;
v = 5;

n = ++v; //n = ? , v = ?
//Primero se incrementa en uno "v" y luego se asigna el valor de "v" en "n"

n = v++; //n = ? , v = ?
//Primero se asigna el valor de v en n y luego se incrementa en uno v");

n = --v; //n = ? , v = ?
//Primero se decremento en uno v y luego se asigna el valor de v en n");

n = v--; //n = ? , v = ?
 //*Primero se asigna el valor de v en n y luego se decremento en uno v");
```

----------

### Relacionales

Los operadores relacionales nos sirven para comparar dos variables y así dererminar si son iguales o diferentes.

| Operador      | Nombre	  |
| --------------|-----------|
| `<`	          |	menor que	|
| `>`	          |	mayor que |
| `==`          | igual que	|
| `!=`          | diferente de |
| `<=`          | menor igual que |
| `>=`          | mayor igual que |

----------

### Relacionales | Ejemplo
```java
int a, b;
boolean validación;

a = 5;
b = 7;

validacion = a < b; // validacion = true

validacion = a > b; // validacion = false

validacion = a == b; // validacion = false

validacion = a != b; // validacion = true

validacion = a <= b; // validacion =  true

validacion = a >= b; // validacion = false
```

----------

### Lógicos

Para trabajar con valores booleanos se requiere de operadores lógicos.

| Operador  |	Nombre  | Función                                         |
| ----------|---------|-------------------------------------------------|
| `!`         | Not (no)|	Negación. Si true => false, si false => true    |
| `&&`        |	And (y) | Si ambos true => true, de lo contrario => false	|
| <code>&#124;&#124;</code>      |	Or (o)  |	Si alguno true => true, ambos false => false	  |

----------

### Ejemplo  | Lógicos

```java
boolean a, b, validacion;

a = true;
b = false;

validación = !a; // validacion =

validación = !b; // validacion =

validación = a && b; // validacion =

validación = a || b; // validacion =

validación = !(a && b); // validacion =

validación = !(a || b); // validacion = 
```
