/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    if (duration === 0) return 0;

    let totalTime = 0;
    // why I need to +1 in lenght? 
    //beacuse I will use i + 1 for getting an element, so If I am not write length -1; it will occur exceed the boundary. 
    for (let i = 0; i < timeSeries.length - 1; i++) {
        // why I use min method? 
        // because if the duration is bigger than difference between two numbers, 
        // and difference is bigger than duration, there is no duplicated element, 
        // just add the number, but it is not, there is some duplicated elements,  
        // so it should be min.
        totalTime += Math.min(duration, timeSeries[i + 1] - timeSeries[i]);
    }

    totalTime += duration;

    return totalTime;
};

// 1,10001 => 1,        45, 10045 => 1,2,4,5 => 4 1,2,2,3 => 3 
// 2,10002
// 3,10003
// 4,10004,
// 5,10005
// 6,10006
// 7,10007
// 8,10008,
// 9,10009