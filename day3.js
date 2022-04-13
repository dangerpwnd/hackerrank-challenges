"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  const N = parseInt(readLine().trim(), 10);
  console.log(N);
  switch (N % 2) {
    case 1:
      console.log("Weird");
      break;
    case 0:
      if (N >= 2 && N <= 5) {
        console.log("Not Weird");
      } else if (N >= 6 && N <= 20) {
        console.log("Weird");
      } else {
        console.log("Not Weird");
      }
      break;
    default:
      console.log(`That's weird. It's not working. Is ${N} a number?`);
      break;
  }
}
