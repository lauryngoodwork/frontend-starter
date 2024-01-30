import { useEffect, useState } from "react";

/**
 *
 * @param query media query string
 * @returns boolean
 */
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState<boolean>(false);
  useEffect(() => {
    const getMediaQuery = () => {
      const matchQuery = window.matchMedia(query);
      setMatches(matchQuery.matches);
    };
    getMediaQuery();
    addEventListener("resize", getMediaQuery);
    return () => {
      removeEventListener("resize", getMediaQuery);
    };
  }, [query]);

  return matches;
}
