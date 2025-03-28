let input = 'ATGCTTCAGAAAAGGTCAGCG';

let outPutA = 0;
let outPutC = 0;
let outPutG = 0;
let outPutT = 0;

if (input.length > 0 && input.length < 1000) {
    for (let i = 0; i <= input.length; i++) {
        if (input[i] == 'A') {
            outPutA += 1;
        } else if (input[i] == 'C') {
            outPutC += 1;
        } else if (input[i] == 'G') {
            outPutG += 1;
        } else if (input[i] == 'T') {
            outPutT += 1;
        }
    }
    console.log(outPutA, outPutC, outPutG, outPutT);
}