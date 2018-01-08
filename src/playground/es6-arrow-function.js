/*const square = function (x){
    return x*x;
};

const squareArrow = (x) => x*x ;

console.log(squareArrow(6));*/

const fullName ='abbas ahmadi';
//const firstName ='radin';

/*let firstName='radin';
 if (fullName) {
     firstName = fullName.split(' ')[0];
     console.log(firstName);
 };

 console.log(firstName);
*/
const firstName = (fullName) => fullName.split(' ')[0];
console.log(firstName('ali ahmadi'));