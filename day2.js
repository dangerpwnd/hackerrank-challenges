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

/*
 * Complete the 'solve' function below.
 *
 * The function accepts following parameters:
 *  1. DOUBLE meal_cost
 *  2. INTEGER tip_percent
 *  3. INTEGER tax_percent
 */

function solve(meal_cost, tip_percent, tax_percent) {
  // Write your code here
  const tipPercent = tip_percent / 100;
  const taxPercent = tax_percent / 100;
  const tipAmount = tipPercent * meal_cost;
  const taxAmount = taxPercent * meal_cost;
  const total = (meal_cost + tipAmount + taxAmount).toFixed(0);
  console.log(total);
}

function main() {
  const meal_cost = parseFloat(readLine().trim());
  const tip_percent = parseInt(readLine().trim(), 10);
  const tax_percent = parseInt(readLine().trim(), 10);
  solve(meal_cost, tip_percent, tax_percent);
}