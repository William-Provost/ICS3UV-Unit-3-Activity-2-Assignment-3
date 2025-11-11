/**
 * @author William Provost
 * @version 1.0.0
 * @date 2025-11-11
 * @fileoverview This program asks the user for an amount of change in cents
 * and then calculates how many toonies, dollars, quarters, dimes,
 * nickels, and cents make up that amount.
 */

// constants
const TOONIE: number = 200;
const LOONIE: number = 100;
const QUARTER: number = 25;
const DIME: number = 10;
const NICKEL: number = 5;

// variables
let totalCentsAsString1: string;
let totalCents1: number;
let toonies: number;
let loonies: number;
let quarters: number;
let dimes: number;
let nickels: number;
let cents1: number;

// input
totalCentsAsString1 = prompt("Enter the amount of change (in cents):") || "0";
totalCents1 = Math.abs(parseInt(totalCentsAsString1));

// process
toonies = Math.floor(totalCents1 / TOONIE);
totalCents1 = totalCents1 % TOONIE;

loonies = Math.floor(totalCents1 / LOONIE);
totalCents1 = totalCents1 % LOONIE;

quarters = Math.floor(totalCents1 / QUARTER);
totalCents1 = totalCents1 % QUARTER;

dimes = Math.floor(totalCents1 / DIME);
totalCents1 = totalCents1 % DIME;

nickels = Math.floor(totalCents1 / NICKEL);
totalCents1 = totalCents1 % NICKEL;

cents1 = totalCents1;

// output
console.log(
  `Your change is: ${toonies} toonies, ${loonies} dollar, ${quarters} quarters, ${dimes} dime, ${nickels} nickels and ${cents1} cents.`
);

console.log("Done.");
