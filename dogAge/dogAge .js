var nome = prompt('Digite nome do seu cachorro aqui:');
var firstLetter = nome.slice(0,1);
firstLetterUp = firstLetter.toUpperCase();
var restMsg = nome.slice(1);
nome = (firstLetterUp + restMsg);
var idade = prompt('Qual a idade do ' + nome + ' ?');
idadeHumano = ((idade - 2) * 4) + 21;
alert(nome + ' teria ' + idadeHumano + ' anos se fosse humano.')
