/*
------------------------------------------------------------
Race Day
------------------------------------------------------------
You have been hired to write a program that will register 
runners for the race and give them instructions on race day.
https://youtu.be/sSnUXjb_u-g
------------------------------------------------------------
 */

let raceNumber = Math.floor(Math.random() * 1000);

// Assign variable Registration Type
// Assign variable Runner Age
let earlyReg = true
let runnerAge = 18

// Check for adult + early reg to assign raceNumber
if (earlyReg && runnerAge > 18) {
  raceNumber += 1000
} 

// Print time - based on Reg time + Age
if (earlyReg && runnerAge > 18) {
  console.log(`You will race at 9:30 am. Your race number is ${raceNumber}.`)
} else if (!earlyReg && runnerAge > 18) {
	console.log(`Late adults run at 11:00 am. Your race number is ${raceNumber}.`)           
} else if (runnerAge < 18) {
  console.log(`Youth registrants run at 12:30 pm. Your race number is ${raceNumber}.`)
} else {
  console.log('Please see the registration desk.')  
}