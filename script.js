const formRomanConvert = document.getElementById("form");
const romanConvertBtn = document.getElementById("convert-btn");
const msgOutput = document.getElementById("output");
const resultDiv = document.getElementById("result");

const convertDecimalToRoman = (number) => {
  const tableRomanToDecimal = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];
  const result = [];

  //itarazione array tableRomanToDecimal
  for (let i = 0; i < tableRomanToDecimal.length; i++) {
    //   tableRomanToDecimal.forEach(function (arr) {
    //     console.log(arr);
    //console.log(tableRomanToDecimal[i][1]);

    while (number >= tableRomanToDecimal[i][1]) {
      //console.log(tableRomanToDecimal[i][1]);
      result.push(tableRomanToDecimal[i][0]);
      number -= tableRomanToDecimal[i][1];
      //console.log(tableRomanToDecimal[i][0]);
    }
  }
  return result.join("");
};

//console.log(convertDecimalToRoman(1251));
formRomanConvert.addEventListener("submit", (e) => {
  e.preventDefault();
  resulText();
});

romanConvertBtn.addEventListener("click", () => {
  resulText();
});

const intValidator = (str, int) => {
  let errorMsg = "";

  if (!str || str.match(/[e.]/g)) {
    errorMsg = "Please enter a valid number.";
  } else if (int < 1) {
    errorMsg = "Please enter a number greater than or equal to 1.";
  } else if (int > 3999) {
    errorMsg = "Please enter a number less than or equal to 3999.";
  } else {
    // Nessun errore trovato

    return true;
  }

  // Visualizzazione dell'errore
  output.innerText = errorMsg;
  output.classList.add("alert");
  resultDiv.classList.add("hidden");

  return false;
};
//pulisci interfaccia
const resetUI = () => {
  output.innerText = "";
  output.classList.remove("alert");
};

const resulText = () => {
  const input = document.getElementById("number").value;
  const intInput = parseInt(input, 10);

  msgOutput.classList.remove("hidden");
  resultDiv.classList.remove("hidden");
  resetUI();
  if (intValidator(input, intInput)) {
    resultDiv.innerText = "Result:";
    msgOutput.innerHTML = convertDecimalToRoman(intInput);
  }
};
