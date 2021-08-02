module.exports = function toReadable (number) {
    let numberText = [
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',
        'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];
    let result = '';
    if (number === 0) {
        return numberText[0];
    }
    if(number > 99) {
        result += `${numberText[Math.floor(number/100)]} hundred`;
    } 
    if(number % 100 !== 0) {
        if(number % 100 < 21 ) {
            result += ` ${numberText[number % 100]}`;
        } 
        else {
            result += ` ${numberText[Math.floor((number % 100) / 10) + 18]}`;
            if(number % 10 != 0) {
                result += ` ${numberText[number % 10]}`;
            }
        }
    }
    return result.trim();
}
