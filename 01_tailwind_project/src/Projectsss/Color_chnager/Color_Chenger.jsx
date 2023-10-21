import { useState } from "react";
//import "./App.css";

function Color_Changer() {
  const [color, setColor] = useState("yellow");

  const handlePurple = () => {
    //console.log("check", e);
  };

  const handleWhite = () => {
    //
  };

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: { color } }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg py-2">
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              onClick={handleWhite}
              style={{ backgroundColor: "white" }}
            >
              white
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              onClick={handlePurple}
              style={{ backgroundColor: "Purple" }}
            >
              Purple
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              onClick={() => setColor("yellow")}
              style={{ backgroundColor: "yellow" }}
            >
              yellow
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              onClick={() => setColor("pink")}
              style={{ backgroundColor: "pink" }}
            >
              pink
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              onClick={() => setColor("blue")}
              style={{ backgroundColor: "blue" }}
            >
              blue
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              onClick={() => setColor("red")}
              style={{ backgroundColor: "red" }}
            >
              red
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              onClick={() => setColor("green")}
              style={{ backgroundColor: "green" }}
            >
              green
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              onClick={() => setColor("orange")}
              style={{ backgroundColor: "orange" }}
            >
              orange
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Color_Changer;
