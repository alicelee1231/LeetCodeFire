import java.util.*;

class Solution {
    public List<Integer> findWordsContaining(String[] words, char x) {
        ArrayList<String> a = new ArrayList<>(Arrays.asList(words));
        List<Integer> li = new ArrayList<>();
        for(int i = 0; i < a.size(); i++){
             if(a.get(i).contains(String.valueOf(x))){
                li.add(i);
             }
            }return li;
        }
    }
