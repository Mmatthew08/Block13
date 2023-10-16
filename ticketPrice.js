const age  = 22;
const day = 'Monday' ;
let price = 0;
if (age<=2) {
    console.log('Free')
} else if (age<13 && age>2 ) {price=5;
} else if (age>= 65) {
    price=6 ;
} else {price=8}
if(day==='Tuesday') {
price=price/2
}
console.log ('The price is $' + price)