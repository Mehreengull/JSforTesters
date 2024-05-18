//Equlaity ---> Just compare values
let isequal = 5 == 5
console.log(isequal);

let equalvalue = 5 == '5'
console.log(equalvalue)

//Strict Equality --> Compare value and data type
let strictequal = 5 === "5"
//return false as datatypes are not same
console.log(strictequal);
let strictequaltype = "5" === "5"
//return true as datatypes are  same
console.log(strictequaltype);

//Inequlaity --> Compare values only
let isnotequal = "123" != 123
console.log(isnotequal); //return false as values are equal

//Strict inequality --> Compare values and data type
let strictinequal = "123" !== 123
console.log(strictinequal); //return true as datatypes are not same although values are

//Greate or equal
let greaterequal = 5 >= 2
console.log(greaterequal)

//Less or equal
let lessequal = 5 <= 5
console.log(lessequal);