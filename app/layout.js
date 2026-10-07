import Script from "next/script";
import "./globals.css";
import "../src/component/PopupForm.css";
import AppRuntime from "./app-runtime";

export const metadata = {
  metadataBase: new URL("https://classtakerspro.com"),
  title: {
    default: "Class Takers Pro",
    template: "%s | Class Takers Pro",
  },
  description:
    "Expert help for online classes, exams, assignments, and coursework. PhD tutors handle 70+ subjects with guaranteed grades and confidential support.",
  keywords: [
    "online class help",
    "hire someone to take my class",
    "online exam help",
    "online assignment help",
    "PhD tutors",
    "academic support service",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Class Takers Pro | Online Class Help by PhD Experts",
    description:
      "Get trusted academic support for online classes, exams, and assignments from qualified PhD tutors.",
    url: "https://classtakerspro.com",
    siteName: "Class Takers Pro",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Class Takers Pro",
    description:
      "Expert help for online classes, exams, and assignments from verified PhD tutors.",
  },
  icons: {
    icon: "/assets/images/favicon-96x96.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/fontawesome.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body>
        <AppRuntime />
        {children}
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
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1367679858482120');
fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1367679858482120&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
