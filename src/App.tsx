import React from "react";
import "./App.css";
import Routing from "./components/routing/Routing";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { AdInterface, initialAds } from "./models/ad";

function App() {
  const [ads, setAds] = React.useState<AdInterface[]>(initialAds);
  const [finishedAds, setFinishedAds] = React.useState<AdInterface[]>([]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="App">
          <Routing
            ads={ads}
            setAds={setAds}
            finishedAds={finishedAds}
            setFinishedAds={setFinishedAds}
          />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
