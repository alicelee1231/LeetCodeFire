import java.util.*;

class Solution {
    public int minMovesToSeat(int[] seats, int[] students) {
        ArrayList<Integer> list = new ArrayList<>();
        int result = 0;
        
        Arrays.sort(seats);
        Arrays.sort(students);
        for(int i = 0; i <seats.length; i++){
            result += Math.abs(students[i]- seats[i] ) ;
        }

        return result;
    }
}