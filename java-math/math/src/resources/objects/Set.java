package resources.objects;

import java.util.ArrayList;
import java.util.Iterator;


public class Set < T > implements Iterable < T >{

    //Def 1: A set is a collection of things
    private ArrayList<T> setName= new ArrayList<T>();

    public Set() {
        super();    
    }   

    /**
     * Adjuntar un objeto adicional a un conjunto es una operación muy útil.
     * Para cualquier conjunto A, sea A;t el conjunto cuyos elementos son los 
     * elementos de A, más un elemento (nuevo posiblemente) t
     * 
     * Se dice que t in A <-> A;t= A y A;t= A U {t}
     * 
     * @param element
     *          Elemento a unir al conjunto existente
     */
    public void union(T element) {
        setName.add( element );
    }

    public T remove(int index){
        return setName.remove(index);
    }

    /**
     * Un elemento puede o no puede pertenecer a un conjunto, 
     * si el conjunto pertenece (element in Set) la función regresa
     * un true, en caso contrario (element not in Set) regresa un false
     * @param element
     * @return
     */
    public boolean isIn(T element){
        Iterator <T> item= setName.iterator();
        while (item.hasNext()) {
            if( item.next() == element ){
                return true;
            }
        }

        return false;
    }

    public String toString() {
        for( int i=0; i < setName.size(); i++ ){
            System.out.println( "Elemento "+i+": "+setName.get(i) );
        }
        return "";
        
    }

    @Override
    public Iterator<T> iterator() {
        // TODO Auto-generated method stub
        return setName.iterator();
    }


}

/*Notas:
; es un simbolo que denota union
*/