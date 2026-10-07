import { useEffect } from "react";

export default function useLoadScripts(scripts) {
  useEffect(() => {
    const loadedScripts = scripts.map(src => {
      const script = document.createElement("script");
      script.src = src;
      script.async = false;
      document.body.appendChild(script);
      return script;
    });

    return () => {
      loadedScripts.forEach(script => {
        document.body.removeChild(script);
      });
    };
  }, [scripts]);
}
