


let btn1 = document.querySelector(".btn-permutation-with-repetitions");
let btn2 = document.querySelector(".btn-permutation-without-repetitions");
let btn3 = document.querySelector(".btn-combinations-with-repetitions");
let result = document.getElementById("result");
let result2 = document.getElementById("result-2");
let result3 = document.getElementById("result-3");
let first = document.querySelector(".calculator-permutations-without-repetitions")
let second = document.querySelector(".calculator-permutations-without-repetitions")
let third = document.querySelector(".calculator-combinations-with-repetitions")
let topBtn1 = document.querySelector(".permutation-with-repetition");
let topBtn2 = document.querySelector(".permutations-without-repetitions");
let topBtn3 = document.querySelector(".combinations-with-repetitions");

const factInt = (m) => {
  let res = 1; 

  for(let i=1; i<=m; i++) {
      res = res * i;
  }
  return res;
}



function calcPermutationWithRepetition () {
  let n = Number(document.getElementById("number-n").value);
  
  result.innerHTML = factInt(n)

}

function calcPermutationWithoutRepetitions() {
  let nSecond = Number(document.getElementById("number-n-second").value);
  let k =  Number(document.getElementById("number-k").value); 

  if ( nSecond < k) {
    alert("n должно быть больше k")
  }
  result2.innerHTML = factInt(nSecond)/factInt(nSecond - k)


}


function calcCombinationsWithRepetitions() {
  let nThird= Number(document.getElementById("number-n-third").value);
  let kSecond =  Number(document.getElementById("number-k-second").value); 
  if ( nThird < kSecond) {
    alert("n должно быть больше k")
  }
  firstAct = factInt(kSecond)*factInt(nThird-kSecond)
  result3.innerHTML = factInt(nThird)/firstAct
}


function showFirst() {
  first.style.display = "block"
  
  topBtn1.style.display = "none"
}

function showSecond() {
  second.style.display = "block"
  topBtn2.style.display = "none"

}
function showThird() {
  third.style.display = "block"

  topBtn3.style.display = "none"
}


btn1.addEventListener('click',calcPermutationWithRepetition);
btn2.addEventListener('click',calcPermutationWithoutRepetitions);
btn3.addEventListener('click',calcCombinationsWithRepetitions);


topBtn1.addEventListener('click', showFirst);
topBtn2.addEventListener('click', showSecond);
topBtn3.addEventListener('click', showThird);

