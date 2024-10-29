// Task 1: 
const globalVar = "I am global";

// Task 2: 
function testScope() {
    const localVar = "I am local";
    console.log(localVar);
    console.log(globalVar);
}

testScope();

// Task 3: Inside `testScope`, print both `globalVar` and `localVar`.

// Task 4: 
console.log(localVar);
