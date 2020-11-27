
const RESPONSES = ["c", "b", "d", "a", "a"];
let userResponses = [];
let checkArray = [];

const FORM = document.querySelector(".formulaire");
const TITLERESULT = document.querySelector("h2");
const HELPRESULT = document.querySelector(".aide");
const NOTERESULT = document.querySelector(".note");
const ALLQUESTION = document.querySelectorAll(".question-block");

/** Des que l'utilisateur soumet le formulaire grâce à l'EVENTLISTENER */
FORM.addEventListener("submit", (event) => {
	/** On ne souhaoite pas que la page se recharge */
	event.preventDefault();

	/* On boucle sur le tableau des réponses* */
	for (let i = 1; i <= RESPONSES.length; i++) {
		/**
		 * On push les réponses dans le tableau userResponses
		 * grace à querySelector
		 */
		userResponses.push(
			document.querySelector(`input[name="q${i}"]:checked`).value
		);
	}

	checkIsTrue(userResponses);

	userResponses = [];
});

function checkIsTrue(array) {
	/** On boucle tant que i < la longueur du tableau passer en parametre */

	for (let i = 0; i < array.length; i++) {
		/** Si reponse juste alors return true sinon return false */
		if (array[i] === RESPONSES[i]) {
			checkArray.push(true);
		} else {
			checkArray.push(false);
		}
	}

	displayResult(checkArray);
	console.log(checkArray);
	colorErrors(checkArray);
	checkArray = [];
}

function displayResult(array) {
	/** creer une const qui récupère le nombre d'élément qui sont différent de true */

	const nbFalse = array.filter((element) => element === false).length;
	console.log(nbFalse);
	

	switch (nbFalse) {
		case 0:
			TITLERESULT.innerText = "✅✅ Bravo c'est un sans faute ! ✅✅";
			HELPRESULT.innerText = "respect";
			NOTERESULT.innerText = "5/5";
			break;
		case 1:
			TITLERESULT.innerText = "✅😖 Vous y êtes presque! 😖✅";
			HELPRESULT.innerText = "Retentez votre chance";
			NOTERESULT.innerText = "4/5";
			break;
		case 2:
			TITLERESULT.innerText = "😖 T'as la moyenne ! 😖";
			HELPRESULT.innerText = "Ne t'arrête pas là";
			NOTERESULT.innerText = "3/5";
			break;
		case 3:
			TITLERESULT.innerText = "❌😖 Bof bof ! 😖❌";
			HELPRESULT.innerText = "Retente, tu n'as rien à perdre";
			NOTERESULT.innerText = "2/5";
			break;
		case 4:
			TITLERESULT.innerText = "❌❌😖 Oulala c'est pas jojo ! 😖❌❌";
			HELPRESULT.innerText = "Va boire un café et reviens après";
			NOTERESULT.innerText = "1/5";
			break;
		case 5:
			TITLERESULT.innerText = "❌❌❌ Arrête tout ! ❌❌❌";
			HELPRESULT.innerText = "Va boire un café et ne reviens pas";
			NOTERESULT.innerText = "0/5";
			break;
		default:
			"Oups, cas innatendu";
	}
	
} 

function colorErrors(arrayBool) {
	/** Boucle tant que i < arrayBool */
	for (let i = 0; i < arrayBool.length; i++) {
		/** Si la valeur de l'index i === true ALORS j'indique que je change son background*/
		if (arrayBool[i] === true) {
			// Grace à style.background
			ALLQUESTION[i].style.background = "#82e0aa";
		} else {
			/** Sinon je le met en rouge */
			ALLQUESTION[i].style.background = "#e59866";
			ALLQUESTION[i].classList.add("echec");

			setTimeout(() => {
				ALLQUESTION[i].classList.remove("echec");
			},400);
		}
	}
}

ALLQUESTION.forEach((question) => {
	question.addEventListener("click", () => {
		question.style.background = "";
	});
});