const reverseInt = (value) => {
    const reversed = value.toString().split('').reverse().join('');
    if(value < 0) {
        return parseInt(reversed) * -1;
    }
    return parseInt(reversed);    
}

console.log(reverseInt(-123412));