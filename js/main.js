
/*--------------------
  Logic Function
--------------------*/

function difficultyChioce(){
    let difficulty;
    do{
      difficulty = Number(prompt("Scegli difficoltà\n0 - Easy Mode\n1 - Normal Mode\n2 - Hard Mode\n3 - Debug Mode"));
    }while (isNaN(difficulty) || difficulty < 0 || difficulty > 3 || !Number.isInteger(difficulty));
    return difficulty;
  }
  
  function generateBombField(rangeSize){
    let bombField = [];
    while (bombField.length !== 16){
      let rndNum = Math.floor((Math.random()*rangeSize)+1);
      if (bombField.indexOf(rndNum) === -1){
        bombField.push(rndNum);
      }
    }
    return bombField;
  }
  
  function rangeSize(mode){
    let range = 0;
    if (mode === 0){
      return range = 100;
    }else if ( mode === 1){
      return range = 80;
    }else if (mode === 2){
      return range = 50;
    }else{
      return range = 20;
    }
  }
  
  function numberChoice(rangeSize){
    let num;
    do{
      num = Number(prompt("Inserisci un numero: "));
    }while(isNaN(num) || num < 1 || num > rangeSize || !Number.isInteger(num));
    return num;
  }
  
  function isInArray(num, array){
    if (array.indexOf(num) === -1){
      return false;
    }else{
      return true;
    }
  }

  function isValid(choicedNum, bombField){
      if (bombField.indexOf(choicedNum) === -1){
          return true;
      }else{
          return false;
      }
  }
 
/*--------------------
     DOM Function
--------------------*/
  function bombField(num){
  const allBoxes = document.getElementsByClassName("box");
  const listBomb = generateBombField(num);
  listBomb.sort((a,b) => a - b);
  //Testing console print
  console.log(listBomb);
  for (let i = 0; i <= allBoxes.length; i++){
    if (listBomb.includes(i+1)){
      allBoxes[i].classList.add("bomb");
    }
  }
  }

  function drawField(num){
    const rowContainer = document.querySelector(".play-field");
    for (let i = 0; i < num; i++){
      const boxDiv = document.createElement("div")
      boxDiv.classList.add("box");
      boxDiv.innerText = i+1;
      rowContainer.append(boxDiv);
    }
    bombField(num);
  }

  function listABomb(){
    let list = []
    const boxDiv = document.getElementsByClassName("box");
    for (let i = 0; i < boxDiv.length; i++){
      if (boxDiv[i].className.split(" ").includes("bomb")){
        list.push(Number(boxDiv[i].textContent));
      }
    }
    return list;
  }
/*--------------------
        Main
--------------------*/

//Starter Menu

const btnEasy = document.getElementById("btn-easy");
const btnNormal = document.getElementById("btn-normal");
const btnHard = document.getElementById("btn-hard");
const btnDebug = document.getElementById("btn-debug");


document.addEventListener("keyup",
    event => {
        if (event.code === "Space"){
            btnDebug.style.display = "block"
        }
    }
)

btnEasy.addEventListener("click",
    function (){
        const menuStart = document.getElementById("start-menu");
        menuStart.style.display = "none";
        const playMenu = document.getElementById("play-menu");
        playMenu.style.display = "flex"; 
    }
)

btnNormal.addEventListener("click", 
    function(){
        const menuStart = document.getElementById("start-menu");
        menuStart.style.display = "none";
        const playMenu = document.getElementById("play-menu");
        playMenu.style.display = "flex";
    }
)

btnHard.addEventListener("click", 
    function(){
        const menuStart = document.getElementById("start-menu");
        menuStart.style.display = "none";
        const playMenu = document.getElementById("play-menu");
        playMenu.style.display = "flex";
    }
)

btnDebug.addEventListener("click", 
    function(){
        const menuStart = document.getElementById("start-menu");
        menuStart.style.display = "none";
        const playMenu = document.getElementById("play-menu");
        playMenu.style.display = "flex";
    }
)

//PlayField

// let mode = difficultyChioce()
// drawField(rangeSize(mode));

let flag = true;
let points = 0;
let bombList = listABomb();
let choiceNumbers = [];

console.log(bombList);





// let numInBombField = generateBombField(rangeSize(mode));
// console.log(numInBombField);

// while(flag && points < rangeSize(mode) - 16){

//     let choiceNum = numberChoice(rangeSize(mode));

//     while(isInArray(choiceNum, choiceNumbers)){
//         choiceNum = numberChoice(rangeSize(mode))
//     }

//     if (isValid(choiceNum, numInBombField)){
//         choiceNumbers.push(choiceNum);
//         points ++;
//     }else{
//         flag = false;
//     }
// }

// if (points === rangeSize(mode) - 16){
//     console.log("Hai vinto!!!! Punti totali " + points);
// }else{
//     console.log("Hai perso. Hai totalizzato " + points + " punti");
// }