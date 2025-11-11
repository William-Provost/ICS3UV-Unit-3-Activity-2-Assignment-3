/**
 * @author William Provost
 * @version 1.0.0
 * @date 2025-11-11
 * @fileoverview This program asks the user for an amount of change in cents
 * and then calculates how many toonies, dollars, quarters, dimes,
 * nickels, and cents make up that amount.
 */

package main

import (
	"fmt"
	"math"
)

func main() {
	// constants
	const TOONIE = 200
	const LOONIE = 100
	const QUARTER = 25
	const DIME = 10
	const NICKEL = 5

	// variables
	var totalCents int
	var toonies, loonies, quarters, dimes, nickels, cents int

	// input
	fmt.Print("Enter the amount of change (in cents): ")
	fmt.Scanln(&totalCents)

	// make sure it’s positive (no if statements used)
	totalCents = int(math.Abs(float64(totalCents)))

	// process
	toonies = totalCents / TOONIE
	totalCents = totalCents % TOONIE

	loonies = totalCents / LOONIE
	totalCents = totalCents % LOONIE

	quarters = totalCents / QUARTER
	totalCents = totalCents % QUARTER

	dimes = totalCents / DIME
	totalCents = totalCents % DIME

	nickels = totalCents / NICKEL
	totalCents = totalCents % NICKEL

	cents = totalCents

	// output
	fmt.Printf("Your change is: %d toonies, %d dollar, %d quarters, %d dime, %d nickels and %d cents.\n",
		toonies, loonies, quarters, dimes, nickels, cents)
		
	fmt.Println("Done.")
}
