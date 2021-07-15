function meuEscopo() {
    const form = document.querySelector('form')
    const resposta = document.querySelector('#resposta');

    function cálculo(e) {

        e.preventDefault();

        const inputPeso = document.querySelector('#peso');
        const inputAltura = document.querySelector('#altura');

        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);

        const imc = peso / (altura * altura);

        if (!peso && !altura) {
            resposta.innerHTML = `<p>Peso e altura <span class="invalido">inválidos</span>.</p>`;
            return;
        }

        if (!peso) {
            resposta.innerHTML = `<p>Peso <span class="invalido">inválido</span>.</p>`;
            return;
        }

        if (!altura) {
            resposta.innerHTML = `<p>Altura <span class="invalido">inválida</span>.</p>`;
            return;
        }

        if (imc >= 0 && imc <= 18.5) {
            resposta.innerHTML = `<p>Seu IMC é ${imc.toFixed(1)} (Abaixo do peso).</p>`;
        }

        else if (imc >= 18.5 && imc <= 24.9) {
            resposta.innerHTML = `<p>Seu IMC é ${imc.toFixed(1)} (Peso normal).</p>`;
        }

        else if (imc >= 25 && imc <= 29.9) {
            resposta.innerHTML = `<p>Seu IMC é ${imc.toFixed(1)} (Sobrepeso).</p>`;
        }

        else if (imc >= 30 && imc <= 34.9) {
            resposta.innerHTML = `<p>Seu IMC é ${imc.toFixed(1)} (Obesidade grau 1).</p>`;
        }

        else if (imc >= 35 && imc <= 39.9) {
            resposta.innerHTML = `<p>Seu IMC é ${imc.toFixed(1)} (Obesidade grau 2).</p>`;
        }

        else if (imc >= 40) {
            resposta.innerHTML = `<p>Seu IMC é ${imc.toFixed(1)} (Obesidade grau 3).</p>`;
        }
    }

    form.addEventListener('submit', cálculo)
}

meuEscopo();