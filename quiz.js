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
    "un ami une amie",
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
    document.getElementById("btnStart").innerHTML = "Load new voc";
    
    if(availableNewVoc === true) {
        scoreable = true;

        availableNewVoc = false;
    
        document.getElementById("Result").innerHTML = ""; 
    
        number = Math.floor(Math.random() * amount);

        rightSolution = number;

        document.getElementById("GermanTexts").innerHTML = german[number];

        order = Math.floor(Math.random() * 4);
    
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
        document.getElementById("Result").innerHTML = "right";
        
        if(scoreable === true){
            score = score + 1;
            document.getElementById("score").innerHTML = "Score: " + score;
            scoreable = false;
        }
    }
    else{
        console.log("wrong solution");
        document.getElementById("Result").innerHTML = "wrong";
        if(scoreable === true){
            score = score - 1;
            document.getElementById("score").innerHTML = "Score: " + score;
            scoreable = false;
        }
    }
}
