import { useEffect, useRef, useState } from "react";

function App() {
  let [length, setLength] = useState(5);
  let [numAllow, setNumallow] = useState(false);
  let [charAllow, setcharallow] = useState(false);
  let [password, setPassword] = useState("");
  let passref=useRef(null);
  function generate_password() {
    let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";
    if (numAllow) {
      charset += "1234567890";
    }
    if (charAllow) {
      charset += "`~@#$%^&*()_-+=}{';><?/";
    }
    for (let i = 0; i < length; i++) {
      let passindex = Math.floor(Math.random() * charset.length + 1);
      pass += charset.charAt(passindex, 0);
    }
    setPassword(pass);
  }
  useEffect(() => {
    generate_password();
  }, [length, numAllow, charAllow, setPassword]);
  return (
    <>
      <div className=" bg-orange-200  text-center">
        <div className=" p-10">
          <label htmlFor="passwordbox">Password</label>
          <input
            type="text"
            name="passwordbox"
            className=" rounded-md bg-slate-200 mx-5 w-auto p-2"
            value={password}
            readOnly
            ref={passref}
          ></input>
          <button className=" bg-green-400 rounded-lg w-20" onClick={()=>{
            window.navigator.clipboard.writeText(password);
            passref.current?.select()
          }}>COPY</button>
        </div>
        <div className=" p-5">
          <label htmlFor="len">length:{length}</label>
          <input
            type="range"
            name="len"
            className="mx-3"
            max={20}
            min={5}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          ></input>
          <label htmlFor="chk1">Allow numbers</label>
          <input
            type="checkbox"
            name="len"
            className="mx-3"
            onChange={() => {
              setNumallow(!numAllow);
            }}
          ></input>
          <label htmlFor="chk2">Allow Characters</label>
          <input
            type="checkbox"
            name="len"
            className=" mx-3"
            onChange={() => {
              setcharallow(!charAllow);
            }}
          ></input>
        </div>
      </div>
    </>
  );
}

export default App;
