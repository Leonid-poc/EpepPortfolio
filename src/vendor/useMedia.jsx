import { useMemo, useState, useEffect } from "react";

function useMedia(query) {
    const mediaQuery = useMemo(() => window.matchMedia(query), [query]);
    const [match, setMatch] = useState(mediaQuery.matches);
    useEffect(() => {
        const onChange = () => setMatch(mediaQuery.matches);
        mediaQuery.addEventListener("change", onChange);
    
        return () => mediaQuery.removeEventListener("change", onChange);
      }, [mediaQuery]);
  
    return match;
}

export default useMedia;