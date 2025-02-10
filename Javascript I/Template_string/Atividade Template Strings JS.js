let matematica = function math(num1,num2) {
  soma = num1 + num2
  sub = num1 - num2
  mult = num1 * num2
  div = num1 / num2
  let resultado =`
  A soma dos números ${num1} e ${num2} é ${soma},
  A subtração dos números ${num1} e ${num2} é ${sub},
  A multiplicação dos números ${num1} e ${num2} é ${mult},
  A divisão ${num1} e ${num2} é ${div}.`
  console.log(resultado)
}

matematica(2,2)