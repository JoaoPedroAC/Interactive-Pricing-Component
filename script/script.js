const slider = document.getElementById('myRange');
const valor = document.getElementById('pay-month');
const pages = document.getElementById('pages');

// vai pegar os valores do input e imprimi-las na pagina
function writeSlider() {
	valor.innerHTML = parseFloat(slider.value).toFixed(2).replace('.', ',');
	pages.innerHTML = `${parseInt(slider.value)}k`;
}
// vai alterar a cor de fundo do input range
slider.addEventListener('mousemove', function () {
	// aqui vai fazer um calculo de porcentagem, já que o mesmo é para isso
	let porcent = Number(
		((slider.value - slider.min) / (slider.max - slider.min)) * 100
	);
	slider.style.background = `linear-gradient(
		90deg,
		rgb(183, 1, 255, 0.801) ${porcent}%,
		rgba(79, 0, 143, 0.801) ${porcent}%
	)`;
});

// ANIMAÇÃO DO INPUT CHECHBOX
const box = document.getElementById('checkBox');
const ball = document.getElementById('ball');

box.addEventListener('click', function(){
	if (this.checked === false) {
		// console.log(this.checked)
		ball.style.left =`4px`
	} else {
		ball.style.left =`52%`
	}
});


