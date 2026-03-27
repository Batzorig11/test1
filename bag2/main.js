const display = document.querySelector(".display");

const setDisplay = (value) => {
  display.value = value;
};

const getDisplay = () => display.value;

const isOperator = (char) => ["+", "-", "*", "/"].includes(char);

const appendDigit = (char) => {
  const current = getDisplay();

  if (current === "Error") {
    setDisplay(char);
    return;
  }

  if (char === ".") {
    const lastChar = current.slice(-1);
    const splitExpr = current.split(/\+|\-|\*|\//);
    const currentOperand = splitExpr[splitExpr.length - 1];

    if (currentOperand.includes(".")) return;

    if (current === "" || isOperator(lastChar)) {
      setDisplay(current + "0.");
    } else {
      setDisplay(current + ".");
    }
    return;
  }

  setDisplay(current + char);
};

const Raem = (action) => {
  const current = getDisplay();

  if (action === "AC" || action === undefined) {
    setDisplay("");
    return;
  }

  if (action === "clear") {
    setDisplay(current.slice(0, -1));
    return;
  }

  if (action === "%") {
    try {
      const result = eval(current) / 100;
      setDisplay(String(result));
    } catch (error) {
      setDisplay("Error");
    }
    return;
  }

  if (action === "+/-") {
    if (!current) return;
    let value;

    try {
      const computed = eval(current);
      value = -computed;
      setDisplay(String(value));
    } catch (error) {
      setDisplay("Error");
    }
  }
};

const Mgl = (token) => {
  const current = getDisplay();
  const lastChar = current.slice(-1);

  if (token === "=") {
    try {
      const result = eval(current);
      setDisplay(String(result));
    } catch (error) {
      setDisplay("Error");
    }
    return;
  }

  if (token === "+/-") {
    Raem("+/-");
    return;
  }

  if (isOperator(token)) {
    if (!current && token !== "-") return; // allow leading negative
    if (isOperator(lastChar)) {
      setDisplay(current.slice(0, -1) + token);
    } else {
      setDisplay(current + token);
    }
    return;
  }

  if (token === ".") {
    appendDigit(token);
    return;
  }

  // fallback: append digits and others
  appendDigit(token);
};

const too = appendDigit;
