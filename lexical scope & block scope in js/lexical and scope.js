function A(){
    let x=10;

    function B(){
        const y=20;
        console.log(y);

        function c(){
            const z=30;
            console.log(z)

            console.log(y); // trigger clouser(B)
            console.log(x); // trigger clouser(c)
            
            
        }
        c()
        
    }
    B()


}
//B() // B is not define bcz it is local in A
const a="hii everyone"
console.log(a);
A()
console.log("program ended");


