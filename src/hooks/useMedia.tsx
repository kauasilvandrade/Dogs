import { useEffect, useState } from "react";

type Props = {
  media: string;
};

export function useMedia({ media }: Props) {
  const [match, setMatch] = useState<boolean | null>(null);

  useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    }
    changeMatch();
    window.addEventListener("resize", changeMatch);

    return () => window.removeEventListener("resize", changeMatch);
  }, [media]);
  return match;
}
