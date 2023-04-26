let container = document.getElementById("container");
let textBtn = document.getElementById("text-btn");
let htmlBtn = document.getElementById("html-btn");

textBtn.addEventListener('click', () => {
    container.innerText = "This content is written by <strong>innerText</strong> property and should show html tags.";
});

htmlBtn.addEventListener('click', () => {
    container.innerHTML = "This content is written by <strong>innerHTML</strong> property and shouldn't show html tags.";
});

let names = [
    "Ahmed",
    "Gamal",
    "Ali",
    "Nada",
    "Habiba"
];

console.log("names array");
console.log(names);

let namesWithAges = names.map((value, index) => {
    let age =  Math.floor(Math.random() * 30) + 1;
    return {
        id: index + 1,
        name: value,
        age
    };
});

console.log("names with ages array (names array after map function)");
console.log(namesWithAges);

let filteredNames = names.filter((value, index) => value[0] !== "A");

console.log("names that doesn't start with 'A' letter (names array after filter function)");
console.log(filteredNames);

let ages = [
    19,
    22,
    25
];

console.log("ages array");
console.log(ages);

let agesSum = ages.reduce((prev, curr, index) => prev + curr);

console.log("sum of ages (ages after reduce function)");
console.log(agesSum);