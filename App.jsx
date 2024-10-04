import React from "react";
import "./App.css";
import Sidebar from "./component/Sidebar/Sidebar";
const App = () => {
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
      </div>
    </div>
  );
};

export default App;
