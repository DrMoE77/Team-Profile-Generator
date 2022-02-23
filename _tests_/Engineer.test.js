// import 'Engineer' consturctor 

const Engineer = require("../lib/Engineer");


// create Engineer object 

test("creating engineer object", ()=>{
    const engineer = new Engineer ('Mohamed', 33, 'drmo.afifi@gmail.com', 'drmoe77' );
   
    expect (engineer.github).toEqual(expect.any(String))
    
});


// getting GitHub with getGitHub()
test("get engineer github", ()=>{
    const engineer = new Engineer ('Mohamed', 33, 'drmo.afifi@gmail.com', 'drmoe77' );
    expect (engineer.getGithub()).toEqual(expect.any(String))
    
    
});


// getting role with getRole()
test("get employee role", ()=>{
    const engineer = new Engineer ('Mohamed', 33, 'drmo.afifi@gmail.com', 'drmoe77' );
    expect (employee.getRole()).toEqual('Engineer')
    
    
});

