function addCommas(number) {
    const numStr = String(number);
    if(number < 1000 && number > -1000) return numStr;

    const numStrArray = numStr.split('').reverse();

    // count backwards to insert commas every 3 digits
    for(let i = 0; i < numStrArray.length - 1; i++){

        if(numStrArray[i] === '-') break;

        if ((i + 1) % 3 === 0 && i !== numStrArray.length - 1){
            let newVal = ',' + numStrArray[i];
            numStrArray[i] = newVal;
        }
    }
    numStrArray.reverse().join('')
    return numStrArray.join('')
}

module.exports = addCommas;
