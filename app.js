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
    for (let i = 1; i <= n; i++) {  // mnożenie kolejnych liczb
        wynik *= i;                 // wynik = wynik * i    
    }
    return wynik;
}

function silnia_rek(n) {
    if (n === 0) {                  // warunek kończący rekurencję
        return 1;                   // silnia z 0 to 1
    }
    return n * silnia_rek(n - 1);   // wywołanie rekurencyjne - silnia z n to n * silnia z n-1
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

// 3. Dla obiektu tablicowego array istnieją metody: reverse oraz sort, które odpowiednio odwracają i sortują tablicę. Napisz własne implementacje tych metod.

function zadanie3() {
    let tab = [2, 1, 3, 7, 6, 9];
    let tab2 = reverse(tab);
    document.getElementById('wynik3').innerHTML = "Tablica odwrócona: " + tab2;

    let tab3 = sort(tab);
    document.getElementById('wynik3').innerHTML += "<br><br>Tablica posortowana: " + tab3;
}

function reverse(tab) {
    let tab2 = [];
    for (let i = tab.length - 1; i >= 0; i--) { // dla każdego elementu tablicy od końca
        tab2.push(tab[i]);                      // dodawanie elementów do nowej tablicy
    }
    return tab2;
}

function sort(tab) {
    let tab2 = [];
    for (let i = 0; i < tab.length; i++) {              // dla każdego elementu tablicy
        let j = 0;                                      // indeks nowej tablicy
        while (j < tab2.length && tab[i] > tab2[j]) {   // szukanie miejsca dla elementu
            j++;                                        // przesuwanie indeksu
        }
        tab2.splice(j, 0, tab[i]);                      // dodawanie elementu na odpowiednie miejsce (funcja splice dodaje elementy do tablicy na podanej pozycji)
    }
    return tab2;
}

/*
4. Palindrom jest to wyraz, który czytany od tylu jest taki sam jak czytany od przodu, 
   np. "kajak", "zakopany na pokaz".
   a) Napisz funkcję sprawdzającą czy podany jako parametr łańcuch znaków jest palindromem. 
   b) Napisz wersję tej funkcji działającą na liczbach, 
   np. palindrom liczbowym jest liczba: 12321, 7887.
*/

function zadanie4() {
    
    let tekst = document.getElementById('zadanie4_tekst').value;
    let wynik = palindrom(tekst);
    document.getElementById('wynik4').innerHTML = "Czy palindrom: " + wynik;

    let liczba = parseInt(document.getElementById('zadanie4_liczba').value);
    let wynik2 = palindrom_liczb(liczba);
    document.getElementById('wynik4').innerHTML += "<br><br>Czy palindrom liczbowy: " + wynik2;
    
}

function palindrom(tekst) {
    let tekst1 = tekst.replace(/\s/g, "").toLowerCase();    // usuwanie spacji i zmiana na małe litery
    let tekst2 = tekst1.split("").reverse().join("");       // odwrócenie tekstu
    return tekst1 === tekst2;                               // porównanie tekstu z odwróconym tekstem
}

function palindrom_liczb(liczba) {
    let liczba1 = liczba;
    let liczba2 = 0;
    while (liczba1 > 0) {                       // odwracanie liczby
        liczba2 = liczba2 * 10 + liczba1 % 10;  // dodawanie ostatniej cyfry do liczby2
        liczba1 = Math.floor(liczba1 / 10);     // usuwanie ostatniej cyfry z liczby1
    }
    return liczba === liczba2;                  // porównanie liczby z odwróconą liczbą
}

/*
5. Napisać funkcję, która przekształca heksadecymalną definicję koloru ("#FF0000") na reprezentację RGB ("rgb(255, 0, 0)").
np. getRGB("#FF0000"); // "rgb(255, 0, 0)"
*/

function zadanie5() {
    
    let kolor = document.getElementById('zadanie5').value;
    let wynik = getRGB(kolor);
    document.getElementById('wynik5').innerHTML = "Kolor RGB: " + wynik;
    
}

function getRGB(kolor) {
    // walidacja
    if (kolor.length !== 7) {
        return "Kolor powinien zaczynać się od # i mieć 6 znaków (np. #FF0000)";
    }
    if (kolor[0] !== "#") {
        return "Kolor powinien zaczynać się od symbolu #";
    }

    let r = parseInt(kolor.substring(1, 3), 16);  // konwersja dwóch znaków na liczbę. Drugi parametr funkcji parseInt to podstawa systemu liczbowego
    let g = parseInt(kolor.substring(3, 5), 16);  // powtórzenie dla zielonego i niebieskiego
    let b = parseInt(kolor.substring(5, 7), 16);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
