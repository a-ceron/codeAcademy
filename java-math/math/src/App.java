import resources.math.Set;

public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("Hello, World!");
        Set <Integer> A= new Set<Integer>();
        A.union(1);
        A.union(2);
        A.union(3);

        System.out.println(A.isIn(2));
        System.out.println(A.isIn(4));
    }
}
