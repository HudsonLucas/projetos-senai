let placarJ1 = 0
let placarJ2 = 0
let opJ1 = 0
let opJ2 = 0

// let opJ1 = 1 é pedra
// let opJ2 = 2 é pedra

// let opJ1 = 3 é tesoura
// let opJ2 = 4 é tesoura

// let opJ1 = 5 é papel
// let opJ2 = 6 é papel

function pedraj1() {
    opJ1 = 1;
}
function pedraj2() {
    opJ2 = 2;
}
function papelj1() {
    opJ1 = 3;
}
function papelj2() {
    opJ2 = 4;
}
function tesouraj1() {
    opJ1 = 5;
}
function tesouraj2() {
    opJ2 = 6;
}

function jogar() {
    //usando if basico
    if (opJ1 == 0){
    alert("tu não selecionou nada seu palerma")
    }

    //if com ou
    if ((opJ1 == 0) || (opJ2 == 0)) {
        alert("algum dos palermas não selecionou")
    }

    if ((opJ1 == 0) && (opJ2 == 0))
        alert("os dois palermas não selecionaram nada")


//jogador 1 W
if (((opJ1 == 1) && (opJ2 == 6)) || 
   ((opJ1 == 5) && (opJ2 == 4)) || 
   ((opJ1 == 3) && (opJ2 == 2))) {
   
    alert("Jogador numero 1 ganhou, Parabens seu palerma!!!!")
    placarJ1 = placarJ1 + 1;
    opJ1 = 0
    opJ2 = 0
}

//jogador 2 W
if ((opJ1 + opJ2 == 6)) {
    
    alert("Jogador numero 2 ganhou, Parabens seu palerma!!!!")
    placarJ2 = placarJ2 + 1;
    opJ1 = 0
    opJ2 = 0
}}