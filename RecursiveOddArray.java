import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class RecursiveOddArray {
    private static ArrayList<Integer> arr ; 
    private static ArrayList<Integer> temparr = new ArrayList<Integer>(); 
    static int counter =0;
    public static void main(String[] args) {
    	System.out.print("Enter numbers for array ");   
    	arr = new ArrayList<Integer>();
    	Scanner scanner = new Scanner(System.in);
	    while(scanner.hasNextInt()){   
	       arr.add(scanner.nextInt());

		
	    }
	    checkIfOdd(arr.size()-1);
	    System.out.println(temparr);
		
	}

	public static List<Integer> checkIfOdd(int arrlen){
			
		
		if(arrlen<0){
			
		 return temparr;
		}
		else {
			if(arr.get(arrlen)%2 != 0){
				temparr.add(arr.get(arrlen));
				counter++;
			}
		}
		return checkIfOdd(arrlen-1);
	}
	
	
}
