import java.util.*;

class Solution {
    public int[] shuffle(int[] nums, int n) {
        int[] f = new int[n];
        int[] b= new int[nums.length - n];
        ArrayList<Integer> result = new ArrayList<Integer>();
        int x = 0;
        for(int i = 0; i <nums.length; i++){
            if(i< n ){
                f[i] = nums[i];
            }else {
                b[i-n ] = nums[i];
            }
        }

        for(int i = 0; i<n; i++){
           result.add(f[i]);
            result.add(b[i]);
        }
        int[] arr = result.stream().mapToInt(i -> i).toArray();

        return arr;
    }
}