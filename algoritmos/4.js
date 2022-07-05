//4 - Considere um conjunto de pessoas aposentadas, onde cada pessoa começou a trabalhar em ano X 
//e aposentou em ano Y. Crie uma função que receba uma matriz na seguinte estrutura [[x1,y1],[x2,y2]
//,...[xn,yn]] e calcule em qual/quais ano/anos houve mais pessoas trabalhando.

const input = [[1960,2005],[1945,2008],[1938,1999]]

const calcular = (matriz) => {
  let anos = [];

  matriz.forEach((item) => {
    for(let i = item[0]; i <= item[1]; i++){
      anos.push(i);
    }
  })
  console.log(anos);
}
calcular(input);