import React from "react";
import MainApp from "./MainApp";
import { Routes, Route, useLocation } from "react-router-dom";
import Parent from "./Parent";
import { mainRouting } from "../Routes in JSON/MartialArtsData";
import InnerItem from "./InnerItem";
import Detalis from "./Detalis";
import PageNotFound from "./PageNotFound";
import SendInquiry from "./SendInquiry";
import ContactPage from "./ContactPage";
import AboutPage from "./AboutPage";
import { AnimatePresence } from "framer-motion";

export default function MainProds() {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence>
        <Routes loaction={location} key={location.pathname}>
          <Route path="/" element={<MainApp />} />
          <Route
            path="/:para"
            element={<Parent dataItemsMartialArts={mainRouting} />}
          />
          <Route
            path="/:para/:child"
            element={<InnerItem dataItemsMartialArts={mainRouting} />}
          />
          <Route
            path="/sendinquiry/:para/:child/:prod"
            element={<SendInquiry />}
          />
          <Route path="/:para/:child/:prod" element={<Detalis />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
