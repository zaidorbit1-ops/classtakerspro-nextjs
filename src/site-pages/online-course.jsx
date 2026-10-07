"use client";

import React from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import useLoadScripts from "../useLoadScripts"; // <-- the magic hook
import OnlineCourseComp from "../component/online-course-comp";

function OnlineCoursePage() {
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
      <OnlineCourseComp />
      <Footer />
    </>
  );
}

export default OnlineCoursePage;
