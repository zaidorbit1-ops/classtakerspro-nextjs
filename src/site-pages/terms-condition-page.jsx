"use client";

import React, { useEffect } from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import TermsAndConditionComp from "../component/terms-and-condition-comp";

import useLoadScripts from "../useLoadScripts"; // <-- the magic hook

function TermsConditionPage() {
  useLoadScripts([
    "/assets/js/jquery-3.7.1.min.js",
    "/assets/js/bootstrap.min.js",
    "/assets/js/swiper-bundle.min.js",
    "/assets/js/bg-moving.js",
    "/assets/js/isotope.pkgd.min.js",
    "/assets/js/wow.min.js",
    "/assets/js/custom.js",
    "/assets/js/custom-scroll-count.js"
  ]);

  return (
    <>
      <Header />
      <TermsAndConditionComp />
      <Footer />
    </>
  );
}

export default TermsConditionPage;
