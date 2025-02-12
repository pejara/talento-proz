def calculadora(val1,val2,ope):
    if ope == 1:
        return(val1 + val2)
    elif ope == 2:
        return(val1 - val2)
    elif ope == 3:
        return(val1 * val2)
    elif ope == 4:
        try:
            return(val1 / val2)
        except:
            print("Não pode dividir por zero")
            return "Sem resultado"

while True:
    ope = int(input("Digite conforma a operação que queira:\n"
                "1. Soma\n"
                "2. Subtração\n"
                "3. Multiplicação\n"
                "4. Divisão\n"
                "0. Sair\n"))
    
    opc_possiveis = "1,2,3,4"
    
    if ope == 0:
        print("Saindo")
        break
    if str(ope) not in opc_possiveis:
        print("Escolha algo válido")
        continue
    
    num1 = int(input("Digite o primeira número da operação\n"))
    num2 = int(input("Digite o segundo número da operação\n"))

    resultado = calculadora(num1,num2,ope)
    print("Resultado:",resultado)