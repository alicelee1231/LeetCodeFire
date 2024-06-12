import java.util.*;

class Solution {
    public int findCenter(int[][] edges) {
        int a = edges[0][0];
        int b = edges[0][1];
        int c = 0;
        
            if(edges[1][0] == a){
                c = edges[1][0];
            }else if(edges[1][0] == b) {
                c = edges[1][0];
            } else {
                c = edges[1][1];
            }     
        return c;  
         }       
}
