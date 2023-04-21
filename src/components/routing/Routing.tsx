import React, { SetStateAction } from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../404/NotFound";
import Add, { AdInterface } from "../forms/Add";
import All from "../lists/All";
import Details from "../Details";
import Agency from "../Agency";
import Archieved from "../lists/Archieved";
import Search from "../Search";
import Edit from "../forms/Edit";

interface RoutingProps {
  ads: AdInterface[];
  setAds: React.Dispatch<SetStateAction<AdInterface[]>>;
  finishedAds: AdInterface[];
  setFinishedAds: React.Dispatch<SetStateAction<AdInterface[]>>;
}

function Routing({ ads, setAds, finishedAds, setFinishedAds }: RoutingProps) {
  console.log("končani");
  console.log(finishedAds);
  return (
    <>
      <Routes>
        <Route path="/" element={<All ads={ads} />} />
        <Route path="/all" element={<All ads={ads} />} />
        <Route path="/add" element={<Add ads={ads} setAds={setAds} />} />
        <Route path="/edit/:id" element={<Edit ads={ads} setAds={setAds} />} />
        <Route
          path="/details/:id"
          element={
            <Details
              ads={ads}
              setAds={setAds}
              setFinishedAds={setFinishedAds}
            />
          }
        />
        <Route path="/about" element={<Agency />} />
        <Route
          path="/archived"
          element={<Archieved finishedAds={finishedAds} />}
        />
        <Route path="/search" element={<Search ads={ads} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Routing;
