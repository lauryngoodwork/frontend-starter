"use client";

import classNames from "classnames";
import { useMediaQuery } from "../../hooks";
import { ReactNode } from "react";
import { theme } from "../../utils/tailwind/theme";

/**
 * Fold with width and height of screen
 * @param bg -- Background image source path, or a record with Tailwind screen keys and image source path (Optional)
 * @example ```
 * <Fold bg={{ md: "/images/foo.png", base: "/images/bar.png" }}>...</Fold>
 * ```
 */
export function Fold({
  children,
  bg,
}: {
  children: ReactNode;
  bg?: string | Record<string, string>;
}) {
  const bgIsSingle = typeof bg === "string";
  const bgSingle = bgIsSingle ? bg : undefined;

  const themeScreens = theme?.screens as Record<string, string>;

  const bgKeys = bgIsSingle || bg === undefined ? undefined : Object.keys(bg);
  const themesInArray = Object.keys(themeScreens);
  const bgInArray =
    !bgIsSingle && bg !== undefined
      ? bgKeys
          ?.map((k) => ({
            screen: k,
            value: bg[k],
          }))
          .sort(
            (a, b) =>
              themesInArray.indexOf(b.screen) - themesInArray.indexOf(a.screen),
          )
      : undefined;

  const bgImage = bgInArray
    ? bgInArray
        ?.map((p) =>
          useMediaQuery(`(min-width: ${themeScreens[p.screen]})`)
            ? p.value
            : false,
        )
        .filter((p) => p !== false)[0]
    : bgSingle;

  return (
    <div
      style={{
        backgroundImage: `url('${bgImage}')`,
      }}
      className={classNames(
        "relative flex h-screen w-full bg-cover bg-center bg-no-repeat object-cover",
      )}
    >
      <div className="absolute left-0 top-0 flex h-full w-full">{children}</div>
    </div>
  );
}
