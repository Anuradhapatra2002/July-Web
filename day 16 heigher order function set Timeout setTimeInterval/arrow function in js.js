//function expression syntax
// < const, let><variable Name> = function (){} 

//arrow function syntax
// < const,let><variable token> = (list of parameter)=>{//body}

//if the parameter is single then paranthisis is optional

// let x = fullname=>{
//     console.log(fullname , "hii everyone")
// };

// const x = (fullname , lastname = "last name")=>{
//     console.log(fullname , lastname , "hii everyone good morning");
// const x = fullname =>{ console.log(fullname , lastname , "hii everyone good morning");

// const square  =(num)=>{
//     console.log("Square of number is : " , num * num);
        

// }

//if only one stataement then {} is optional


// const square = num =>console.log("square of num is :" , num*num);

//if there is single statement and not use collbraces then dont use return keyword if use it is generate error

const square =num =>  num* num
console.log(
square(7));



