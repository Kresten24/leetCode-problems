
public class median {
	
		private static int[] unsortedArray;
	    private static int[] helper;

	    private static int number;
	    
	    //sort the new array.
	    public static void sort(int[] array) {
	    	unsortedArray = array;
	    	number = array.length;
	    	helper = new int[number];
	    	mergesort(0, number - 1);
	    }

	    private static void mergesort(int low, int high) {
	    	if (low < high) {
	    		int middle = low + (high - low) / 2;
	    		mergesort(low, middle);
	    		mergesort(middle + 1, high);
	    		merge(low, middle, high);	    		
	        }
	    }

	    private static void merge(int head, int middle, int last) {
	    	
	    	for (int i = head; i <= last; i++) {
	    		helper[i] = unsortedArray[i];
	    	}
	    	int i = head;
	    	int j = middle + 1;
	    	int k = head;
	    	
	    	while (i <= middle && j <= last) {
	    		if (helper[i] <= helper[j]) {
	    			unsortedArray[k] = helper[i];
	    			i++;
	    		} else {
	    			unsortedArray[k] = helper[j];
	    			j++;
	    		}
	    		k++;
	    	}
	    	while (i <= middle) {
	    		unsortedArray[k] = helper[i];
	    		k++;
	    		i++;
	    	}
	    }
	    
	    //concatinate two arrays.
	    public static double findMedianSortedArrays(int[] nums1, int[] nums2) {
	    	
		   int length1 = nums1.length;
		   int length2 = nums2.length;
		   unsortedArray= new int[length1+length2];
		   System.arraycopy(nums1, 0, unsortedArray, 0, length1);
		   System.arraycopy(nums2, 0, unsortedArray, length1, length2);
		   
		   sort(unsortedArray);
		   
		   
		   if(unsortedArray.length%2==0){
			   return (unsortedArray[unsortedArray.length/2]+unsortedArray[(unsortedArray.length/2)-1])/2.0;
		   }
		   return unsortedArray[unsortedArray.length/2];
		   
	    }
	

	public static void main(String[] args) {
		int[] num1 = {4,2,1};
		int[] num2 = {3};
		System.out.println(findMedianSortedArrays(num1,num2));
	
	}


}
