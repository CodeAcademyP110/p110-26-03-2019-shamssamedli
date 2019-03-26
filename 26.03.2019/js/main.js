"use strict";

// let numbers = [];

// let max = numbers[0];
// for (let i = 0; i < numbers.length; i++) 
// {
//     if(numbers[i] > max) max = numbers[i];
// }
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// console.log(max);

// let userInput = prompt("Please, input a number: ");
// let userNumber = +userInput;

// while(isNaN(userNumber))
// {
//     userInput = prompt("Please, input a valid number: ");
//     userNumber = +userInput;
// }

// while(true)
// {
//     let userInput = prompt("Please, input a number: ");
//     let userNumber = +userInput;

//     if(userNumber == 0 || userNumber){
//         break;
//     }
// }

// let i = 0;
// while(i < numbers.length)
// {
//     console.log(numbers[i]);
//     i++;
// }

// for(let i = 0; i < numbers.length; i++)
// {
//     console.log(numbers[i]);
// }




//CLASSWORK

let numbers = [];

for(let i = 0; i < 5; i++)
{
    //numbers.push(+prompt(`${i+1}-ci reqemi daxil edin: `))
    // let userInput = prompt(`${i+1}-ci reqemi daxil edin: `);
    let userInput = prompt(i+1 + "-ci reqemi daxil edin: ");
    let userNumber = +userInput;
    numbers.push(userNumber);
}

let max  = numbers[0];
let min  = numbers[0];

for(let i = 0; i < numbers.length; i++)
{
    if(numbers[i] > max)
    {
        max = numbers[i];
    }

    if(numbers[i] < min)
    {
        min = numbers[i];   
    }
}

console.log(max, min);

