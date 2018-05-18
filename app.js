var nameUser = prompt("Bienvenid@ a la trivia, ingresa tu nombre.");
document.getElementById("saludoBienvenida").innerHTML = "Bienvenid@ " + nameUser;

var confirmation = prompt("¿quieres jugar la trivia?");

if(confirmation == "si"){
	alert("Entonces Empecemos :)");
	var questions = [
		"¿Desdes que edad se puede postular a Laboratoria?",
		"¿Laboratoria esta dirigido a mujeres u hombres?",
		"Que lenguaje de programación se aprende en Laboratoria?",
		"¿En cuantos paises está laboratoria?",
		"¿Existe limite de edad en Laboratoria?",
		"¿Cuantos meses dura el Bootcamp?"
	];

	var results = ["18", "mujeres", "javascript", "4", "no", "6"]
	var correctAnswerIds = [
		"respuestaCorrectaUno",
		"respuestaCorrectaDos",
		"respuestaCorrectaTres",
		"respuestaCorrectaCuatro",
		"respuestaCorrectaCinco",
		"respuestaCorrectaSeis"
	];

	var wrongAnswerIds = [
		"respuestaIncorrectaUno",
		"respuestaIncorrectaDos",
		"respuestaIncorrectaTres",
		"respuestaIncorrectaCuatro",
		"respuestaIncorrectaCinco",
		"respuestaIncorrectaSeis"
	];

	totalPoints = 0;
	points = 100;


	document.getElementById("resultados").innerHTML = "Resultados:";

	var count = 0;
	var response = '';
	while(questions.length > count) {
		response = prompt(questions[count]);
		if(response == results[count]){
			totalPoints += points;
			document.getElementById(correctAnswerIds[count]).innerHTML = " Respuesta " + (count + 1) + ": Excelente!! la respuesta es " + results[count] + ". <b>Puntaje:</b> " + points;
		}else{
			document.getElementById(wrongAnswerIds[count]).innerHTML = "Respuesta " + (count +1) + ": Lastima, no acertaste. <b>Puntaje: 0</b> ";
		}
		count++;
	}

	document.getElementById("puntajeTotal").innerHTML = "Obtuviste "+totalPoints+" puntos de un total de 600.";

}else if (confirmation == "no"){
	document.getElementById("mensajeDespedida").innerHTML = ":'(";

}
