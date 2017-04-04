var foods = ['sandwich', 'rutabaga', 'cheese'];

//console.log(foods);

var ages = [10, 5, 3, 2];


var person = {
    name: "David",
    age: 41,
    favorite_foods: ["Mexican", "Sushi", "Other"]
}
// console.log(person.favorite_foods[0])
// console.log(person.favorite_foods[1])
// console.log(person.favorite_foods[2])

person.favorite_foods.forEach(function(a_single_food_that_David_likes){
    console.log("david likes "+ a_single_food_that_David_likes)
})

// console.log(person.age)



// ages.forEach(function(age){    
//     console.log("age: "+ age)
// });

// foods.forEach(function(foodItem){
//    console.log("I ate "+ foodItem); 
// })
