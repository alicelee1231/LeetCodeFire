/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
    let a = new Map([
        ['0', '0'],
        ['1', '1'],
        ['6', '9'],
        ['8', '8'],
        ['9', '6']
    ]);

    let left = 0, right = num.length - 1;

    while (left <= right) {
        if (!a.has(num[left]) || a.get(num[left]) !== num[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
};
