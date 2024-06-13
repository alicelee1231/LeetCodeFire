import java.util.*;

class Solution {
    public int minMovesToSeat(int[] seats, int[] students) {
        ArrayList<Integer> list = new ArrayList<>();
        int result = 0;
//         for(int i : seats){
//             list.add(i);
//         }
//         for(int i : students){
//             list.add(i);
//         }
//                 Collections.sort(list);
//         for(int i =0 ; i < list.size(); i += 2){
//                 result += list.get(i+1) - list.get(i);            
//         }
        
        Arrays.sort(seats);
        Arrays.sort(students);
        for(int i = 0; i <seats.length; i++){
            result += Math.abs(students[i]- seats[i] ) ;
        }

        
        return Math.abs(result);
    }
}