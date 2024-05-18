for (let i =0; i<5; i++){
    console.log(`I am a for loop for ${i}`);
}
let a = 3
while (a < 10) {
    console.log("loger" + a);
    a++
}

let b = 0
do {
    console.log("do while loop" + b);
    b++
} while (b < 3);

//for in loop iterate over an object
let obj = {a:1, b:2, c:3}
for (let key in obj){
    console.log(`${key} in loop and value inside the key is ${obj[key]}`);
}

let arr = [1,2,3,4]
for (let val of arr){
    console.log(`${val} of array `);
}
