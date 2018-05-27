//return indices of two number that add up to a specific target
public class twoSum {

	public static void main(String[] args) {
		int[] num = {12,2,5,5};
		twoSum m = new twoSum();

		int[] result = m.twosum(num,10);
		System.out.println("["+result[0]+" "+result[1]+"]");

	}
	
	public int[] twosum(int[] nums, int target){

		for(int i=0; i<nums.length; i++){
			for(int j=0 ; j<nums.length ; j++){
				if(j==i){
					continue;
				}			
				if(nums[i]+nums[j]==target){
					int[] A={i,j};
					return A;
				}	
			}	

		}
		throw new IllegalArgumentException("No two sum solution");
	}

}

//Example:
//
//Given nums = [12, 2, 5, 5], target = 9,
//
//Because nums[2] + nums[3] = 5 + 5 = 10.
//return [2, 3].
