// Zad 1. Zaprojektuj klasę Car

// Podejście 1: Klasa Car z użyciem funkcji konstruktora
class Car {
    constructor(make, model, year, mileage = 0) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
    }

    getCarInfo() {
        return `${this.year} ${this.make} ${this.model} - ${this.mileage} km`;
    }

    resetMileage() {
        this.mileage = 0;
    }
}

// Podejście 2: Klasa Car z użyciem fabryki
function CarFactory(make, model, year, mileage = 0) {
    return {
        make,
        model,
        year,
        mileage,
        getCarInfo: function() {
            return `${this.year} ${this.make} ${this.model} - ${this.mileage} km`;
        },
        resetMileage: function() {
            this.mileage = 0;
        }
    };
}

// Podejście 3. Klasa Car z użyciem funkcji konstruktora
function CarConstructor(make, model, year, mileage = 0) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
    this.getCarInfo = function() {
        return `${this.year} ${this.make} ${this.model} - ${this.mileage} km`;
    };
    this.resetMileage = function() {
        this.mileage = 0;
    }
}


// Testowanie klas
const car1 = new Car('Toyota', 'Corolla', 2020);
const car2 = new CarFactory('Honda', 'Civic', 2021, 50000);
const car3 = new CarConstructor('Ford', 'Mustang', 2019, 10000);

document.writeln("Klasa Car z użyciem funkcji konstruktora: ");
document.writeln(car1.getCarInfo()); // 2020 Toyota Corolla - 0 km
document.writeln("<br><br>");
document.writeln("Klasa Car z użyciem fabryki: ");
document.writeln(car2.getCarInfo()); // 2021 Honda Civic - 0 km
document.writeln("<br><br>");
document.writeln("Klasa Car z użyciem funkcji konstruktora: ");
document.writeln(car3.getCarInfo()); // 2019 Ford Mustang - 10000 km
document.writeln("<br><br>");

// Zadanie 2. Napisz klasę writing, zawerającą metody wypisujące w różny sposób tekst w oknie przeglądarki
// klasa powinnam mieć metody: Write, Reverse. WriteEverySecondLetter
// każdy parametr przyjmuje obiekt typu string

class Writing {
    constructor(text) {
        this.text = text;
    }

    write() {
        document.writeln(this.text);
    }

    reverse() {
        document.writeln(this.text.split('').reverse().join(''));
    }

    writeEverySecondLetter() {
        document.writeln(this.text.split('').filter((_, index) => index % 2 === 0).join(''));
    }
}
// Testowanie klasy Writing
const writing = new Writing('Hello, World!');
writing.write(); // Hello, World!
writing.reverse(); // !dlroW ,olleH
writing.writeEverySecondLetter(); // Hlo ol!

document.writeln("<br><br>");

// Zadanie 3. funkcja sayHello, która przyjmuje jako argument obiekt z danymi osoby. Jeśli obiekt posiada właściwość name, to funkcja powinna wypisać w oknie przeglądarki "Hello, [name]!", w przeciwnym razie powinna wypisać tylko "Hello!".
// Przykładowy obiekt: { name: "John", age: 30, hobby: "reading" }
function sayHello(person) {
    if (person.name) {
        document.writeln(`Hello, ${person.name}!`);
    } else {
        document.writeln('Hello!');
    }
}
// Testowanie funkcji sayHello
const person1 = { name: "John", age: 30, hobby: "reading" };
const person2 = { age: 25, hobby: "sports" };
document.writeln("Obiekt z imieniem: ");
sayHello(person1); // Hello, John!
document.writeln("<br><br>");
document.writeln("Obiekt bez imienia: ");
sayHello(person2); // Hello!

// Napisz klasę shape do przechowywania danych o figurach geometrycznych.
// Z klasy shape dziedziczą klasy Rectangle i Triangle.

