#O primeiro código creio que seria fazer 20 prints com o número do andar,e pular o 13.Acho que podemos
#simplesmente pular para o próximo...

print("### WHILE ###")
andar = 0
while andar < 21:
    andar += 1
    if andar == 13:
        continue
    print(andar)

print("### FOR ###")
for i in range(20):
    if i == 0:
        i += 1
        continue
    elif i == 13:
        continue
    print(i)