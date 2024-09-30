var longestConsecutive = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    
    nums.sort((a, b) => a - b);
    const uniqueNums = Array.from(new Set(nums));
    
    let result = 1;
    let longest = 1;

    for (let i = 1; i < uniqueNums.length; i++) {
        if (uniqueNums[i] === uniqueNums[i - 1] + 1) {
            result++;
        } else {
            longest = Math.max(longest, result);
            result = 1;  
        }
    }

    return Math.max(longest, result);
};
