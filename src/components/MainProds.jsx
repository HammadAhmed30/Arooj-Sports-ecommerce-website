import React from "react";
import MainApp from "./MainApp";
import { Routes, Route } from "react-router-dom";
import Parent from "./Parent";
import { mainRouting } from "../Routes in JSON/MartialArtsData";
import InnerItem from "./InnerItem";
export default function MainProds() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route
          path="/1"
          element={
            <Parent dataItemsMartialArts={mainRouting[0]} indexItemOfData="1" />
          }
        />
        <Route
          path="/:para/:child"
          element={<InnerItem dataItemsMartialArts={mainRouting} />}
        />
      </Routes>
    </div>
  );
}
