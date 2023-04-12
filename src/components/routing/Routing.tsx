import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "../404/NotFound";
import Add from "../Add";
import All from "../All";
import Details from "../Details";
import Agency from "../Agency";

function Routing() {
  return (
    <>
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/add" element={<Add />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/about" element={<Agency />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  );
}

export default Routing;
