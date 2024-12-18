/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
  
    intervals.sort((x,y) => x[0] - y[0])
    for(let i = 1; i < intervals.length; i++){
        if(intervals[i][0] < intervals[i-1][1])
            return false
    }
    return true
};

//first, 