//Calculate x raised to the power n (x^n).
public class Power {

	double result;

	public double myPow(double x, int n) {

		if(n<0){

			if(n<Integer.MIN_VALUE || n>Integer.MAX_VALUE){
				return result=0.0;
			}

		}

		result = Math.pow(x, n);

		return result;
	}	

	public static void main(String[] args) {
		Power p = new Power();
		System.out.println(p.myPow(2.0000, -2147483648));

	}
}

//Example 1:
//----------
//Input: 2.00000, 10
//Output: 1024.00000

//Example 2:
//----------
//Input: 2.10000, 3
//Output: 9.26100

//Example 3:
//----------
//Input: 2.00000, -2
//Output: 0.25000

//Note:
//-----
//-100.0 < x < 100.0
//n is a 32-bit signed integer, within the range [−2^31, 2^31 − 1]

