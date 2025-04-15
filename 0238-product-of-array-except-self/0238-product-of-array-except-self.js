var productExceptSelf = function(nums) {
    let a = nums.length;
    let b = [];
    let zeroCount = 0;
    let totalProduct = 1;

    // 먼저 전체 곱과 0의 개수를 센다
    for (let i = 0; i < a; i++) {
        if (nums[i] === 0) {
            zeroCount++;
            continue;
        }
        totalProduct *= nums[i];
    }

    // 그 다음 while로 한 자리씩 계산
    while (b.length !== a) {
        let i = b.length;

        if (zeroCount > 1) {
            // 0이 2개 이상이면 무조건 0
            b.push(0);
        } else if (zeroCount === 1) {
            // 0이 하나일 때는 0이 있는 자리만 값이 생김
            if (nums[i] === 0) {
                b.push(totalProduct);
            } else {
                b.push(0);
            }
        } else {
            // 0이 없을 경우: 전체곱 / 자기자신
            b.push(totalProduct / nums[i]);
        }
    }

    return b
};
