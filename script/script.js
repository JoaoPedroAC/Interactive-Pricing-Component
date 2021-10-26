const slider = document.getElementById('myRange');
const valor = document.getElementById('pay-month');
const pages = document.getElementById('pages');

// vai pegar os valores do input e imprimi-las na pagina
function writeSlider() {
	valor.innerHTML = parseFloat(slider.value).toFixed(2).replace('.', ',');
	pages.innerHTML = `${parseInt(slider.value)}k`;
}
// vai alterar a cor de fundo do input range *** nao executa quando no telefone
slider.addEventListener('input', function () {
	// aqui vai fazer um calculo de porcentagem, já que o mesmo é para isso
	let porcent = Number(
		((slider.value - slider.min) / (slider.max - slider.min)) * 100
	);
	slider.style.background = `linear-gradient(
		90deg,
		rgb(183, 1, 255, 0.801) ${porcent}%,
		rgba(79, 0, 143, 0.801) ${porcent}%
	)`;	
	// if (this.value <= 0) {
	// 	slider.style.opacity = '0.7';
	// 	slider.style.transition = '0.5s'		
	// }else if(this.value > 0){
	// 	slider.style.transition = '0.5s'		
	// 	slider.style.opacity = '1';
	// }
});

// ANIMAÇÃO DO INPUT CHECHBOX
const box = document.getElementById('checkBox');
const ball = document.getElementById('ball');

box.addEventListener('click', function () {
	if (this.checked === false) {
		// console.log(this.checked)
		ball.style.left = `4px`;
		ball.style.transition = `0.5s`;
	} else {
		ball.style.left = `52%`;
		ball.style.transition = `0.5s`;
	}
});
