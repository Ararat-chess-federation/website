"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export function ScrollToBranch() {
  const params = useSearchParams();
  const branch = params.get("branch");

  useEffect(() => {
    if (!branch) {
      return;
    }

    const timeout = setTimeout(() => {
      const card = document.getElementById(`branch-${branch}`);

      if (card) {
        const top = card.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: top - 150, behavior: "smooth" });
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [branch]);

  return null;
}
