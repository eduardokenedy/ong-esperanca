function aplicarMascara(input, mascara) {
  input.addEventListener('input', () => {
    const valor = input.value.replace(/\D/g, '');
    let resultado = '';
    let posicao = 0;

    for (let indice = 0; indice < mascara.length; indice += 1) {
      if (mascara[indice] === '#') {
        if (valor[posicao]) {
          resultado += valor[posicao];
          posicao += 1;
        } else {
          break;
        }
      } else {
        resultado += mascara[indice];
      }
    }

    input.value = resultado;
  });
}

aplicarMascara(document.getElementById('cpf'), '###.###.###-##');
aplicarMascara(document.getElementById('cep'), '#####-###');

const telefone = document.getElementById('telefone');
telefone.addEventListener('input', () => {
  const numeros = telefone.value.replace(/\D/g, '').slice(0, 11);
  const mascara = numeros.length > 10 ? '(##) #####-####' : '(##) ####-####';
  let posicao = 0;

  telefone.value = mascara
    .replace(/#/g, () => numeros[posicao++] || '')
    .replace(/[-\s(]+$/, '');
});
