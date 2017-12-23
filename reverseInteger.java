
public class reverseInteger {
    public static int reverse(int x){
    		long reversed = 0;	 
    		while(x!=0){   	
    			int num = x % 10;			
    			reversed = (long) ((reversed * 10) + num);     			
    			x/=10;      			
    			if(reversed > Integer.MAX_VALUE || reversed < Integer.MIN_VALUE){
    			return 0; }	   		
    		}        		
    		return (int) reversed;   		
    	}	
	public static void main(String[] args) {
		System.out.println(reverse(2147483));
	}
}
