/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let a = [];

    for(let i = 0; i < s.length; i++) {
        a.push(s[i]);

        while (
            a.length > 1 &&
            a[a.length - 1].toLowerCase() === a[a.length - 2].toLowerCase() &&
            a[a.length - 1] !== a[a.length - 2]
        ) {
            console.log(a)
            a.pop();
            a.pop();
        }
    }

    return a.join('');
};
