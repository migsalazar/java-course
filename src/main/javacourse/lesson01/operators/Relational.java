package javacourse.lesson01.operators;

public class Relational {
	public static void main(String[] args) {
		int a,b;
		boolean validacion;
		a = 5;
		b = 7;
		
		validacion = a < b;
		System.out.println("Validación " + a + " < " + b + " : " + validacion);
		
		validacion = a > b;
		System.out.println("Validación " + a + " > " + b + " : " + validacion);
		
		validacion = a == b;
		System.out.println("Validación " + a + " == " + b + " : " + validacion);
		
		validacion = a != b;
		System.out.println("Validación " + a + " != " + b + " : " + validacion);
		
		validacion = a <= b;
		System.out.println("Validación " + a + " <= " + b + " : " + validacion);
		
		validacion = a >= b;
		System.out.println("Validación " + a + " >= " + b + " : " + validacion);
	}
}
