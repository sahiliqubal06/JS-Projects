import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "";

    if (lowerCase) {
      str += "abcdefghijklmnopqrstuvwxyz";
    }

    if (upperCase) {
      str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (numAllowed) {
      str += "0123456789";
    }

    if (charAllowed) {
      str += "!@#$%^&*()_+[]{}|;:,.<>?";
    }

    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, upperCase, lowerCase]);

  useEffect(() => {
    generatePassword();
  }, [length, numAllowed, charAllowed, upperCase, lowerCase]);

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current.select();
  };

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-amber-600">
      <h1 className="text-white text-center text-xl font-bold my-3">
        Password Generator App
      </h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          className="bg-blue-700 rounded-lg hover:bg-blue-900 text-white px-3"
          onClick={copyPassword}
        >
          copy
        </button>
      </div>
      <div className="text-sm flex gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
            name=""
            id=""
          />
          <label htmlFor="length">Length:{length}</label>
        </div>
        <div className="">
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              onChange={(e) => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="number">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={(e) => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="character">Characters</label>
          </div>{" "}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={upperCase}
              onChange={(e) => {
                setUpperCase((prev) => !prev);
              }}
            />
            <label htmlFor="uppercase">Uppercase</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={lowerCase}
              onChange={(e) => {
                setLowerCase((prev) => !prev);
              }}
            />
            <label htmlFor="lowercase">Lowercase</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
