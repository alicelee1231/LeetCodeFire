/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number[][]}
 */
function findMissingRanges(nums, lower, upper) {
    const a = [];
    
    // 이전 값을 추적하기 위해 초기값 설정
    let prev = lower - 1;

    // nums 배열을 순회
    for (let i = 0; i <= nums.length; i++) {
        const curr = (i < nums.length) ? nums[i] : upper + 1;

        if (prev + 1 <= curr - 1) {
            a.push([prev + 1, curr - 1]);
        }

        prev = curr; // 이전 값을 업데이트
    }

    return a;
}

