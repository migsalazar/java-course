package javacourse.lesson01.operators;

public class IncrementoDecremento {
	public static void main(String[] args) {
		int v, n;
		
		v = 5;
		
		System.out.println("v = " + v);
		System.out.println("\nPrimero se incrementa en uno v y luego se asigna el valor de v en n");
		n = ++v;
		
		System.out.println("n = " + n+ " v = " + v);
		System.out.println("\nPrimero se asigna el valor de v en n y luego se incrementa en uno v");
		n = v++;
	
		System.out.println("n = " + n+ " v = " + v);
		System.out.println("\nPrimero se decremento en uno v y luego se asigna el valor de v en n");
		
		n = --v;
		System.out.println("n = " + n+ " v = " + v);
		System.out.println("\nPrimero se asigna el valor de v en n y luego se decremento en uno v");
		
		n = v--;
		System.out.println("n = " + n+ " v = " + v);
	}
}
