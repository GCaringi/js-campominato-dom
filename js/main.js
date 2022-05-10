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
  //Testing console print
  console.log(listBomb.sort());
  for (let i = 0; i <= allBoxes.length; i++){
    if (listBomb.includes(i+1)){
      allBoxes[i].classList.add("bomb");
    }
  }
  }

  function drawField(num){
    const rowContainer = document.querySelector(".row");
    for (let i = 0; i < num; i++){
      const boxDiv = document.createElement("div")
      boxDiv.classList.add("box");
      boxDiv.innerText = i+1;
      rowContainer.append(boxDiv);
    }
    bombField(num);
  }

  

/*--------------------
        Main
--------------------*/

let flag = true;
let points = 0;
let choiceNumbers = [];


let mode = difficultyChioce();

drawField(rangeSize(mode));

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