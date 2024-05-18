function greet() {
    console.log("Hello Hi");
}
greet()

//function with parames
function hello(name) {
    console.log("hello " + name);
    
}
//value provided is arguments
hello('Alex')

//anonymous function
let an_function = function(){
    console.log("i am anonymous");
}
an_function()

//arrow fumction
let sayhello = () =>{
    console.log("Hello ARROW ");
}
sayhello()

//another syntax for arorow
let add = (a,b) => a+b
console.log(add(1,8))