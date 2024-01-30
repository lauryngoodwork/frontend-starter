"use client";

import { ContentWidth, Fold } from "ui/components";
export default function Page() {
  return (
    <div className="flex h-full w-full">
      <Fold
        bg={{
          md: "https://picsum.photos/200",
          base: "https://picsum.photos/500/100",
        }}
      >
        <ContentWidth maxWidth={1280} padding={{ lg: 30, md: 20, base: 10 }}>
          asdf
        </ContentWidth>
      </Fold>
    </div>
  );
}
