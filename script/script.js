const container = document.querySelectorAll('.bar-value');

for (let i = 0; i < container.length; i++) {
	// função que manuseia os valores do slider
	const slider = container[i].querySelector('.range');
	const thumb = container[i].querySelector('.slider-thumb');
	const quadrado = container[i].querySelector('.quadrado');
	const progress = container[i].querySelector('.progress');

	function customSlider() {
		// pega porcentagem
		const maxVal = slider.getAttribute('max');
		const val = (slider.value / maxVal) * 100 + '%';

		// vai mostrar o valor no tooltip
		quadrado.innerHTML = slider.value;
		// defini o valor do quadrado e progress de forma correta
		progress.style.width = val;
		thumb.style.left = val;
	}
	customSlider();
	// essa função vai funcionar quando o estiver em execução
	slider.addEventListener('input', () => {
		customSlider();
	});
}
