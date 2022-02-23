// import 'Employee' consturctor 

const Employee = require("../lib/Employee");


// create Employee object 

test("creating employee object", ()=>{
    const employee = new Employee ('Mohamed', 33, 'drmo.afifi@gmail.com' );
    expect (employee.name).toEqual(expect.any(String))
    expect (employee.id).toEqual(expect.any(Number))
    expect (employee.email).toEqual(expect.any(String))
    
});


// getting name with getName()
test("get employee name", ()=>{
    const employee = new Employee ('Mohamed', 33, 'drmo.afifi@gmail.com' );
    expect (employee.getName()).toEqual(expect.any(String))
    
    
});

// getting name with getId() 
test("get employee id", ()=>{
    const employee = new Employee ('Mohamed', 33, 'drmo.afifi@gmail.com' );
    expect (employee.getId()).toEqual(expect.any(Number))
    
    
});

// getting name with getEmail()
test("get employee email", ()=>{
    const employee = new Employee ('Mohamed', 33, 'drmo.afifi@gmail.com' );
    expect (employee.getEmail()).toEqual(expect.any(String))
    
    
});

// getting name with getRole()
test("get employee role", ()=>{
    const employee = new Employee ('Mohamed', 33, 'drmo.afifi@gmail.com' );
    expect (employee.getRole()).toEqual(expect.any("employee"))
    
    
});