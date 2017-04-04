
var people = [
    {
        name: "David",
        favoriteFoods: ["Mexican", "Sushi"],
        age : 41
    },
    {
        name: "Three",
        favoriteFoods: ["Mexican", "Home Cooked Meal!"]
    },
    {
        name: "Brian",
        favoriteFoods: ["Seafood", "Steak"]
    },
    {
        name: "Logan",
        favoriteFoods: ["Sushi", "Burgers"]
    },
    {
        name: "Molly",
        favoriteFoods: ["Pasta","Sushi"]
    },
    {
        name: "Spencer",
        favoriteFoods: ["Curry","Breakfast Burritos"]
    },
]


// people.forEach(function(person){
//     printName(person.name)
// })
printName("david");
foo("foooo");

function printName(name){
    console.log("hello, "+name);
}

function addNumbers(a,b,c){
    var value = a + b + c;
    return value;
}

var addedNumbers = addNumbers(5,5,5);

var placeholder = 0; 
for (var i =0; i<5; i++){
    placeholder = addNumbers(5,placeholder,10);    
}
console.log(placeholder);

var foo = function(a){
    console.log("ayyy->" + a)
}

foo("beeee");

var factory = {
    foo : foo,
    bar : function(){
        console.log("bar");
    }
}


var person = {
    name : "David", 
    foo : function(){
        console.log("hello!")
    }
}

factory.foo(); 

person.foo();