let weather = "it is raining"

// if (weather == "it is raining"){
//     console.log("Take an umberala");
// }
weather = "sunny"
//condition is true then run if block else go to else block
// if (weather == "it is raining"){
//     console.log("Take an umberala");
// }
// else{
//     console.log("Wear Sunglasses");
// }
// //else if
// weather = "cloudy"
// if (weather == "it is raining"){
//     console.log("Take an umberala");
// }
// else if(weather == "cloudy"){
//     console.log("Wear Jacket");
// }
// else{
//     console.log("Sunglassses r ok");
// }

//Switch
weather = "cloudy"
switch (weather) {
    case "raining":
        console.log("It is raining");
        break;
    case "cloudy":
        console.log("Take a jacket");
        break;
    case "sunny":
        console.log("Use sunglasses");
    default:
        console.log("Bananas");
        break;
}