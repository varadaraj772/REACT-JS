/* eslint-disable react/prop-types */
import { useId } from "react";

function Inputs({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOpt = [],
  selectCurrency = "usd",
}) {
  const amntId = useId();
  return (
    <div>
      <div className={` p-3 rounded-md text-sm flex`}>
        <div className=" w-1/2 bg-slate-200 rounded-lg">
          <label
            className=" text-black/40 mb-2 inline-block mx-3"
            htmlFor={amntId}
          >
            {label}
          </label>
          <input
            id={amntId}
            className=" rounded-lg bg-slate-400 py-1.5 px-7"
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
          ></input>
        </div>
        <div className=" w1/2 flex flex-wrap justify-end text-right">
          <p className=" text-black/40 mb-2 w-full">Currency Type</p>
          <select
            className=" rounded-lg p-1 bg-gray-100 cursor-pointer outline-none"
            value={selectCurrency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
          >
            {currencyOpt.map((Currency) => (
        
              <option key={Currency} value={Currency}>
                {Currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Inputs;
