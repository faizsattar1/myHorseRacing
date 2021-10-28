"use strict"
const numHorses = 5
let horses=[]  //an array of horse elements
let horseX=[]  //an array containing the pixel position of every horse
let colors=["red","blue","orange","Cyan","magenta","yellow","Black","turquoise","gray","lilac","white"]

function startRace () {
    setInterval (move, 50)
}


for(let h=0;h<numHorses;h++){
    horses[h] = document.createElement("div")    
    horses[h].classList.add("horse")
    horses[h].style.top = 50 + h*45 + "px" 
    horses[h].style.backgroundColor=colors[h]  
    horseX[h]=0 
    document.body.appendChild(horses[h]) 
const finish=500

function move(){    
    for(let h=0;h<numHorses;h++){ 
        horses[h].style.left=horseX[h] +"px"  
        horseX[h] += Math.floor(Math.random()*10) 
        if(horseX[h] >=finish){alert( ` ${colors[h]}  horse wins`);resetRace();}  
    } 
}

function resetRace () {
for(let h=0; h<numHorses;h++){
    horseX [h]= 0
}

}
plainText="HELLO"
function encode(plainText){

    for(let i=0;i<plainText.length; i++)
    let encode = plainText[i];
    

    //for an input string 'text' .. return an enciphered version (ceasar cipher)
    // a->b    b->c .... z->a
    // for example Hello  - > Ifmmp
    
    //string.charCodeAt()
    //String.fromChar()

    //Fill this gap

    return encodedMessage

}

function decode(encodedText){

    //fill this gap
}}
