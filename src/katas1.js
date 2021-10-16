function oneThroughTwenty(numero) {
  let meuArray = []
  for(contador=1; contador <=20; contador++){
     meuArray.push(contador)
}
return meuArray
}
console.log(oneThroughTwenty(0))            

//call function oneThroughTwenty

function evensToTwenty(numero) {
  let meuArray = []
  for(let contador = 1; contador<=20; contador++){
  if(contador % 2 ===0){
    meuArray.push(contador)
  }
  }
  return meuArray
}
console.log(evensToTwenty(0))

//call function evensToTwenty

function oddsToTwenty(numero) {
  let meuArray = []
  for(let contador = 1; contador<=20; contador++){
  if(contador % 2 ===1){
    meuArray.push(contador)
  }
  }
  return meuArray

}
console.log(oddsToTwenty(0))
//call function oddsToTwenty
function multiplesOfFive(numero) {
  let meuArray = []
  for(let contador = 5; contador<=100; contador++){
  if(contador % 5 ===0){
    meuArray.push(contador)
  }
  }
  return meuArray
}
console.log(multiplesOfFive(0))

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
      console.log(squareNumbers(0))
//call function squareNumbers

function countingBackwards(numero) {
  let meuArray = []
  for(let contador = 20; contador >=1; contador--){
  meuArray.push(contador)
  }
  return meuArray
}

console.log(countingBackwards(0))

//call function countingBackwards

function evenNumbersBackwards(numero) {
  let meuArray = []
  for(let contador = 20; contador>=1; contador--){
  if(contador % 2 ===0){

    meuArray.push(contador)
  }
  }
  return meuArray
}
console.log(evenNumbersBackwards(0))

//call function evenNumbersBackwards

function oddNumbersBackwards(numero) {
  let meuArray = []
  for(let contador = 20; contador>=0; contador--){
  if(contador % 2 ===1){
    meuArray.push(contador)
  }
  }
  return meuArray
}
console.log(oddNumbersBackwards(0))

//call function oddNumbersBackwards

function multiplesOfFiveBackwards(numero) {
  let meuArray = []
  for(let contador = 100; contador>=5; contador--){
  if(contador % 5 ===0){
    meuArray.push(contador)
  }
  }
  return meuArray
}
console.log(multiplesOfFiveBackwards(0))

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
