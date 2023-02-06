import React from "react";
import MainApp from "./MainApp";
import { Routes, Route } from "react-router-dom";
import Parent from "./Parent";
import { mainRouting } from "../Routes in JSON/MartialArtsData";
import InnerItem from "./InnerItem";
import Detalis from "./Detalis";
import PageNotFound from "./PageNotFound";
export default function MainProds() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route
          path="/:para"
          element={<Parent dataItemsMartialArts={mainRouting} />}
        />
        <Route
          path="/:para/:child"
          element={<InnerItem dataItemsMartialArts={mainRouting} />}
        />
        <Route path="/:para/:child/:prod" element={<Detalis />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
