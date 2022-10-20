const adviceNum = document.querySelector(".advice-num");
const advice = document.getElementById("advice");
const diceBtn = document.getElementById("dice-btn");

window.addEventListener("load", btnHandler);

// Dice btnHandler
diceBtn.addEventListener("click", btnHandler);

let prevId;
async function btnHandler() {
  const quotesObj = await fetchQuote();
  console.log({ quotesObj, prevId });

  adviceNum.textContent = `ADVICE #` + quotesObj.id;
  advice.textContent = `"` + quotesObj.advice + `"`;
}

async function fetchQuote() {
  let result;
  const res = await fetch("https://api.adviceslip.com/advice");

  const data = await res.json();
  result = data.slip;

  if (prevId == result.id) {
    console.log("Id;s are the same", prevId, result.id);
    return await fetchQuote();
  }
  prevId = result.id;
  return result;
}
