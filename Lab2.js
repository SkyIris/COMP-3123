//Akeen Zhong
//COMP3123 - CRN 18346
//Lab Exercise 2
//September 15, 2024


//Exercise 1

greeter = (myArray, counter) => {
    let greetText = "Hello, ";

    for (index in myArray) {
        console.log(`${greetText} ${myArray[index]}`);
    }
}

greeter(["Rosetta", "Alisa", "Lucia"], 3)

//Exercise 2

capitalize = (input) => {
    const myArray = Array.of(...input);
    let [firstLetter, ...others] = myArray;
    var otherLetters = ""
    for (index in others){
        otherLetters += others[index]
    }

    return (firstLetter.toUpperCase() + otherLetters);


}

console.log(capitalize("foobar"));
console.log(capitalize("nodeJs"));

//Exercise 3
const colors = ['red', 'green', 'blue']


const capitalizedColors = colors.map((color) => capitalize(color));

console.log(capitalizedColors);

//Exercise 4
var values = [1, 60, 34, 30, 20, 5]

const filterLessThan20 = values.filter((number) => number < 20);

console.log(filterLessThan20);

//Exercise 5
var array = [1, 2, 3, 4]

const calculateSum = array.reduce((newElement, sum) => newElement + sum);
const calculateProduct = array.reduce((newElement, product) => newElement * product);
console.log(calculateSum);
console.log(calculateProduct);

//Exercise 6

class Car {
    constructor(model, year) {
        this.model = model
        this.year = year
    }

    details() {
        return `Model: ${this.model} ${this.year}`;
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);

        this.balance = balance;
    }

    info() {
        return `${this.year} ${this.model} has a balance of $${this.balance}`;
    }
}


const car = new Car("Pontiac Firebird", 1976);

console.log(car.details());

const sedan = new Sedan("Volvo SD", 2018, 30000);
console.log(sedan.info());