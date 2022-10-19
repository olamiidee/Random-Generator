const adviceNum = document.querySelector(".advice-num");
const advice = document.getElementById("advice");
const diceBtn = document.getElementById("dice-btn");

btn.addEventListener("click", btnHandler);
let prevId;
async function btnHandler() {
  const quotesObj = await fetchQoute();
  console.log({ quotesObj, prevId });

  adviceNum.textContent = quotesObj.id;
  advice.textContent = quotesObj.advice;
}

async function fetchQoute() {
  let result;
  const res = await fetch("https://api.adviceslip.com/advice");

  const data = await res.json();
  result = data.slip;

  if (prevId == result.id) {
    console.log("Id;s are the same", prevId, result.id);
    return await fetchQoute();
  }
  prevId = result.id;
  return result;
}
