let array = ["Apple", "Bananna", "Carrots", "Dogs"]
//gives length of array
console.log(array.length);
//gives index of element specified
console.log(array.indexOf("Carrots"))
//gives the element at defined index
console.log(array[3]);
//assign value of specifed index to variable
let animal = array[2]
console.log(animal)
//add element at specified index 
array[2] = "Elephant"
console.log(array)

//Create an empty array
let empty_array = []
//adds 1 element at end of array
empty_array.push("Green")
empty_array.push("Purple")
empty_array.push("Yellow")
console.log(empty_array[1]);

//loop through an array
for (let i = 0; i <empty_array.length; i++){
    console.log("Looping the array " + empty_array[i]);
}
//filter
let numbers = [1,2,3,4,5,6,7,8]
let evennumbers = numbers.filter(function(number){
    return number % 2 === 0
})
console.log(evennumbers);
//forEach loop
array.forEach(function (array) {
    console.log(array);
    
})
//join
let words = ["hello", "Mehreen"]
let sentence = words.join(' ')
console.log(sentence)

//slice
let numberslist = [1,2,3,4,5,6]
//last index not included
let slicednumbers = numberslist.slice(1,3)
console.log(slicednumbers);
//last value of array
let a = numberslist.slice(-1)
console.log(a)

// create multi dimensional arrays
let matrix = [
    [1,2,3], //row 0
    [4,5,6], //row 1
    [7,8,9] //row 2
]
//get 1st row 1st number
let b = matrix[0][0]
console.log(b);

for (let i = 0; i< matrix.length; i++){ //loop through rows
    for (let j = 0; j < matrix[i].length; j++){ //loop through columns
        console.log("loop through the rows "+ matrix[i][j]);
    }
   
}