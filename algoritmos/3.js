// 3 - Crie uma função que recebe uma string com qualquer sequência dos 
//seguintes caracteres '[', '{', '(', ')', '}', ']' e retorne se a sequência é uma 
// sequência válida ou não. Uma sequência é válida se as chaves, parênteses e colchetes 
// abrem e fecham corretamente

const sequencia = '{ [ ( ( ) ] }';

const isValid = (array) =>{
  const valor = Array.from(array.replaceAll(' ',''));

  if(valor.length % 2 != 0){
    console.log("É uma sequência inválida");
    return false;
  }

}


isValid(sequencia);