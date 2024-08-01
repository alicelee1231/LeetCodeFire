/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for(let i = 0; i < s.length; i++){
        let char = s[i];
        
        if(pairs[char]){
            stack.push(char);
        } else {
            let top = stack.pop();
            if(pairs[top] !== char){
                return false;
            }
        }
    }
    return stack.length === 0;
};

