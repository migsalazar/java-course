### Estructuras de control

Las instrucciones en un programa se ejecutan una después de otra (en sentido estricto, en un solo recurso).

Diferentes instrucciones permiten indicar que la siguiente instrucción a una anterior, al ejecutarse, tal vez no sea la siguiente secuencia

:----------

### Condicional

Las instrucciones de control condicional son tres:
- if
- if / else
- switch

:----------

### Condicional - if



:----------

### Condicional - if (Sintaxis)

```java
  if(condicion)
  {
    //sentences
  }
```

:----------

### Condicional - if (Ejemplo)

```java
  if(a == b) {
  	System.out.println("A y B son iguales");
  }
```

:----------

### Condicional - if / else (Sintaxis)

```java
  if(condicion) {
  	//sentences
  }
  else {
  	//sentences
  }
```
#### Ejemplo

```java
  if(a == b) {
  	System.out.println("A y B son iguales");
  }
  else {
  	System.out.println("A y B no son iguales");
  }
```

### Anidaciones

```java
  if(a == b) {
  	System.out.println("A y B son iguales");
  }
  else {
    	if(a > b) {
    	   System.out.println("A es mayor a B");
      }
      else {
    	   System.out.println("A y B no son iguales");
    	}
  }
```

:----------

### Condicional - switch

En ocasiones se requerirá evaluar muchas condiciones a la vez y ésta última estará en función de una sola variable. En estos casos, es más óptimo elegir por la instrucción `switch`.

:----------

### Condicional - switch (Sintaxis)

```java
  switch(variable int o char){
  	case const1:
  		//sentences
  	break;
  	case const2:
  	 //sentences
  	break;
  	case const3:
  	 //sentences
  	break;
  	default:
  		//sentences
  };
```

:----------

### Condicional - switch (Ejemplo)

```java
  switch(a)
  {
    case 1 : {
      System.out.println("El valor de a es 1");
    } break;

    case 2 : {
      System.out.println("El valor de a es 2");
    } break;

    case 3 : {
      System.out.println("El valor de a es 3");
    } break;

    default : {
      System.out.println("A tiene un valor mayor a 3");
    }
  }
```

:----------

### Condicional - switch (Reglas)

- Solo se puede usar como variable de condición, una variable de tipo entero o de tipo char.
- Los valores a condicionar sobre las variables de tipo char, deben ir con comillas simples `'valor'`.

:----------

### Ciclos

Las estructuras de control de repetición, son un mecanismo para ejecutar una o mas veces un bloque de código en función de una condición.

- `for`
- `while`
- `do-while`

:----------

### Ciclos - while

La instrucción `while`, como su nombre lo indica, ejecuta un bloque de código **mientras** alguna condición **sea verdadera**.

Generalmente la utilizaremos cuando se desconozca la cantidad de iteraciones a producir.

Éste tipo de repetición requiere:
- Una variable de control
- El valor inicial de la variable de control
- El incremento (o decremento) con el que se modifica la variable de control cada vez que pasa por el ciclo.
- La condición de continuación del ciclo.

:----------

### Ciclos - while (Sintaxis)


:----------

### Ciclos - while (Ejemplo)

```java
  int a = 1;

  //Se evalua la condición
  while(a != 2013)
  {
    //Si es diferente al valor indicado, se imprime un mensaje
    System.out.println("Falta menos para llegar al 2013");

    //Se incrementa el valor de a
    a++;
  }
```

:----------

### Ciclos - for

Si se conoce la cantidad exacta de iteraciones (no solo en número, si no también conocida dentro de una variable) generalmente se utilizará ésta expresión.

:----------

### Ciclos - for (Sintaxis)

```java
  for (inicialización; condición; incremento)
  {
  	//sentences
  }
```

:----------

### Ciclos - for (Ejemplo)

```java
  //Se inicializa la variable i en cero
  //Se evalúa la condición, si es verdadera se ejecutan las instrucciones entre llaves
  //Al terminar, se incrementa en uno
  //Se repite hasta que la condición i<10 sea falsa. En ese momento el flujo del programa sigue su curso.
  for(int i = 0; i<10 ; i++)
  {
    System.out.println(i);
  }
```

:----------

### Ciclos - do-while

El `do-while` resulta muy similar al `while`, sin embargo, el `do-while` asegura que el bloque de código a repetir se ejecutará **por lo menos una vez**.

:----------

## Ciclos - do-while (Sintaxis)

```java
do {
	//sentences
} while(condicion);
```

:----------

### Ciclos - do-while (Ejemplo)

*Pendiente*

:----------

### Ramificaciones

Existen instrucciones que nos servirán para establecer flujos que *rompen* con las reglas de las estructuras de control.

:----------

### Ramificaciones - BREAK



:----------

### Ramificaciones - Break (Ejemplo)

``` java
for(int i = 0; i < 10 ; i++) {
	System.out.println( i );
	if( i == 5)
	break;
}
```

//El for se detendrá cuando i sea igual a 5, dado que //existe un condicional el cual si es verdadero se //ejecuta una instrucción break


### Ramificaciones - CONTINUE

Es utilizada cuando solamente queremos dejar la iteración actual del ciclo y pasar a la siguiente itereación.

La iteración, es decir, las tareas dentro de ese bloque de código no necesitan estar completas antes de generar un `continue`.

:----------
