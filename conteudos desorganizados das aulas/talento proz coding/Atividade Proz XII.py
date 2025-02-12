while True:
    try:
        nome = input("Digite seu nome: ")
        nasc = int(input("Digite seu ano de nascimento: "))
        break
    except:
        print("Você digitou algo de errado")
        continue

idade = 2022 - nasc

print(f"Seu nome é {nome} e você fez {idade} anos esse ano")