// Write a program to find how many letters, numbers, and special characters are in a user entered string.
let prompet = require('prompt-sync')();
let user = prompet('Enter anything: ');
// let count = user.length;
let w = user.match(/[a-z]/gi);
let num = user.match(/[0-9]/gi);
let spChar = user.match(/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/gi);

if(user = num && w){
    console.log(num.length +" Numbers"+" Letters"+w.length);
}else if (user = num){
    console.log(num.length + " Numbers");
} else if(user = w ){
    console.log(w.length + " Letter");
} else if(user = spChar){
    console.log(`Special character(s)`);
} 







