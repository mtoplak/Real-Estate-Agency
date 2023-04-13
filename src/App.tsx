import React from "react";
import "./App.css";
import Routing from "./components/routing/Routing";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { AdInterface } from "./components/Add";

function App() {
  const [ads, setAds] = React.useState<AdInterface[]>([]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="App">
          <Routing ads={ads} setAds={setAds} />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
