import java.util.*;

class Solution {
    public int countMatches(List<List<String>> items, String key, String rule) {
       
        int a = 0;
        for(List<String> item: items){
            String type = item.get(0), color = item.get(1), name = item.get(2);
            if("type".equals(key) && type.equals(rule))
                a++;
            else if("color".equals(key) && color.equals(rule))
                a++;
            else if("name".equals(key) && name.equals(rule))
                a++;
        }
        return a;
    }
}