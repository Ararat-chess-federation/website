"use client";;
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

import type { JSX } from "react";

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  });
}
export function CSPostHogProvider({ children }: { children: JSX.Element }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
