const shortStr = 'Hi there';

const longStr = 'the quick brown fox jumped over the lazy dog';

const toCapital = str => {
    const words = str.split(' ')
    return words.map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

console.log(toCapital(longStr));//The Quick Brown Fox...

console.log(shortStr[0]);// H

console.log('word'.slice(1)); //ord