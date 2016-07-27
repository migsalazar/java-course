package javacourse.lesson01.operators;

public class Logical {
	public static void main(String[] args)
	{
		boolean a, b, validacion;
		a = true;
		b = false;
		
		System.out.println("a: "+ a + "\nb: " + b);
		
		validacion = !a;
		System.out.println("Validación !a: " + validacion);
		
		validacion = !b;
		System.out.printf("Validación !b: " + validacion);
	
		validacion = a && b;
		System.out.println("Validación a && b: " + validacion);
		
		validacion = a || b;
		System.out.println("Validación a || b: " + validacion);
		
		validacion = !(a && b);
		System.out.println("Validación !(a && b): " + validacion);
		
		validacion = !(a || b);
		System.out.println("Validación !(a || b): " + validacion);
	}
}
