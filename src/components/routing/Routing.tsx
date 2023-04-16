import React, { SetStateAction } from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../404/NotFound";
import Add, { AdInterface } from "../Add";
import All from "../All";
import Details from "../Details";
import Agency from "../Agency";
import Archieved from "../Archieved";
import Search from "../../Search";

interface RoutingProps {
  ads: AdInterface[];
  setAds: React.Dispatch<SetStateAction<AdInterface[]>>;
}

function Routing({ ads, setAds }: RoutingProps) {
  return (
    <>
      <Routes>
        <Route path="/" element={<All ads={ads} />} />
        <Route path="/all" element={<All ads={ads} />} />
        <Route path="/add" element={<Add ads={ads} setAds={setAds} />} />
        <Route
          path="/details/:id"
          element={<Details ads={ads} setAds={setAds} />}
        />
        <Route path="/about" element={<Agency />} />
        <Route path="/archived" element={<Archieved />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Routing;
