function negativeOrPositiveNumbers(array) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        if (num < 0) {
            newArr.unshift(num);
        } else if (num >= 0) {
            newArr.push(num);
        }
    }
    for (let j = 0; j < newArr.length; j++) {
        console.log(Number(newArr[j]));
    }
}
//negativeOrPositiveNumbers(['7', '-2', '8', '9']);
negativeOrPositiveNumbers(['3', '-2', '0', '-1']);