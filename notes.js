function sayHello (){
    console.log('Hello There!');
}
const sayHelloArrow = () => {
    console.log ('Hello There!') ;
    console.log ('Another line of code')
}
function greetByName (firstName, lastName) {
    console.log ('Hello' + firstName + lastName)
}

function addNumbers (a,b){
    console.log ('adding numbers ...')
    const sum= a+b ;
    return sum;
}
// area of a rectangle
function areaRectangle(height,width){
    const area = height*width ;
    return area;
}

// Calling the function

sayHello() ;
sayHelloArrow() ;
greetByName ( 'Matthew', 'Eski') ;
const result= addNumbers(2,3)
console.log(result);
const result2 = areaRectangle (4,5);
console.log(result2);