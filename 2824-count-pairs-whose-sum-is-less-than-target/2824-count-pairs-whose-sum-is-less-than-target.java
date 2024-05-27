class Solution {
    public int countPairs(List<Integer> nums, int target) {
        System.out.println(target);
        int a = 0;
        for(int i =0; i < nums.size(); i++){
            for(int j = 1; j <nums.size() ; j++){
                if(i < j && j < nums.size())
                    if(nums.get(i) + nums.get(j) < target){
                     a++;
                    System.out.println( nums.get(j) );

                }
            }
        }return a;
    }
}