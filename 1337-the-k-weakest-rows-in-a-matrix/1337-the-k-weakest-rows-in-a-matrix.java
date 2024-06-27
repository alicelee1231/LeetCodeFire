import java.util.*;

class Solution {
    public int[] kWeakestRows(int[][] mat, int k) {
        int[] res = new int[k];
        int[] soldierCount = new int[mat.length];

        for(int i = 0; i < mat.length; i++){
            int count = 0;
            for(int j = 0; j < mat[i].length; j++){
                if (mat[i][j] == 1) {
                    count++;
                }
            }
            soldierCount[i] = count;
            System.out.println(Arrays.toString(soldierCount));
        }

        Integer[] indices = new Integer[mat.length];
        for (int i = 0; i < mat.length; i++) {
            indices[i] = i;
        }

        Arrays.sort(indices, (a, b) -> {
            if (soldierCount[a] == soldierCount[b]) {
                return Integer.compare(a, b);
            } else {
                return Integer.compare(soldierCount[a], soldierCount[b]);
            }
        });

        for (int i = 0; i < k; i++) {
            res[i] = indices[i];
        }

        return res;
    }
}
