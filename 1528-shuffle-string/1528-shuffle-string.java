import java.util.*;

class Solution {
    public String restoreString(String s, int[] indices) {
        String a = "";
        char[] tmp = s.toCharArray();
      
        for(int i = 0; i< indices.length; i++){
            tmp[indices[i]] = s.charAt(i);
        }
         return String.valueOf(tmp);
    }
   
}