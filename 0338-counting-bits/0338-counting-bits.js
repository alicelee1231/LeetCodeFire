/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let a = []
    let result = []
        while(n >= 0){
                let y = []
                if(n === 0){
                    y = [0]
                }else {
                    for(let j = n; j >= 1; j = Math.floor(j / 2)){
                    y.push(Math.floor(j % 2))
                    }
                }
            a.push(y)
            n--
        }
        for(let i = 0; i < a.length; i++){
            let z = 0
           for(let j = 0; j < a[i].length; j++){
                z += a[i][j]
           }
           result.push(z)
        }

       return result.reverse()
};