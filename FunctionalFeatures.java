import java.util.Arrays;
import java.util.List;
import java.util.function.Predicate;

class FunctionalFeatures
{

    static List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

    static Predicate<Integer> isEven = x -> x % 2 == 0 ;
    
    

public static void main(String[] args) {
    System.out.println("Here is the magic");
    System.out.println( "Hi there " + isEven.test(numbers.get(1))) ;
      Parent parent = new Parent();
        Child child = new Child();
        
        parent.staticMethod();       // Calls the static method in Parent
        parent.nonStaticMethod();    // Calls the non-static method in Parent
        
        child.staticMethod();        // Calls the static method in Parent (not overridden)
        child.nonStaticMethod();     // Calls the overridden non-static method in Child
    
}

}

class Parent {
    static void staticMethod() {
        System.out.println("Static method in Parent");
    }
    
    static void nonStaticMethod() {
        System.out.println("Non-static method in Parent");
    }
}

class Child extends Parent {
    static void nonStaticMethod() {
        System.out.println("Non-static method in Child"); // Overrides the non-static method in Parent
    }

    function 
}