/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

let newstr =`${s1}, ${s2}, ${s3},${s4},${s5} `;

const  pantalla1 = document.getElementById("pantalla1")
pantalla1.innerHTML =newstr;
console.log(newstr);
// Concatenate the string variables into one new string


// Print out the concatenated string




/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

let part1Modified = part1.slice(0, -1) + part1.slice(-1).toUpperCase();
let part2Modified = part2.slice(0, -1) + part1.slice(-1).toUpperCase();

let las2Parts = `${part1Modified}${part2Modified} `

const  pantalla2 = document.getElementById("pantalla2")

pantalla2.innerHTML= las2Parts
console.log(las2Parts);
// Convert the last letter of part1 and part2 to uppercase and concatenate the strings


// Print the cameLtaiL-formatted string




/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
let tipTotal=billTotal *0.15;

const  pantalla3 = document.getElementById("pantalla3")

pantalla3.innerHTML= `Tip Total: ${tipTotal}`
console.log(tipTotal);
// Print out the tipAmount




/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
const randomInt = Math.floor(Math.random() * 10) + 1;

const  pantalla4 = document.getElementById("pantalla4")
pantalla4.innerHTML= `Random is: ${randomInt}`

console.log(randomInt);

// Print the generated random number



/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;

const expression2 = a || b;

const expression3 = !a && b;

const expression4 = !(a && b);

const expression5 = !a || !b;

const expression6 = !(a || b);

const expression7 = a && a;

const  pantalla5 = document.getElementById("pantalla5")

pantalla5.innerHTML="<ul>"
pantalla5.innerHTML+=`<li>a && b = ${expression1}</li>`
pantalla5.innerHTML+=`<li>a || b = ${expression2}</li>`
pantalla5.innerHTML+=`<li>!a && b = ${expression3}</li>`
pantalla5.innerHTML+=`<li>!(a && b) = ${expression4}</li>`
pantalla5.innerHTML+=`<li>!a || !b = ${expression5}</li>`
pantalla5.innerHTML+=`<li>!(a || b) = ${expression6}</li>`
pantalla5.innerHTML+=`<li>a && a = ${expression7}</li>`
pantalla5.innerHTML+="</ul>"