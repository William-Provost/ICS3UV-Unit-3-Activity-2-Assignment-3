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

// input
const totalCentsAsString1: string = prompt("Enter the amount of change (in cents):") || "0";
const totalCents1: number = Math.abs(parseInt(totalCentsAsString1));

// process
const toonies: number = Math.floor(totalCents1 / TOONIE);
const remainingAfterToonies: number = totalCents1 % TOONIE;

const loonies: number = Math.floor(remainingAfterToonies / LOONIE);
const remainingAfterLoonies: number = remainingAfterToonies % LOONIE;

const quarters: number = Math.floor(remainingAfterLoonies / QUARTER);
const remainingAfterQuarters: number = remainingAfterLoonies % QUARTER;

const dimes: number = Math.floor(remainingAfterQuarters / DIME);
const remainingAfterDimes: number = remainingAfterQuarters % DIME;

const nickels: number = Math.floor(remainingAfterDimes / NICKEL);
const cents1: number = remainingAfterDimes % NICKEL;

// output
console.log(
  `Your change is: ${toonies} toonies, ${loonies} dollar, ${quarters} quarters, ${dimes} dime, ${nickels} nickels and ${cents1} cents.`
);

console.log("\nDone.");
