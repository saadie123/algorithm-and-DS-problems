const reverse = (value) => {
    let reversed = '';
    for (let character of value) {
        reversed = character + reversed;
    }
    return reversed;
}

console.log(reverse('Saad'));