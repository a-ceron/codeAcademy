package resources.objects;

import java.util.ArrayList;
import java.util.function.BinaryOperator;

/**
 * Un grupo esta definido por medio de las leyes de combinación de sus símbolos
 */
public class Group < T >  {
    
    ArrayList<T> baseItems;
    T itemNeutro;
    boolean isAsociative= true;
    boolean isConmutative= true;

   /**
    * InnerGroup
    */
   public class BinaryOperator {
        public BinaryOperator();

        public T operate(T elemeT1, T elemeT2) {
            return elemeT1 + elemeT2;
        }

   }

    public Group(T elementsT, T neutro ) {
        baseItems= elementsT;
        itemNeutro= neutro;
    }

    public ArrayList<T> getGroup(int n_elements) {
        n_size= baseItems.size();
        ArrayList<T> groupItems= new ArrayList<T>();
        while( n_size < n_elements ){
            T value= 
            groupItems.add(  )
        }
    }

    



}
