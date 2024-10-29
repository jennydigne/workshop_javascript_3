const fruits = ["Apple", "Banana", "Orange"];

// Task 1: 
const moreFruits = [...fruits, "Mango", "Pineapple"];
console.log(moreFruits);

// Task 2: 
const startingFruits = ["Pear", "Melon", "Kiwi"];

const totalFruits = [...startingFruits, ...moreFruits];
console.log(totalFruits);

// Task 3: 
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
};

const updatedCar = { ...car, year: 2022 }
console.log(updatedCar);

// Task 4: 
const coloredCar = { ...updatedCar, color: "Red" }
console.log(coloredCar);

// Task 5: 
function updateCarModel(obj, newModel) {
    return { ...obj, model: newModel }
}

updateCarModel(car, "Yaris");
console.log(updateCarModel(car, "Yaris"));

// Task 6: 
const newModelCar = updateCarModel(coloredCar, "Camry");
console.log(newModelCar);

