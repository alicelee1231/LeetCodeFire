/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let y = words.map((i) => i.toLowerCase())
    let t = ""
    let result = []
   let a = "qwertyuiopasdfghjklzxcvbnm"
   for(let i = 0; i< y.length; i++){
    for(let j = 0; j < y[i].length; j++){
            let x = a.indexOf(y[i][j])
            if(x < 10 ){
                t += "1" 
            }else if(x < 19 ){
                t+="2"
            }else {
                t+= "3"
            }
        }
        result.push(t)
        t = ""
   }
   console.log(result)
   let fi = []
    for(let i = 0; i< result.length; i++){
        let s = true
        for(let j = 0; j < result[i].length - 1; j++){
            if(result[i][j] !== result[i][j+1]){
                s = false
                break
            }
        } 
        if(s){
            fi.push(words[i])
        }                   
    }
    
    return fi
};
