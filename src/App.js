import "./App.css";
import CurrencyInput from "./CurrencyInput";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const URL_API =
    "https://api.apilayer.com/fixer/latest?apikey=GfALTWcSomk8apHZcbJAXR92aUWNnEIM";

  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setcurrency1] = useState("USD");
  const [currency2, setcurrency2] = useState("UAN");

  useEffect(() => {
    axios.get(URL_API).then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div className="App">
      <CurrencyInput
        currencies={["USD"]}
        amount={amount1}
        currency={currency1}
      />
      <CurrencyInput
        currencies={["USD"]}
        amount={amount2}
        currency={currency2}
      />
    </div>
  );
}

export default App;
