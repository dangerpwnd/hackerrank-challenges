'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    if(n >= 2 || n <= 20){
        for(let i = 1; i <= 10; i++){
            let result = i * n;
            console.log(`${n} x ${i} = ${result}`);
        }
    }
    else {
        console.log("Something went wrong. Did you input a number between 2-20?");
    }
}
