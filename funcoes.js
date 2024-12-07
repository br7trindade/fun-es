// exemplo1


// function saudacao() {
//     console.log("Olá, seja bem-vindo!");
//   }

//   saudacao(); // Chama a função saudacao



// exemplo 2
// function saudacao(nome) {
//     console.log("Olá, " + nome + ", seja bem-vindo!");
//   }

//   saudacao("Juan gala"); // Chama a função saudacao passando "Maria" como argumento



// function saudacao() {
//     console.log("olá mundo")
// }


// saudacao()



//criando função 
// function saudacao_personalizada(melancia) {
//     console.log("Olá  " , + melancia + ", seja bem-vindo");
// }

// const prompt = require("prompt-sync")()

// nomeusuario = prompt("digite seu nome")

// nomeamigo = prompt("digite o nome do seu amigo")

// saudacao_personalizada("anderson")

// saudacao_personalizada("turma")

// saudacao_personalizada(nomeusuario)

// saudacao_personalizada(nomeamigo)




function calculomedia(n1,n2){
    return (n1 + n2) / 2 
}

const prompt = require("prompt-sync")()


nota = prompt("digite a primeira nota")
nota2 = prompt("digite a segunda nota")

media = calculomedia(nota,nota2)

console.log("a media do aluno foi: " , media)