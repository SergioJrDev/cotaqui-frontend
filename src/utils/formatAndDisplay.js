import Dinero from "dinero.js";

const formatAndDisplay = value => {
  const valueFormatted = value.toFixed();
  const valueToInt = parseInt(valueFormatted, 10);
  return `R$${Dinero({ amount: valueToInt * 100 }).toFormat("0,0.00")}`;
};

export default formatAndDisplay;
