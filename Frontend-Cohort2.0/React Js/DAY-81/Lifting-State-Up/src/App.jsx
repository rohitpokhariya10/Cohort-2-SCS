import React, { useState } from "react";
import NavBar from "./Components/NavBar";

const App = () => {
  const [name, setName] = useState("");

  function changeData(childName) {
    setName(childName);
  }

  return (
    <div className="app-container">
      <h1 className="title">
        {/* In the beginning, there's usually no name, so it uses "Guest" as a default safety net. Later, once the name is set, it will display that name. */}
        Hi, This is <span className="highlight-name">{name || "Guest"}</span>
      </h1>


      <NavBar changeData={changeData} />
    </div>
  );
};

export default App;
