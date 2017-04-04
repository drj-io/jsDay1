//var people = ["David","Three","Brian","Logan", "Molly", "Spencer"]

// [] = arrays
var array_example = ["item1", "item2", "item3"];
console.log(array_example[0])

// {} = object
var object_example = {
    name : "david",  // this is a property
    age: 41
}

console.log(object_example.name)

// "" = string
var string_example = "Hello world!";
    console.log(string_example
)

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


people.forEach(function(person){
    person.favoriteFoods.forEach(function(faveFood){
        console.log(person.name+ " likes " + faveFood)
    })
})