// 5 - Um grupo de amigos será colocado lado a lado para tirar uma foto. 
// De quantos modos distintos os amigos podem se organizar para tirar a foto?
// Desenvolva uma função que receba um número de pessoas (valor inteiro) e retorne quantas 
// possibilidades de organização existem para que o fotografo saiba o número de modos distintos
// que esse grupo e outros grupos possam se organizar.

const pessoas = 7;

const calcPossibilidades = (qtd) => {
  let combinacoes = 1;

  while(qtd > 0){
    combinacoes = combinacoes * qtd;
    qtd--;
  }

  console.log(`Os ${pessoas} amigos podem formar até ${combinacoes} combinações diferentes`);
}

calcPossibilidades(pessoas);