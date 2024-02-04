import { useState } from "react";
import { Copy } from "react-feather";

const App = () => {
  const [data, setData] = useState("");
  const [copied, setCopied] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.quotable.io/quotes/random");
      const [result] = await response.json();
      setData(result);
      setCopied(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log(data);
  const handleCopyClick = async () => {
   data
      ? `${data.content} - ${data.author}`
      : "";
    if (data) {
      try {
        await navigator.clipboard.writeText(data);
        setCopied(true);
      } catch (error) {
        console.error("Error copying to clipboard:", error);
      }
    }
  };



  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500">
      <div className="max-w-md p-8 bg-opacity-80 backdrop-blur-xl rounded-md overflow-hidden transition-all duration-300 ease-in-out border-2 border-white border-opacity-20">
        <h1 className="text-4xl font-bold text-white mb-6">Quotes</h1>
        <button
          className="bg-white text-blue-500 px-4 py-2 rounded-md mb-4 hover:bg-transparent hover:border border-white hover:tex transition-all duration-300 ease-in-out"
          onClick={fetchData}
        >
          Generate Quote
        </button>
        {data ? (
          <div className="text-white mb-4">
            <p className="text-xl font-bold">{data.content}</p>
            <p className="font-normal text-lg">
              - {data.author}
            </p>
          </div>
        ) : (
          <p className="text-gray-700"></p>
        )}
        {data && (
          <div className="flex items-center">
            <p
              className={`text-white px-4 py-2 font-mono rounded-md mr-2 ${
                copied ? "bg-opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handleCopyClick}
              disabled={copied}
            >
              {copied ? "Copied!" : "Copy Quote"}
            </p>
            <Copy
              className={`w-6 h-6 cursor-pointer text-green-800 hover:text-green-600`}
              onClick={handleCopyClick}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
