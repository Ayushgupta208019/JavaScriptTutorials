function fullName(firstname){  //function defination
    // function body
    console.log(firstname); //function calling
    morningGreetings("Hello good Morning "+firstname) //call another function under the another function
}
fullName('Ayush')

function morningGreetings(greet){ //function greet
    console.log(greet);
}

function additionOperation(data1, data2){
    console.log(data1 + data2);
}
additionOperation(4,5);

function multiFunction(x,y){
    return x + y;
}

let x = multiFunction(10, multiFunction(20,30));
console.log(x);

function a(){
    return 60;
}

function b(){
    return 40;
}

function additionData(x,y){
    return x + y;
}
let result = additionData(a(), b());
console.log(result);
