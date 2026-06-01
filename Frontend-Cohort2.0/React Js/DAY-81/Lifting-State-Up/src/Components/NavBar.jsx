import React, { useState } from "react";

const NavBar = ({ changeData }) => {
    //console.log(changeData);
    
  const [newName, setNewName] = useState("");

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
         //Parent function call
        changeData(newName);

        setNewName("");
      }}
    >
      <input
        className="input"
        type="text"
        placeholder="Enter your name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />

      <button className="btn" type="submit">
        Update Name
      </button>
    </form>
  );
};

export default NavBar;
