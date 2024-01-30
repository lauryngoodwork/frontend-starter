"use client";

import classNames from "classnames";
import { useMediaQuery } from "../../hooks";
import { ReactNode } from "react";
import { theme } from "../../utils/tailwind/theme";

export function Fold({
  children,
  bg,
}: {
  children: ReactNode;
  bg?: string | [string, string?];
}) {
  const tabletViewport = (theme?.screens as Record<string, string>)?.md;

  const isMobile = useMediaQuery(`(max-width: ${tabletViewport})`);
  const backgroundIsArray = Array.isArray(bg);
  const backgrounds = {
    desktop: backgroundIsArray ? bg[0] : bg,
    mobile: backgroundIsArray ? (bg[1] ? bg[1] : bg[0]) : bg,
  };

  return (
    <div
      style={{
        backgroundImage: isMobile
          ? `url('${backgrounds.mobile}')`
          : `url('${backgrounds.desktop}')`,
      }}
      className={classNames(
        "relative flex h-screen w-full bg-cover bg-center bg-no-repeat object-cover",
      )}
    >
      <div className="absolute left-0 top-0 flex h-full w-full">{children}</div>
    </div>
  );
}
