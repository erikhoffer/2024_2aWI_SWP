let binary = '10101100';

let result = Invert(binary);

console.log(result);

function Invert(bin) {
    let inverted = '';
    for (let i = 0; i < bin.length; i++) {
        if (bin[i] === '0') {
            inverted += '1';
        } else {
            inverted += '0';
        }
    }
    return inverted;
}