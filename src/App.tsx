import React from "react";
import "./App.css";
import Routing from "./components/routing/Routing";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routing />
      </BrowserRouter>
    </>
  );
}

export default App;
