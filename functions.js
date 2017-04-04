
function printName(name){
    console.log("hello, "+name);
}

function addNumbers(a,b,c){
    var value = a + b + c;
    return value;
}

var foo = function(a){
    console.log("ayyy->" + a)
}

var factory = {
    foo : function(){
        console.log("foo");
    },
    bar : function(){
        console.log("bar");
    }
}