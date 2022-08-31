//Variables

let german = [
    "Willkommen",
    "Guten Tag!",
    "Hallo!",
    "Wie geht`s?",
    "ja",
    "danke",
    "Tschüs!",
    "Bis später",
    "gut",
    "Auf Wiedersehen",
    "ein Freund/ eine Freundin",
    "Guten Tag, Freunde",
    "ich heiße",
    "und",
    "du (betont)",
    "ich (betont)",
    "Paris",
    "Komm!",
    "Papa",
    "schnell",
    "Miau!",
    "Wau, wau!",
    "Wer ist das?",
    "Achtung! Vorsicht!",
    "nein",
    "Entschuldigung",
    "wie?", 
    "Wie heißt du",   
    "das ist",
    "Ich bin",    
    "da ist, da sind",
    "hier, hierher",
    "eine Katze",
    "ein Hund",
    "aber",
    "du bist",
    "aus, von",
    "auch",
    "super, toll",
    "ein Junge",
    "ein Mädchen",
    "er ist",
    "sie ist",
    "ein Tier",
]

let french = [
    "Bienvenue",
    "Bonjour!",
    "Salut!",
    "Ça va?",
    "oui",
    "merci",
    "Salut!",
    "A plus",
    "bien",
    "Au revoir",
    "un ami, une amie",
    "Bonjour, les amis!",
    "je m`appelle",
    "et",
    "toi",
    "moi",
    "Paris",
    "Viens",
    "papa",
    "vite",
    "Miaou!",
    "Oauh, ouah!",
    "Qui est-ce?",
    "Attention!",
    "non",
    "Pardon",
    "comment",
    "Tu t`appelles comment",
    "c`est",
    "je suis",
    "voillà",
    "ici",
    "un chat",
    "un chien",
    "mais",
    "tu es",
    "de / d`",
    "aussi",
    "super",
    "un garcon",
    "une fille",
    "il est",
    "elle est",
    "un animal",
]

let buttons = [
    "#btn1",
    "#btn2",
    "#btn3",
    "#btn4",
]

let buttonsReplace = [
    "btn1",
    "btn2",
    "btn3",
    "btn4",
]

let positiveAnswers = [
    "gut gemacht!",
    "WAHNSINN!",
    "wow",
    "cool",
    "nice",
    "du bist ein echtes Genie!",
    "Ich bin stolz auf dich",
]

let negativeAnswers = [
    "schade",
    "niemand hat gesagt, dass es einfach wird",
    "das nächste mal wird´s bessere",
    "Ich glaub an dich!",
    "DAS SCHAFFST DU!",
    "Französisch ist auch blöd",
    "komm schon!",
]

let amount = 43;

let score = 0;

let number

let order

let scoreable

let availableNewVoc = true;

let rightSolution


let used1
let used2
let used3
let used4


function loadNewVoc() {
    if(availableNewVoc === true) {
        scoreable = true;

        availableNewVoc = false;
    
        number = Math.floor(Math.random() * amount);

        document.getElementById("GermanTexts").innerHTML = german[number];

        order = Math.floor(Math.random() * 4);

        rightSolution = number;
        
        resetToDefault();
        
        newVoc(0);
        newVoc(1);
        newVoc(2);
        newVoc(3);
    }
}

function newVoc(x) {
    if(order === x) {
        insertVoc(x, number);
    }
    else {
        while (true) {
            randomNum = Math.floor(Math.random() * amount);
            
            if(randomNum !== used1 && randomNum !== used2 && randomNum !== used3 && randomNum !== used4 && randomNum !== rightSolution) {
                insertVoc(x, randomNum);
            }
            break;
        }
    }
}

function insertVoc(x, y) {
    if(x === 0) {
        document.getElementById("btn1").innerHTML = french[y];
    }

    if(x === 1) {
        document.getElementById("btn2").innerHTML = french[y];
    }

    if(x === 2) {
        document.getElementById("btn3").innerHTML = french[y];
    }

    if(x === 3) {
        document.getElementById("btn4").innerHTML = french[y];
    }
}

function resetToDefault() {
    const btn1 = document.querySelector("#btn1");
    btn1.style.backgroundColor = "rgb(15, 22, 119)";
    btn1.style.borderColor = "rgb(17, 60, 139)";
    const btn2 = document.querySelector("#btn2");
    btn2.style.backgroundColor = "rgb(15, 22, 119)";
    btn2.style.borderColor = "rgb(17, 60, 139)";
    const btn3 = document.querySelector("#btn3");
    btn3.style.backgroundColor = "rgb(15, 22, 119)";
    btn3.style.borderColor = "rgb(17, 60, 139)";
    const btn4 = document.querySelector("#btn4");
    btn4.style.backgroundColor = "rgb(15, 22, 119)";
    btn4.style.borderColor = "rgb(17, 60, 139)";
    document.getElementById("result").innerHTML = "";
    
    document.getElementById("btnStart").innerHTML = "Load new voc";
}

function solution(x){
    availableNewVoc = true;
    
    if(x === order){
        //console.log("right solution");
        
        if(scoreable === true){
            score = score + 1;
            document.getElementById("score").innerHTML = "Score: " + score;
            scoreable = false;

            let testVariable = document.querySelector(buttons[x]);
            testVariable.style.backgroundColor = "green";
            testVariable.style.borderColor = "rgb(26, 136, 40)";
            positiveAnswer();
        }
    }
    else{
        //console.log("wrong solution");

        if(scoreable === true){
            score = score - 1;
            document.getElementById("score").innerHTML = "Score: " + score;
            scoreable = false;
            
            let testVariable = document.querySelector(buttons[x]);
            testVariable.style.backgroundColor = "red";
            testVariable.style.borderColor = "rgb(153, 9, 2)";

            let testVariable2 = document.querySelector(buttons[order]);
            testVariable2.style.backgroundColor = "green";
            testVariable2.style.borderColor = "rgb(26, 136, 40)";

            negativeAnswer();
        }
    }
}

function positiveAnswer() {
    randomNum = Math.floor(Math.random() * 7);

    document.getElementById("result").innerHTML = positiveAnswers[randomNum];

    //console.log(randomNum);
}

function negativeAnswer() {
    randomNum = Math.floor(Math.random() * 7);

    document.getElementById("result").innerHTML = negativeAnswers[randomNum];

    console.log(randomNum);
}