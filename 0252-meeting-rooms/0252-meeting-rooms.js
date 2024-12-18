/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
  //first, to compare each other, I sorted all of the elements.
    intervals.sort((x,y) => x[0] - y[0])
    
    // second, after sorting, I just compare the start time with the end time which before arrary.
// so if the end time is over to next start time, the person can't attend the meeting.
    for(let i = 1; i < intervals.length; i++){
        if(intervals[i][0] < intervals[i-1][1])
            return false
    }
    return true
};


