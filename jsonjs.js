import dog from './dog.json' assert{type: 'json'}

//console.log(dog);
//convert json to string
let dog_string = JSON.stringify(dog)
//console.log(dog_string);

//convert string to object
let dog_object = JSON.parse(dog_string)
console.log(dog_object)