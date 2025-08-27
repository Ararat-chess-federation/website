import { useEffect, useState } from "react";

export function useSlidesCount() {
  const itemSize = 420;
  const [itemsCount, setItemsCount] = useState(
    typeof window !== "undefined" ? Math.floor(window.innerWidth / itemSize) : 0
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= itemSize) {
        setItemsCount(1);
      } else {
        setItemsCount(Math.floor(window.innerWidth / itemSize));
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return itemsCount;
}
