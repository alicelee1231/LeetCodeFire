import java.util.*;

class Solution {
    public int countStudents(int[] students, int[] sandwiches) {
        Queue<Integer> studentQueue = new LinkedList<>();
        Queue<Integer> sandwichQueue = new LinkedList<>();
        
        for (int student : students) {
            studentQueue.add(student);
        }
        
        for (int sandwich : sandwiches) {
            sandwichQueue.add(sandwich);
        }
        
        int count = 0;
        
        while (!studentQueue.isEmpty() && count < studentQueue.size()) {
            if (studentQueue.peek() == sandwichQueue.peek()) {
                studentQueue.poll();
                sandwichQueue.poll();
                count = 0; 
            } else {
                studentQueue.add(studentQueue.poll());
                count++;
            }
        }
        
        return studentQueue.size();
    }
}
