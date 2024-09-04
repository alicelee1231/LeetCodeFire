/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(ope) {
    let result = 0
    let a = []
    for(let i =0; i < ope.length; i++){
        a.push(Number(ope[i]))
        if(ope[i] === 'C'){
            a.pop()
            a.pop()
        }else if(ope[i] === 'D'){
            a.pop()
            a.push(a[a.length -1] * 2)
        }else if(ope[i] === '+'){
            a.pop()
            a.push(a[a.length -1] + a[a.length -2])
        }
        
    }   for(let i = 0; i < a.length; i++){
            result += a[i]
        }
            return result

};