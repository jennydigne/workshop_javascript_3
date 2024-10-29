// Task 1: 
const values = [0, "hello", null, undefined, false, "false", -1, "JavaScript"];

// Task 2:
function checkTruthiness(val) {
    if (val) {
        console.log("truthy");
    } else {
        console.log("falsy");
    }
}

// Task 3: 
values.forEach((val) => {
    checkTruthiness(val);
})

// Task 4:
for (let i = 0; i < values.length; i++) {
    checkTruthiness(values[i]);
}

// Task 5:
let i = 0;
while (i < values.length) {
    checkTruthiness(values[i]);
    i++;
}