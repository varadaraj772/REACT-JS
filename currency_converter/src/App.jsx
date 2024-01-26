import { useState } from "react";
import { Inputs } from "./components";
import useCurrencyInfo from "./custom_hooks/use_info";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [converted_amnt, setConvertedAmnt] = useState(0);
  const currency_info = useCurrencyInfo(from);
  const options = Object.keys(currency_info);
  console.log(options);
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmnt(amount);
    setAmount(converted_amnt);
  };
  const convert = () => {
    setConvertedAmnt(amount * currency_info[to]);
  };

  return (
    <>
      <div className=" bg-slate-300 text-center ">
        <h1 className=" text-center">Currency Converter</h1>

        <Inputs
          label="from"
          amount={amount}
          currencyOpt={options}
          onCurrencyChange={(currency) => setFrom(currency)}
          selectCurrency={from}
          onAmountChange={(amount) => setAmount(amount)}
        ></Inputs>
        <button
          className=" bg-blue-400 outline-none rounded-lg p-4"
          onClick={() => swap()}
        >
          SWAP
        </button>
        <Inputs
          label="to"
          amount={converted_amnt}
          currencyOpt={options}
          onCurrencyChange={(currency) => setTo(currency)}
          selectCurrency={to}
        ></Inputs>
        <button
          className=" bg-blue-400 outline-none rounded-lg p-4"
          onClick={() => convert()}
        >
          CONVERT from {from} to {to}
        </button>
      </div>
    </>
  );
}

export default App;
