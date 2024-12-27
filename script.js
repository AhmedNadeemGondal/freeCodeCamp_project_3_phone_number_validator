const inputButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

clearButton.addEventListener("click", () => {
  result.innerText = "Your results will appear here...";
  result.classList.remove("active");
  document.getElementById("user-input").value = "";
});

inputButton.addEventListener("click", () => {
  const input = document.getElementById("user-input").value;
  if (input === "") alert("Please provide a phone number");

  numberCheck(input) === true
    ? (result.innerText = `Valid US number: ${input}`)
    : (result.innerText = `Invalid US number: ${input}`);
  result.classList.add("active");
});

const numberCheck = (input) => {
  const inputNumber = input.match(/\d+/g).join("");
  const inputTest = input.match(/[()-\d]+/g).join("");
  const brackets = input.match(/[()]+/g) || [];
  const dashes = input.match(/-+/g) || [];

  if (inputNumber.length === 11 && input[0] === "1") {
    if (brackets.length === 2) {
      if (inputTest[1] === "(" && inputTest[5] === ")") {
        if (dashes.length < 3) {
          return true;
        }
      }
    } else if (brackets.length == 0) {
      if (dashes.length < 3) {
        return true;
      }
    }
  }

  if (inputNumber.length === 10) {
    if (brackets.length === 2) {
      if (inputTest[0] === "(" && inputTest[4] === ")") {
        if (dashes.length < 3) {
          return true;
        }
      }
    } else if (brackets.length == 0) {
      if (dashes.length < 3) {
        return true;
      }
    }
  }
  return false;
};
