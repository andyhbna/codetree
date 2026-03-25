import java.util.Scanner;

public class Main {
    public static void printRect(int n, int m) {
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < m; j++)
                System.out.print("1");
            System.out.println();
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int rowNum = sc.nextInt();
        int colNum = sc.nextInt();

        if (rowNum < 1 || rowNum > 100 || colNum < 1 || colNum > 100) {
            return;
        }

        printRect(rowNum, colNum);
    }
}