import java.util.*;

class Solution {
    public  int maxProduct(int[] nums) {
        int result = 0 ;
        Arrays.sort(nums);
        System.out.println(Arrays.toString(nums));
        result = (nums[nums.length-1]  -1) * (nums[nums.length -2] -1) ;
        return result;
    }
}