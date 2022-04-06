// Create lion object here
var lion = {
    name: "Simba",
    legs: 4,
    tails: 1
};
// End of lion object 

// Create a function below this line
function myFunction(param1, param2) {
    lion.roar = "roar-roar";
    return lion;
}
console.log(myFunction("roar", "roar-roar"));
// End of function
module.exports = myFunction;