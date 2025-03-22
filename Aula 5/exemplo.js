nome = prompt("Informe seu nome: ")
nascimento = parseInt(prompt("Informe sua data de nascimento: "))
atual = parseInt(prompt("Informe o ano atual:  "))

idade = nascimento - atual


document.getElementById("sla").innerHTML= `Olá, <strong>${nome}</strong>! Você nasceu em <strong>${nascimento}</strong>.`;


