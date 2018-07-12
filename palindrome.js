const palindrome = (str) => {
    const result = str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    });
    return result;
}
console.log(palindrome('abbab'));