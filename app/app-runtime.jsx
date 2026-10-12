"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import PopupForm from "../src/component/PopupForm";
import { shouldShowPopup } from "../src/popupConfig";

export default function AppRuntime() {
  const pathname = usePathname();
  const isBlogAdmin = pathname === "/blog-admin" || pathname.startsWith("/blog-admin/");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("blog-admin-route", isBlogAdmin);
    return () => document.body.classList.remove("blog-admin-route");
  }, [isBlogAdmin]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  useEffect(() => {
    if (!shouldShowPopup(pathname)) {
      setShowPopup(false);
      return undefined;
    }

    setShowPopup(false);
    const timer = window.setTimeout(() => setShowPopup(true), 4000);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {!isBlogAdmin ? (
        <>
          <a
            href="https://wa.me/16087655189"
            target="_blank"
            rel="noreferrer"
            id="whatsapp-float"
            aria-label="Chat with Class Takers Pro on WhatsApp"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="" />
          </a>
          <Script id="tawk-loader" strategy="afterInteractive">
            {`window.Tawk_API = window.Tawk_API || {};
window.Tawk_LoadStart = window.Tawk_LoadStart || new Date();
(function () {
  if (document.getElementById("tawk-script")) return;
  var script = document.createElement("script");
  script.id = "tawk-script";
  script.async = true;
  script.src = "https://embed.tawk.to/6876e9cd3d9d30190be77382/1j0882j7m";
  script.charset = "UTF-8";
  script.setAttribute("crossorigin", "*");
  document.head.appendChild(script);
})();`}
          </Script>
        </>
      ) : null}
      {showPopup ? <PopupForm onClose={() => setShowPopup(false)} /> : null}
    </>
  );
}
