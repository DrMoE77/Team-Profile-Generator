// import 'Intern' consturctor 

const Intern = require("../lib/Intern");


// create Intern object 

test("creating intern object", ()=>{
    const intern = new Intern ('Mohamed', 33, 'drmo.afifi@gmail.com', 'USYD' );
   
    expect (intern.github).toEqual(expect.any(String))
    
});


// getting school with getSchool()
test("get intern school", ()=>{
    const intern = new Intern ('Mohamed', 33, 'drmo.afifi@gmail.com', 'USYD' );
    expect (intern.getSchool()).toEqual(expect.any(String))
    
    
});


// getting role with getRole()
test("get employee role", ()=>{
    const intern = new Intern ('Mohamed', 33, 'drmo.afifi@gmail.com', 'USYD' );
    expect (intern.getRole()).toEqual('Intern')
    
    
});

