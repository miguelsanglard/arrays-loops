// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var copas = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for (var i = 0; i < copas.length; i++) {
  console.log('O brasil ganhou a copa de', copas[i]);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva','Melancia']

for (var n = 0; n < 3; n++){
  console.log(frutas[n])
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultimafruta = frutas[frutas.length - 1]
// O argumento item será atribuído dinamicamente

