//Lesson0: Promises are run as microTask whereas setTimeout is run as macroTask.

//executed in the same event-loop
console.log("1");

//scheduled for next event-loop
setTimeout( _ => console.log("4"), 0); 


//scheduled before next event-loop
Promise.resolve().then(_ => console.log("3"));

//executed in same event-loop
console.log("2");