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

let amount = 43;

let score = 0;

let number

let scoreable

let availableNewVoc = true;

let rightSolution

let used1
let used2
let used3
let used4

function newVoc(){
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
    
    document.getElementById("btnStart").innerHTML = "Load new voc";
    
    if(availableNewVoc === true) {
        scoreable = true;

        availableNewVoc = false;
    
        number = Math.floor(Math.random() * amount);

        //rightSolution = number;

        document.getElementById("GermanTexts").innerHTML = german[number];

        order = Math.floor(Math.random() * 4);

        rightSolution = order;
    
        if(order === 0){
        rightSolution = order;
        document.getElementById("btn1").innerHTML = french[number];
        used1 = number;
        }
        else {
            while (true) {
            
                randomNum = Math.floor(Math.random() * amount);

                if (randomNum !== used1 && randomNum !== used2 && randomNum !== used3 && randomNum !== used4 && randomNum !== rightSolution) {          
                    document.getElementById("btn1").innerHTML = french[randomNum];
                    used1 = randomNum;
                break;
                } 
            }
        }

        if(order === 1){
            rightSolution = order;
            document.getElementById("btn2").innerHTML = french[number];
            used2 = number;
        }
        else {
        
            while (true) {
            
                randomNum = Math.floor(Math.random() * amount);

                if (randomNum !== used1 && randomNum !== used2 && randomNum !== used3 && randomNum !== used4 && randomNum !== rightSolution) {            
                document.getElementById("btn2").innerHTML = french[randomNum];
                used2 = randomNum;
                break;
                } 
            }
        }

        if(order === 2){
            rightSolution = order;
            document.getElementById("btn3").innerHTML = french[number];
            used3 = number;
        }
        else {
        
            while (true) {
            
                randomNum = Math.floor(Math.random() * amount);

                if (randomNum !== used1 && randomNum !== used2 && randomNum !== used3 && randomNum !== used4 && randomNum !== rightSolution) {            
                    document.getElementById("btn3").innerHTML = french[randomNum];
                    used3 = randomNum;
                    break;
                } 
            }
        }

        if(order === 3){
            rightSolution = order;
            document.getElementById("btn4").innerHTML = french[number];
            used4 = number;
        }
        else {
        
            while (true) {
            
                randomNum = Math.floor(Math.random() * amount);

                if (randomNum !== used1 && randomNum !== used2 && randomNum !== used3 && randomNum !== used4 && randomNum !== rightSolution) {            
                    document.getElementById("btn4").innerHTML = french[randomNum];
                    used4 = randomNum;
                    break;
                } 
            }
        }
    }
    
    
}

function solution(x){
    availableNewVoc = true;
    
    if(x === rightSolution){
        console.log("right solution");
        
        if(scoreable === true){
            score = score + 1;
            document.getElementById("score").innerHTML = "Score: " + score;
            scoreable = false;

            let testVariable = document.querySelector(buttons[x]);
            testVariable.style.backgroundColor = "green";
            testVariable.style.borderColor = "green";
        }
    }
    else{
        console.log("wrong solution");

        if(scoreable === true){
            score = score - 1;
            document.getElementById("score").innerHTML = "Score: " + score;
            scoreable = false;
            
            let testVariable = document.querySelector(buttons[x]);
            testVariable.style.backgroundColor = "red";
            testVariable.style.borderColor = "red";

            let testVariable2 = document.querySelector(buttons[rightSolution]);
            testVariable2.style.backgroundColor = "green";
            testVariable2.style.borderColor = "green";
        }
    }
}
