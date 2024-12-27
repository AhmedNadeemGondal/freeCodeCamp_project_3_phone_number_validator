const inputButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

clearButton.addEventListener("click", () => {
  result.innerText = "";
  document.getElementById("user-input").value = "";
});

inputButton.addEventListener("click", () => {
  const input = document.getElementById("user-input").value;
  if (input === "") alert("Please provide a phone number");

  numberCheck_1(input) === true
    ? (result.innerText = `Valid US number: ${input}`)
    : (result.innerText = `Invalid US number: ${input}`);

  // const inputNumber = input.match(/\d+/g).join("");
  // const brackets = input.match(/[()]+/g) || [];
  // const dashes = input.match(/-+/g) || [];
  // console.log(dashes);

  // if (dashes.length > 2) {
  //   result.innerText = `Invalid US number: ${input}`;
  // } else if (brackets.length !== 2) {
  //   result.innerText = `Invalid US number: ${input}`;
  // } else if (inputNumber.length > 11 || inputNumber.length < 10) {
  //   result.innerText = `Invalid US number: ${input}`;
  // } else if (inputNumber.length === 11 && input[0] !== "1") {
  //   result.innerText = `Invalid US number: ${input}`;
  // } else if (inputNumber.length === 10 && input[0] !== String(inputNumber[0]) ){
  //   result.innerText = `Invalid US number: ${input}`;
  // }
});

const numberCheck = (input) => {
  const inputNumber = input.match(/\d+/g).join("");
  const brackets = input.match(/[()]+/g) || [];
  const dashes = input.match(/-+/g) || [];
  console.log(dashes);

  if (inputNumber.length === 11 && input[0] === "1") {
    if (brackets.length === 2 || brackets.length == 0) {
      if (dashes.length < 3) {
        return true;
      }
    }
  }

  if (inputNumber.length === 10) {
    if (brackets.length === 2 || brackets.length == 0) {
      if (dashes.length < 3) {
        return true;
      }
    }
  }

  if (dashes.length > 2) {
    return false;
  } else if (brackets.length !== 2) {
    return false;
  } else if (inputNumber.length > 11 || inputNumber.length < 10) {
    return false;
  } else if (inputNumber.length === 11 && input[0] !== "1") {
    return false;
  } else if (inputNumber.length === 10 && input[0] !== String(inputNumber[0])) {
    return false;
  } else {
    return true;
  }
};

// else if(/\?/.test(input)){
//   result.innerText = `Invalid US number: ${input}`;}
const numberCheck_1 = (input) => {
  const inputNumber = input.match(/\d+/g).join("");
  const inputTest = input.match(/[()-\d]+/g).join("");
  console.log(inputTest);

  const brackets = input.match(/[()]+/g) || [];
  const dashes = input.match(/-+/g) || [];
  // console.log(dashes);

  if (inputNumber.length === 11 && input[0] === "1") {
    if (brackets.length === 2) 
    {
      if (inputTest[1] === "(" && inputTest[5] === ")") 
      {
        if (dashes.length < 3) 
        {
          return true;
        }
      }
    } else
    if(brackets.length == 0)
    {
      if (dashes.length < 3) 
      {
        return true;
      }
    }
  }

  if (inputNumber.length === 10) {
    if (brackets.length === 2) 
      {
        if (inputTest[0] === "(" && inputTest[4] === ")") 
        {
          if (dashes.length < 3) 
          {
            return true;
          }
        }
      } else
      if(brackets.length == 0)
      {
        if (dashes.length < 3) 
        {
          return true;
        }
      }
  }
return false
  // if (dashes.length > 2) {
  //   return false;
  // } else if (brackets.length !== 2) {
  //   return false;
  // } else if (inputNumber.length > 11 || inputNumber.length < 10) {
  //   return false;
  // } else if (inputNumber.length === 11 && input[0] !== "1") {
  //   return false;
  // } else if (inputNumber.length === 10 && input[0] !== String(inputNumber[0])) {
  //   return false;
  // } else {
  //   return true;
  // }
};
