import React, { Component, useState } from "react";
import "./App.css";
import Dashboard from "./Dashboard/Dashboard";
import CardComponent from "./CardComponent/CardComponent";
import MainContent from "./MainContent/MainContent";
function App() {
  return (
    <div className="App space-y-16">
      <div>
        <Dashboard />
      </div>
      <div className="main-content flex  flex-row justify-center space-x-20 pb-20">
        <div className="Cards ">
          <CardComponent />
        </div>
        <div className="decks  ">
          <MainContent />
        </div>
      </div>
    </div>
  );
}

export default App;
