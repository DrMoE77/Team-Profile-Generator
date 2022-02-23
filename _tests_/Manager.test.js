// import 'Manager' consturctor 

const Manager = require("../lib/Manager");


// create Manager object 

test("creating manager object", ()=>{
    const manager = new Manager ('Mohamed', 33, 'drmo.afifi@gmail.com', 99 );
   
    expect (manager.officenumber).toEqual(expect.any(Number))
    
});



// getting role with getRole()
test("get employee role", ()=>{
    const manager = new Manager ('Mohamed', 33, 'drmo.afifi@gmail.com', 99 );
    expect (manager.getRole()).toEqual('Manager')
    
    
});

 