// Klasa Shape
class Shape {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}
// Klasa Rectangle dziedzicząca po klasie Shape
class Rectangle extends Shape {
    constructor(width, height) {
        super('Rectangle');
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}
// Klasa Triangle dziedzicząca po klasie Shape
class Triangle extends Shape {
    constructor(base, height) {
        super('Triangle');
        this.base = base;
        this.height = height;
    }

    getArea() {
        return (this.base * this.height) / 2;
    }
}

/*
5. Napisz przeglądarkowy program przeliczający liczby w systemie dziesiętnym na system binarny i heksadecymalny.

Podaj liczbę:
[edit box] [button]
Liczba w systemie dwójkowym: [przeliczona liczba binarna]
Liczba w systemie heksadecymalnym: [przeliczona liczba heksadecymalna]

*/

var zadanie1 = document.createElement("div");

let editBox = document.createElement("input");
editBox.type = "text";
editBox.placeholder = "Podaj liczbę";
zadanie1.appendChild(editBox);
let button = document.createElement("button");
button.innerHTML = "Przelicz";
zadanie1.appendChild(button);
let result = document.createElement("div");

button.addEventListener("click", function() {
    let number = parseInt(editBox.value);
    if (isNaN(number)) {
        result.innerHTML = "Niepoprawna liczba!";
    } else {
        let binary = number.toString(2);
        let hex = number.toString(16).toUpperCase();
        result.innerHTML = `Liczba w systemie dwójkowym: ${binary}<br>Liczba w systemie heksadecymalnym: ${hex}`;
    }
}
);
zadanie1.appendChild(result);
document.body.appendChild(zadanie1);
document.writeln("<br><br>");

/*

6. Kalkulator.
Napisz przeglądarkową wersję kalkulatora z systemu Windows.
Program powinien działać na przyciskach i zawierajać operacje: +,-,*,/,=.

*/

let tempMemo = 0;
let tempOperation = "";

let calculator = document.createElement("div");
calculator.style = "width: 200px; height: 300px; border: 1px solid black; padding: 10px; display: flex; flex-direction: column; justify-content: space-between; align-items: center; margin: 0 auto; font-size: 20px;";
let display = document.createElement("input");
display.type = "text";
display.style = "width: 100%; height: 40px; font-size: 20px; text-align: right; margin-bottom: 10px;";
calculator.appendChild(display);

let buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '=', '+', 'c'
];
let buttonContainer = document.createElement("div");
buttonContainer.style.display = "grid";
buttonContainer.style.gridTemplateColumns = "repeat(4, 1fr)";
buttonContainer.style.gap = "10px";
buttons.forEach(function(button) {
    let btn = document.createElement("button");
    btn.innerHTML = button;
    btn.style = "width: 100%; height: 40px; font-size: 20px; cursor: pointer;";
    buttonContainer.appendChild(btn);
    btn.addEventListener("click", function() {
        if (button === '=') {
            if (tempOperation && display.value) {
                let result;
                switch (tempOperation) {
                    case '+':
                        result = tempMemo + parseFloat(display.value);
                        break;
                    case '-':
                        result = tempMemo - parseFloat(display.value);
                        break;
                    case '*':
                        result = tempMemo * parseFloat(display.value);
                        break;
                    case '/':
                        result = tempMemo / parseFloat(display.value);
                        break;
                }
                display.placeholder = '0';
                display.value = result;
                tempMemo = 0;
                tempOperation = "";
            }
        } else if (['+', '-', '*', '/'].includes(button)) {
            if (display.value) {
                tempMemo = parseFloat(display.value);
                tempOperation = button;
                display.placeholder = parseFloat(display.value) + button;
                display.value = '';
            }
        } else if (button === 'c') {
            display.placeholder = '0';
            display.value = '';
            tempMemo = 0;
            tempOperation = "";
        } else {
            display.value += button;
        }
    });
});
calculator.appendChild(buttonContainer);
document.body.appendChild(calculator);
document.writeln("<br><br>");