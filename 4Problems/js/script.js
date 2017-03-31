
// first problem solver
function naturalSum() {
	do {
		var n = prompt("Ova funkcija daje sumu prvih N prirodnih brojeva. Unesite N");
	}
	while  ( (n < 1) || !((n % 1) == 0) || (isNaN(n) ));

	n =Number(n);
	var sum = 0;

	for (var i = 1; i <= n; i++) {
		sum = sum + i;
	}
	calculate("Suma prvih prirodnih N brojeva je ", sum);

};

// second problem solver
function factorial() {
	do {
		var n = prompt("Ova funkcija daje faktorijel zadatog prirodnog broja N. Unesite N");
	}
	while  ( (n < 1) || !((n % 1) == 0) || (isNaN(n) )); 

	n = Number(n);
	var fact = 1;

	for (var i = 1; i <= n; i++) {
		fact = fact * i;
	}
	calculate("Faktorijel zadatog broja je ", fact);
};

// third problem solver
function shopping() {
	do {
		var wallet = prompt("Ova funkcija racuna koliko artikala mozete da priustite. Koliko imate novca?");
	}
		while  ( (wallet <= 0) || (isNaN(wallet) )); 


	do {
		var price = prompt("Koliko kosta to sto zelite da kupite?");
	}
		while ( (price <= 0) || (isNaN(price) ));

	wallet = Number(wallet);
	price = Number(price);
	var counter = 0;


	while ( wallet >= price ) {

		wallet -= price;
		counter++;
	}
	calculate("Broj komada koji možete da priuštite je ", counter);
}

//fourth problem solver
function sumBetweenTwoNumbers() {
	do {
		var lowerNumber = Number(prompt("Ova funkcija računa zbir između 2 cela broja. Unesite prvi broj (mora biti ceo broj):"));
	}
	while ( (lowerNumber % 1!= 0) || isNaN(lowerNumber) )

	do {
		var higherNumber = Number(prompt("Unesite još jedan ceo broj veći od prethodnog:"));
	}
	while ( (higherNumber % 1!= 0) || (lowerNumber >= higherNumber) || isNaN(higherNumber))


	var sum = 0;
	    
	for (var i = lowerNumber; i <= higherNumber; i++) {
		sum += i;
	}
	calculate("Zbir svih celih brojeva između ta 2 broja je ", sum);
};

// function that handles the dom elements, is called at the end of every problem
// to deliver the results
function calculate(text, result) {

	var resultElement = document.createElement("p");       
	var resultText = document.createTextNode(text + result + ".");  
	resultElement.appendChild(resultText);                    
	var resultParent = document.getElementById("resultBox");
	resultParent.insertBefore(resultElement, resultParent.childNodes[0]); 

};

// eventListeners for the buttons
document.getElementById("btn1").addEventListener("click", naturalSum);
document.getElementById("btn2").addEventListener("click", factorial);
document.getElementById("btn3").addEventListener("click", shopping);
document.getElementById("btn4").addEventListener("click", sumBetweenTwoNumbers);
