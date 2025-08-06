function inserirNome(){
let nomeUsuario = prompt("Qual o seu nome");
   let elemento = document.querySelector("#nome-usuario");
   console.log(elemento);
   elemento.textContent = nomeUsuario;
}

const lista = document.querySelector('#lista');

lista.textContent = linguagens[0];
lista.textContent = linguagens[1];
lista.textContent = linguagens[2];

let aluno1 = {
   nome: `bruna',
}  idade:18, 
   anoletivo: '3° ensino médio',
   Materiafavoritas:['historia']
    
   console.log(aluno1.aluno);
   console.log(aluno1.idade);
   console.log(aluno1)