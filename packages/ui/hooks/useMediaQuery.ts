import { useEffect, useState } from "react";

/**
 * A hook that
 * @param query media query string
 * @returns boolean
 * @example ```
 * const isDesktop = useMediaQuery("(min-width: 1280px)");
 * ```
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
