def calculadora(val1,val2,ope):
    if ope == 1:
        return(val1 + val2)
    elif ope == 2:
        return(val1 - val2)
    elif ope == 3:
        return(val1 * val2)
    elif ope == 4:
        return(val1 / val2)
    else:
        return("0")

num1 = int(input("Digite o primeira número da operação\n"))
num2 = int(input("Digite o segundo número da operação\n"))

ope = int(input("Digite conforma a sinalração que queira:\n"
            "1. Soma\n"
            "2. Subtração\n"
            "3. Multiplicação\n"
            "4. Divisão\n"))

resultado = calculadora(num1, num2, ope)
print(resultado)