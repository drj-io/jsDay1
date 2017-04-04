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

console.log("there are "+  people.length +" people in the class");

for (var i = 0; i < people.length ; i=i+2) {
   console.log("i=" + i + " - name: " + people[i].name);
   // more statements
}

