"use client";

import { useEffect } from "react";

export default function Analytics() {
  useEffect(() => {
    let loaded = false;

    const loadScripts = () => {
      if (loaded) return;
      loaded = true;

      // Clean up event listeners
      window.removeEventListener("mousemove", loadScripts);
      window.removeEventListener("scroll", loadScripts);
      window.removeEventListener("touchstart", loadScripts);
      window.removeEventListener("keydown", loadScripts);

      // 1. Google Tag Manager
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-NJX8FRDX');

      // 2. Google Analytics (gtag.js)
      const gaScript = document.createElement("script");
      gaScript.async = true;
      gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-JP5XLCYZN7";
      document.head.appendChild(gaScript);

      window.dataLayer = window.dataLayer || [];
      function gtag() { window.dataLayer.push(arguments); }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', 'G-JP5XLCYZN7');

      // 3. Microsoft Clarity
      (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "vbqdl2iofj");
    };

    // Trigger loading scripts on user interaction
    window.addEventListener("mousemove", loadScripts, { passive: true });
    window.addEventListener("scroll", loadScripts, { passive: true });
    window.addEventListener("touchstart", loadScripts, { passive: true });
    window.addEventListener("keydown", loadScripts, { passive: true });

    // Fallback: load after 5 seconds of idle time if no interaction occurs
    const timeout = setTimeout(loadScripts, 5000);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("mousemove", loadScripts);
      window.removeEventListener("scroll", loadScripts);
      window.removeEventListener("touchstart", loadScripts);
      window.removeEventListener("keydown", loadScripts);
    };
  }, []);

  return null;
}
