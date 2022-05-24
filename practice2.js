//functions
     //create the function

     function(greet){
        console.log("Hello");
    }
    //call the function
    greet();
    
    //add an argument
    function greet(name){
        console.log("Hello " +name);
        greet();     // will be undefined
    
        greet("Carlos");
        greet("Kyle");
        greet("Mario");
    }
    function greet(name){
        let test = "test";
        console.log("Hello " +name);
    }
    console.log("test");
    error - calling the function outside the scope for test (test in{} and the call outside the {})