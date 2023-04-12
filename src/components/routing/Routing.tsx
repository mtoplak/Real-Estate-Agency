import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../404/NotFound";
import Add from "../Add";
import All from "../All";
import Details from "../Details";
import Agency from "../Agency";
import Archieved from "../Archieved";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/all" element={<All />} />
        <Route path="/add" element={<Add />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/about" element={<Agency />} />
        <Route path="/archived" element={<Archieved />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Routing;
