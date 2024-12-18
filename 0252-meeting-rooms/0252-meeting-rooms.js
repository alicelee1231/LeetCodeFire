/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {

    let a = []
    let b = []
    let x = 0
    let y = 1
    for(let j = 0; j < intervals.length; j++){
         a[j] = intervals[j]
    }
    a.sort((x,y) => x[0] - y[0])
 
    for(let i = 1; i < a.length; i++){
        if(a[i][0] < a[i-1][1])
            return false
    }
    return true
};