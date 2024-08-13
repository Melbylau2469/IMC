const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = +document.getElementById('altura').value;
    const peso = +document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'Você Deveria Comer Não Ser Comido.';
        }else if (valorIMC < 25) {
            classificacao = 'Continue Assim Que Voce Vive Mais.';
        }else if (valorIMC < 30){
            classificacao = 'Melhor Começar A Se Controlar.';
        }else if (valorIMC < 35){
            classificacao = 'Acho Que Você Esta Começando A Parecer Uma Bola Melhor Parar.';
        }else if (valorIMC < 40){
            classificacao = 'Se Antes Você Parecia Agora Você É Uma Bola.';
        }else {
            classificacao = 'Logo Logo Você Vai Falir Todes As Lanchonetes Do Mundo';
        }

        resultado.textContent = `${nome} O Quanto Você Está Se Envergonhando ${valorIMC} Mas Pelo Menos Você Está ${classificacao}`;
       
    }else {
        resultado.textContent = 'Deixa De Ser Imbecil';
    }

}

calcular.addEventListener('click', imc);