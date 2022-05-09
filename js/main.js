function difficultyChioce(){
    let difficulty;
    do{
      difficulty = Number(prompt("Scegli difficoltà\n0 - Easy Mode\n1 - Normal Mode\n2 - Hard Mode"));
    }while (isNaN(difficulty) || difficulty < 0 || difficulty > 2 || !Number.isInteger(difficulty));
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
  
  
  
let flag = true;
let points = 0;
let choiceNumbers = [];


let mode = difficultyChioce();

let numInBombField = generateBombField(rangeSize(mode));


while(flag && points < rangeSize(mode) - 16){

    let choiceNum = numberChoice(rangeSize(mode));

    while(isInArray(choiceNum, choiceNumbers)){
        choiceNum = numberChoice(rangeSize(mode))
    }

    if (isValid(choiceNum, numInBombField)){
        choiceNumbers.push(choiceNum);
        points ++;
    }else{
        flag = false;
    }
}

if (points === rangeSize(mode) - 16){
    console.log("Hai vinto!!!! Punti totali " + points);
}else{
    console.log("Hai perso. Hai totalizzato " + points + " punti");
}