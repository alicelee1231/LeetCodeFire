/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(wd, word1, word2) {
//     for getting a distance, I need to know the each element's point
//     so I will use for loop
    let idx1 = -1; // word1의 인덱스 저장
    let idx2 = -1; // word2의 인덱스 저장
    let minDistance = Infinity; // 최소 거리 초기화

    for (let i = 0; i < wd.length; i++) {
        if (wd[i] === word1) {
            idx1 = i;
        }
        if (wd[i] === word2) {
            idx2 = i;
        }

        if (idx1 !== -1 && idx2 !== -1) {
            minDistance = Math.min(minDistance, Math.abs(idx1 - idx2));
        }
    }

    return minDistance;
};