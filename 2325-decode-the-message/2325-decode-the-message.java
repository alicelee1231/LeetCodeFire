import java.util.*;

class Solution {
    public String decodeMessage(String key, String message) {
        Map<Character, Character> charMap = new HashMap<>();
        char currentChar = 'a';
        
        for (char k : key.toCharArray()) {
            if (k != ' ' && !charMap.containsKey(k)) {
                charMap.put(k, currentChar);
                currentChar++;
            }
        }

        StringBuilder decodedMessage = new StringBuilder();
        for (char m : message.toCharArray()) {
            if (m == ' ') {
                decodedMessage.append(' ');
            } else {
                decodedMessage.append(charMap.get(m));
            }
        }
        
        return decodedMessage.toString();
    }
}
