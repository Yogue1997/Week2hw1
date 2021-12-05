// Make a calculator using switch/case and take a user input to perform any calculation. If user enters any value other than 1-5, display a message 'Invalid Option' and end the program.
let prompt = require ('prompt-sync')()
let num1 = prompt ('add first number: ');
let num2 = prompt('add second number: ');
inputOp = Number (prompt('1=+, 2=/, 3=-, 4=*, 5=exit: '));
let ouput
switch(inputOp){
    case 1:{
    output = num1+num2;
    console.log(output);
    break;
    }
    case 2:{
    output = num1/num2;
    console.log(output);
    break;
    }
    case 3:{
    output = num1-num2;
    console.log(output);
    break;
    }
    case 4:{
    output = num1*num2;
    console.log(output);
    break;
    }
    case 5:{
        console.log('Exit');
        break;
    }
    default:{
    console.log("Invalid Option");
    }
}