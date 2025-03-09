/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    s = s.toUpperCase()
    let lng = s.indexOf('-')
    let x = ''
    for(let i = lng; i < s.length; i++){
        if(s[i] !== '-'){
            x+=s[i]
        }
    }
    
    let pattern = new RegExp(`(.{${k}})`, 'g')
    let str = x.replace(pattern,"$1-")

    if(str.endsWith('-')){
        str = str.slice(0,-1)
    }
    return s.slice(0,lng) + '-' + str

    console.log(str +"fdf")
};