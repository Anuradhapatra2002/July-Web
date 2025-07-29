// const a = 10

// //function expression 
// const outer = function(){
//     const x=10;
//     const b = 20;
// const add = function () {
//     let x=100
//     console.log("addition is " , a+b); // To implement the concept of scope chaning
// }
//  return add
// }

// const fun = outer()
// console.log(fun);
// fun()
// console.dir(fun)



function f1(){
    let firstName = "asutosh"
    let lastName = "sahoo"

    function f2() {
        console.log("First name : " , firstName )
        
        
    }
    return f2;


}
const a = f1()
f1()

console.dir();




