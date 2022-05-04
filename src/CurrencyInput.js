import React from "react";

const CurrencyInput = (props) => {
  const { currency, currencies, amount, onAmountChange, onSelectChange } =
    props;
  return (
    <div>
      <input
        type="text"
        className="input"
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
