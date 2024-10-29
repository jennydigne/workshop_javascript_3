const ages = [12, 18, 25, 8, 30, 16];

// Task 1: 
const adultAges = ages.filter((num) => {
    return num >= 18;
})

console.log(adultAges);

// Task 2: 
const testArr = [6, 89, 24, 18, 33, 17]

function getAdultAges(arr) {
    const adults = arr.filter((num) => {
        return num >= 18;
    })
    return adults;
}

console.log(getAdultAges(testArr));

// Task 3: 
const adultAges2 = getAdultAges(testArr);
console.log("adultAges2", adultAges2);