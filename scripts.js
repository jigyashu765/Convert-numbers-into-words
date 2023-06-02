let numberInput = document.getElementById("number");
let convertBtn = document.getElementById("convertBtn");
let display = document.getElementById("display");

document.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    converter();
  } else if (event.key === "ArrowUp") {
      numberInput.value = numberInput.value + 1
      converter();
  } else if (event.key === "ArrowDown") {
      numberInput.value = numberInput.value - 1
      converter();
  }
});

convertBtn.addEventListener("click", converter);

const wordMap = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety",
  100: "hundred",
  1000: "thousand",
};

function converter() {
  let number = parseInt(numberInput.value);
  if (isNaN(number) || number < 0 || number > 9999) {
    display.innerHTML =
      "Invalid input. Please enter a number between 0 and 9999.";
    return;
  }
  let result = convertToWords(number);
  display.innerHTML = result;
}

function convertToWords(number) {
  if (number === 0) {
    return wordMap[number];
  } else if (number <= 20) {
    return wordMap[number];
  } else if (number < 100) {
    const tens = Math.floor(number / 10) * 10;
    const ones = Math.ceil(number % 10);
    if (ones === 0) {
      return wordMap[tens];
    } else {
      return wordMap[tens] + " " + wordMap[ones];
    }
  } else if (number < 1000) {
    const hundred = Math.floor(number / 100);

    let numberStr = number.toString();
    let number1 = numberStr.replace(numberStr[0], "");

    const tens = Math.floor(number1 / 10) * 10;
    const ones = Math.ceil(number % 10);
    if (number === 100) {
      return wordMap[hundred] + " hundred ";
    } else if (tens === 0) {
      return wordMap[hundred] + " hundred " + wordMap[ones];
    } else if (tens === 10) {
      return wordMap[hundred] + " hundred " + wordMap[number1];
    } else if (ones === 0) {
      return wordMap[hundred] + " hundred " + wordMap[tens];
    } else {
      return (
        wordMap[hundred] + " hundred " + wordMap[tens] + "-" + wordMap[ones]
      );
    }
  } else if (number < 10000) {
    const thousand = Math.floor(number / 1000);

    let numberStr1 = number.toString();
    let number1 = numberStr1.replace(numberStr1[0], "");

    const hundred = Math.floor(number1 / 100);

    let numberStr2 = number1.toString();
    let number2 = numberStr2.replace(numberStr2[0], "");

    const tens = Math.floor(number2 / 10) * 10;
    const ones = Math.ceil(number % 10);

    if (number === 1000) {
      return wordMap[thousand] + " thousand ";
    } else if (hundred === 0) {
      if (ones === 0) {
        return wordMap[thousand] + " thousand " + wordMap[tens];
      } else if (tens === 0) {
        return wordMap[thousand] + " thousand " + wordMap[ones];
      } else if (tens === 10) {
        return wordMap[thousand] + " thousand " + wordMap[number2];
      } else {
        return (
          wordMap[thousand] + " thousand " + wordMap[tens] + "-" + wordMap[ones]
        );
      }
    } else if (hundred !== 0) {
      if (ones === 0 && tens === 0) {
        return (
          wordMap[thousand] + " thousand " + wordMap[hundred] + " hundred "
        );
      } else if (ones !== 0 && tens !== 0) {
        if (tens === 10) {
            return (
                wordMap[thousand] + " thousand " + wordMap[hundred] + " hundred " +
                wordMap[number2]
              )
            } else {
            return (
                wordMap[thousand] + " thousand " + wordMap[hundred] + " hundred " +
                wordMap[tens] + '-' + wordMap[ones]
              )
        }
        } else if (ones === 0) {
        return (
          wordMap[thousand] +
          " thousand " +
          wordMap[hundred] +
          " hundred " +
          wordMap[tens]
        );
      } else if (tens === 0) {
        return (
          wordMap[thousand] +
          " thousand " +
          wordMap[hundred] +
          " hundred " +
          wordMap[ones]
        );
      } else {
        return (
          wordMap[thousand] +
          " thousand " +
          wordMap[hundred] +
          " hundred " +
          wordMap[tens] +
          "-" +
          wordMap[ones]
        );
      }
    }
  }
}

// for (let index = 0; index <= 9999; index++) {

//     let result = convertToWords(index);
//     console.log(index + ' = ' + result);

// }
