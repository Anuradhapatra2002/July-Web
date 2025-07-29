function f1(b ) {

    console.log( "value of b :" , b);
    console.log("type of b :",typeof b)

    b()//
    return "java tc"

}

// f1(true)
// f1();
// f1("anu")

function sayHeloo() {

    console.log("Hello everyone");
}
//f1(sayHeloo()) // --> f1 undefined  // bcz --> say hello function return undefined
f1(sayHeloo)

