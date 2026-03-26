const display = document.querySelector(".display");

const too = (a) => {
  // Prevent multiple decimals
  if (a === "." && display.innerHTML.includes(".")) {
    return;
  }
  display.innerHTML += a;
};

const Raem = (b) => {
  if (b === "AC") {
    display.innerHTML = "";
  } else if (b === "clear") {
    // Remove the last character
    display.innerHTML = display.innerHTML.slice(0, -1);
  } else if (b === "%") {
    try {
      const result = eval(display.innerHTML) / 100;
      display.innerHTML = result;
    } catch (error) {
      display.innerHTML = "Error";
    }
  }
};

const Mgl = (c) => {
  if (c === "=") {
    try {
      const result = eval(display.innerHTML);
      display.innerHTML = result;
    } catch (error) {
      display.innerHTML = "Error";
    }
  } else if (c === "/" || c === "*" || c === "+" || c === "-") {
    // Add operator to display
    display.innerHTML += c;
  }
};
