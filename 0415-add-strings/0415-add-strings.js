/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let result = []; // 결과를 저장할 배열
    let carry = 0;   // 올림값 저장
    let i = num1.length - 1; // num1의 마지막 인덱스
    let j = num2.length - 1; // num2의 마지막 인덱스

    // 두 숫자 문자열을 뒤에서부터 더합니다.
    while (i >= 0 || j >= 0 || carry > 0) {
        let digit1 = i >= 0 ? num1.charCodeAt(i) - 48 : 0; // num1의 현재 자릿값
        let digit2 = j >= 0 ? num2.charCodeAt(j) - 48 : 0; // num2의 현재 자릿값
        let sum = digit1 + digit2 + carry; // 두 자릿수와 올림값의 합

        result.push(sum % 10); // 합의 마지막 자리 숫자 저장
        carry = Math.floor(sum / 10); // 올림값 계산

        i--; // num1의 다음 자리
        j--; // num2의 다음 자리
    }

    // 결과를 뒤집어서 문자열로 변환
    return result.reverse().join('');
};

