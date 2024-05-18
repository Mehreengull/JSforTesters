let objectsample = {
    fullname:"Ali",
    age:5,
    city: "Lahore",
    speak: function(){
        console.log(this.fullname + " speaks english");
    }
}
console.log("User name is " + objectsample.fullname);
console.log("User city is " + objectsample['city']);
objectsample.age = 7
console.log("User new age  is " + objectsample.age);
objectsample.isable = true
console.log(objectsample)
//call the method
objectsample.speak()