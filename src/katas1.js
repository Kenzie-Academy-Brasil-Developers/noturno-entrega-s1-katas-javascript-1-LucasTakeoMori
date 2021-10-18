function oneThroughTwenty()
) {
  let meuArray = []
  for(contador=1; contador <=20; contador++){
     meuArray.push(contador)
}
return meuArray
}
console.log(oneThroughTwenty())            

//call function oneThroughTwenty

function evensToTwenty() {
  let meuArray = []
  for(let contador = 1; contador<=20; contador++){
  if(contador % 2 ===0){
    meuArray.push(contador)
  }
  }
  return meuArray
}
console.log(evensToTwenty())

//call function evensToTwenty

function oddsToTwenty() {
  let meuArray = []
  for(let contador = 1; contador<=20; contador++){
  if(contador % 2 ===1){
    meuArray.push(contador)
  }
  }
  return meuArray

}
console.log(oddsToTwenty())
//call function oddsToTwenty
function multiplesOfFive() {
  let meuArray = []
  for(let contador = 5; contador<=100; contador++){
  if(contador % 5 ===0){
    meuArray.push(contador)
  }
  }
  return meuArray
}
console.log(multiplesOfFive())

//call function multiplesOfFive

function squareNumbers() {

  let num2 = 1
  let num3 = 1
     let meuArray = []
      for(contador = 0; contador <= 100; contador++ )
      {
      if(contador == num2)
      { 
          num2 = contador + (num3 += 2) 
          meuArray.push(contador)
      }    
      }
         return  meuArray
      }
      console.log(squareNumbers())
//call function squareNumbers

function countingBackwards() {
  let meuArray = []
  for(let contador = 20; contador >=1; contador--){
  meuArray.push(contador)
  }
  return meuArray
}

console.log(countingBackwards())

//call function countingBackwards

function evenNumbersBackwards() {
  let meuArray = []
  for(let contador = 20; contador>=1; contador--){
  if(contador % 2 ===0){

    meuArray.push(contador)
  }
  }
  return meuArray
}
console.log(evenNumbersBackwards())

//call function evenNumbersBackwards

function oddNumbersBackwards() {
  let meuArray = []
  for(let contador = 20; contador>=0; contador--){
  if(contador % 2 ===1){
    meuArray.push(contador)
  }
  }
  return meuArray
}
console.log(oddNumbersBackwards())

//call function oddNumbersBackwards

function multiplesOfFiveBackwards() {
  let meuArray = []
  for(let contador = 100; contador>=5; contador--){
  if(contador % 5 ===0){
    meuArray.push(contador)
  }
  }
  return meuArray
}
console.log(multiplesOfFiveBackwards())

//call function multiplesOfFiveBackwards

function squareNumbersBackwards() {
    let num1 = 100

      let meuArray = []
      for(contador = 10 ;num1 > 1; contador-- )
      {

       num1 = contador ** 2
       meuArray.push(num1)   
      
      }
         return  meuArray     
}
      console.log(squareNumbersBackwards())
//call function squareNumbersBackwards
