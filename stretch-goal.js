const student = { name: "Alex", age: 20, grades: [85, 90, 78] };
const course = {
    title: "JavaScript Basics",
    duration: "3 months",
    instructor: {
        firstName: "Sara",
        lastName: "Jones",
    },
};

const numbers = [0, 15, -3, 9, null, 22, undefined, 8, NaN, false, 100];

// Task 1: 
const updatedStudent = { ...student, age: 21, major: "Computer Science" }
console.log(updatedStudent);

// Task 2: 
const { instructor: { firstName } } = course;
const instructorFirstName = firstName;
console.log(instructorFirstName);


// Task 3: 
function filterValidNumbers(numbers) {
    const validNumbers = numbers.filter((num) => {
        return num > 0;
    })
    return validNumbers;
}

console.log(filterValidNumbers(numbers));

// Task 4: 
function analyzeStudentGrades(student) {
    const { name, grades } = student;
    let sum = 0;
    grades.forEach((item) => {
        return sum += item;
    })
    const averageGrade = sum / grades.length;
    if (averageGrade > 85) {
        console.log(`Excellent performance, ${name}`);
    } else if (averageGrade >= 70 && averageGrade <= 85) {
        console.log(`Good job, ${name}`);
    } else if (averageGrade < 70) {
        console.log(`${name}, you need to improve.`)
    }
}

analyzeStudentGrades(updatedStudent);

