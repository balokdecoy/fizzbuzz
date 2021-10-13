package academy.learnprogramming;

public class Main {

    public static void main(String[] args) {

        int number = 100;

        for (int i = 0; i <= number; i++) {
            if ((i % 15 == 0)) {
                System.out.println("fizzbuzz");
            } else if ((i % 5 == 0)) {
                System.out.println("fizz");
            } else if ((i % 3 == 0)) {
                System.out.println("buzz");
            } else {
                System.out.println(i);
            }
        }
    }
}
