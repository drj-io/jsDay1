//var people = ["David","Three","Brian","Logan", "Molly", "Spencer"]

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