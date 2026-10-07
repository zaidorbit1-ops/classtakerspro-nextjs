"use client";

import React, { useEffect } from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import PrivacyPolicyComp from "../component/privacy-policy-comp";

import useLoadScripts from "../useLoadScripts"; // <-- the magic hook

function PrivacyPolicyPage() {
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
      <PrivacyPolicyComp />
      <Footer />
    </>
  );
}

export default PrivacyPolicyPage;
