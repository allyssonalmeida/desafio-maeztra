//1 - Crie uma função que receba um valor INTEIRO positivo, 
//e verifique se os DÍGITOS estão em ordenação sequencial CRESCENTE ou DECRESCENTE. 
//Pode considerar dígitos iguais como sequenciais 
//(Variação de um dígito para o outro deve ser 1 ou menor)

function detectOrder(valor){
  return valor[0] <= valor[1] ? 'crescente' : 'decrescente';
}

function checkOrder(ordem, a, b){
  if(ordem == 'crescente'){
    if(a <= b && b - a <= 1 ){
      return true;
    }else{
      return false;
    }
  }else{
    if(a >= b && a - b <= 1 ){
      return true;
    }else{
      return false;
    }
  }
}

function isOrdered(valor){
  const array = Array.from(valor.toString());
  let tipo = detectOrder(array);
  let ordenado = true;

  array.forEach((item, index) => {
      if(index !== array.length - 1){
        if(!checkOrder(tipo, item, array[index+1])){
          ordenado = false;
        }
      }
  });
  
  if(ordenado){
    console.log("Está ordenado")
  }else{
    console.log("Não está ordenado")
  }
}

input = 1599;

isOrdered(input)