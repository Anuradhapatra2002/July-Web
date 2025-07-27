console.log("execution started ");

function A() {
    console.log("a");
    
    
}
A()
function B(){
    console.log("b");
    
}
function c(){
    console.log("c");
    B();
    console.log("c2");
    
    
}
function D(){
    console.log("d");
    c()
    console.log("d2");
    
    
}
D()
console.log("Exection ended");

