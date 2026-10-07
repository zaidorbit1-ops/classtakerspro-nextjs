"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import PopupForm from "../src/component/PopupForm";
import { shouldShowPopup } from "../src/popupConfig";

export default function AppRuntime() {
  const pathname = usePathname();
  const [showPopup, setShowPopup] = useState(false);

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

  return showPopup ? <PopupForm onClose={() => setShowPopup(false)} /> : null;
}
