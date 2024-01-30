"use client";
import { ReactNode } from "react";

export function ContentWidth({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full w-full" id="gw__content-width_container">
      <div
        className="mx-auto flex w-full max-w-[1380px] px-[20px] md:px-[50px]"
        id={"gw__content-width_area"}
      >
        {children}
      </div>
    </div>
  );
}
