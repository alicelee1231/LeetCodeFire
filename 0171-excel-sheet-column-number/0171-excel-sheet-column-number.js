// var titleToNumber =  function(ct) {
//     const alpha = Array.from({ length: 26 }, (_, i) => {
//         const letter = String.fromCharCode(65 + i);
//         return [letter, i + 1];
//     }).reduce((acc, [key, value]) => {
//         acc[key] = value;
//         return acc;
//     }, {});

//     let a = 0;

//     for (let i = 0; i < ct.length; i++) {
//         const char = ct[i];
//         a = a * 26 + alpha[char]; 
//     }

//     return a;

var titleToNumber = function(ct) {
    return [...ct].reduce((a, c) => a * 26 + (c.charCodeAt(0) - 64), 0);
};


// return alpha
// }
// };



