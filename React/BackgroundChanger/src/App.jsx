import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [color, setColor] = useState("green");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <h1 className=" text-center text-4xl font-bold ">
          Background color Changer{" "}
        </h1>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <p className="text-center font-bold ">
          Click the below buttons to change the background color according to
          your choice.
        </p>

        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black hover:bg-red-600"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black hover:bg-blue-600"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black hover:bg-pink-600"
            onClick={() => setColor("pink")}
          >
            Pink
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black hover:bg-violet-600"
            onClick={() => setColor("violet")}
          >
            Violet
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black hover:bg-red-600"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black hover:bg-blue-600"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black hover:bg-pink-600"
            onClick={() => setColor("pink")}
          >
            Pink
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black hover:bg-violet-600"
            onClick={() => setColor("violet")}
          >
            Violet
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black hover:bg-green-600"
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black hover:bg-yellow-600"
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black hover:bg-orange-600"
            onClick={() => setColor("orange")}
          >
            Orange
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black hover:bg-teal-600"
            onClick={() => setColor("teal")}
          >
            Teal
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black hover:bg-cyan-600"
            onClick={() => setColor("cyan")}
          >
            Cyan
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black hover:bg-sky-600"
            onClick={() => setColor("sky")}
          >
            Sky
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black hover:bg-indigo-600"
            onClick={() => setColor("indigo")}
          >
            Indigo
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black hover:bg-purple-600"
            onClick={() => setColor("purple")}
          >
            Purple
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black hover:bg-fuchsia-600"
            onClick={() => setColor("fuchsia")}
          >
            Fuchsia
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black hover:bg-rose-600"
            onClick={() => setColor("rose")}
          >
            Rose
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black hover:bg-lime-600"
            onClick={() => setColor("lime")}
          >
            Lime
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black hover:bg-emerald-600"
            onClick={() => setColor("emerald")}
          >
            Emerald
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black hover:bg-amber-600"
            onClick={() => setColor("amber")}
          >
            Amber
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black hover:bg-slate-600"
            onClick={() => setColor("slate")}
          >
            Slate
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black hover:bg-gray-600"
            onClick={() => setColor("gray")}
          >
            Gray
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black hover:bg-zinc-600"
            onClick={() => setColor("zinc")}
          >
            Zinc
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black hover:bg-neutral-600"
            onClick={() => setColor("neutral")}
          >
            Neutral
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black hover:bg-stone-600"
            onClick={() => setColor("stone")}
          >
            Stone
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black hover:bg-black"
            onClick={() => setColor("black")}
          >
            Black
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black hover:bg-white"
            onClick={() => setColor("white")}
          >
            White
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
