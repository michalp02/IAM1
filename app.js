// 1. Funkcja silnia(n) obliczająca silnię podanej liczby n - wersja iteracyjna i rekurencyjna
function zadanie1() {

    let n = parseInt(document.getElementById('zadanie1').value);
    let wynik = silnia_iter(n);
    document.getElementById('wynik1').innerHTML = "Silnia iteracyjnie: " + wynik;

    let wynik2 = silnia_rek(n);
    document.getElementById('wynik1').innerHTML += "<br><br>Silnia rekurencyjnie: " + wynik2;
    
}

function silnia_iter(n) {
    let wynik = 1;
    for (let i = 1; i <= n; i++) {
        wynik *= i;
    }
    return wynik;
}

function silnia_rek(n) {
    if (n === 0) {
        return 1;
    }
    return n * silnia_rek(n - 1);
}

// 2. Funkcja która dodaje do siebie n liczb, podanych jako parametry funkcji. Wykorzystać do tego tablice arguments.

function zadanie2() {

    let wynik = suma(1, 2, 3, 4, 5);
    document.getElementById('wynik2').innerHTML = "Suma: " + wynik;
    
}

function suma() {
    let wynik = 0;
    for (let i = 0; i < arguments.length; i++) {
        wynik += arguments[i];
    }
    return wynik;
}