import React from "react";
import "./CurrencyInput.css";

const CurrencyInput = (props) => {
  const { currency, currencies, amount, onAmountChange, onSelectChange } =
    props;
  return (
    <div className="content-currency">
      <input
        type="text"
        value={amount}
        onChange={(e) => onAmountChange(e.target.value)}
      />
      <select value={currency} onChange={(e) => onSelectChange(e.target.value)}>
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyInput;
