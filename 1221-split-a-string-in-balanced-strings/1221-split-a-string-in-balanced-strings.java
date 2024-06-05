import java.util.*;

class Solution {
    public int balancedStringSplit(String s) {
      int balance = 0;
        int count = 0;
        for(char a : s.toCharArray()){
            if(a == 'L'){
                balance++;
            }else if(a == 'R'){
                balance--;
            }
            if(balance == 0){
                count++;
            }
        }
        return count;
    }
}