var projeto1= document.getElementById("projeto-1")
var projeto2 = document.getElementById("projeto-2")
var projeto3 = document.getElementById("projeto-3")

projeto1.addEventListener("click", projetoFirst)

function projetoFirst(e){ // o "e" como parametro é o evento de clique do js

    //verifica se a pessoa clicou no link dentro da div
    if (e.target.tagName.toLowerCase() === "a"){ // aqui está checando qual elemento html foi clicado, no caso o link <a>
        return; 
        // se clicou, vai ser redirecionada para o repositório do github
    }
    window.open("https://mands-mands.github.io/Smart-Block-Mobile/")
    //se não clicou ou seja clicou na div, abre o link do site no github Pages
}

projeto2.addEventListener("click", projetoSecond)

function projetoSecond(e){
    if(e.target.tagName.toLowerCase() === "a"){
         return;
    }
    window.open("https://mands-mands.github.io/Projeto-Responsivo/")
}

projeto3.addEventListener("click", projetoThird)

function projetoThird(e){
    if(e.target.tagName.toLowerCase() === "a"){
        return;
    }
    window.open("https://mands-mands.github.io/NFT-Card/")
}

