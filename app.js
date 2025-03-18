// 1. Funkcja silnia(n) obliczająca silnię podanej liczby n - wersja iteracyjna i rekurencyjna
function zadanie1() {

    let n = parseInt(document.getElementById('zadanie1').value);
    let wynik = silnia_iter(n);
    document.getElementById('wynik').innerHTML = "Silnia iteracyjnie: " + wynik;
    console.log(wynik);

    let wynik2 = silnia_rek(n);
    document.getElementById('wynik2').innerHTML += "Silnia rekurencyjnie: " + wynik2;
    console.log(wynik2);
    
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