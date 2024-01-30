"use client";
import { ReactNode } from "react";
import { theme } from "../../utils/tailwind/theme";
import { useMediaQuery } from "../../hooks";
import classNames from "classnames";

const defaultPadding = 20;

/**
 * Restricts content within a max width
 * @param maxWidth -- The max width in number (Optional)
 * @param padding -- The padding in number, or a record with Tailwind screen keys and number (Optional)
 * @example ```
 * <ContentWidth maxWidth={1280} padding={{ md: 20, base: 10, lg: 30 }}>...</ContentWidth>
 * ```
 */
export function ContentWidth({
  maxWidth,
  padding = defaultPadding,
  children,
}: {
  maxWidth?: number;
  padding?: number | Record<string, number>;
  children: ReactNode;
}) {
  const paddingIsSingle = typeof padding === "number";

  const paddingXSingle = paddingIsSingle
    ? padding.toString() + "px"
    : defaultPadding.toString() + "px";

  const maxWidthInPx = maxWidth?.toString() + "px";
  const themeScreens = theme?.screens as Record<string, string>;

  const paddingKeys = paddingIsSingle ? undefined : Object.keys(padding);
  const themesInArray = Object.keys(themeScreens);
  const paddingInArray = !paddingIsSingle
    ? paddingKeys
        ?.map((k) => ({
          screen: k,
          value: padding[k]?.toString() + "px",
        }))
        .sort(
          (a, b) =>
            themesInArray.indexOf(b.screen) - themesInArray.indexOf(a.screen),
        )
    : undefined;

  const paddingX = paddingInArray
    ? paddingInArray
        ?.map((p) =>
          useMediaQuery(`(min-width: ${themeScreens[p.screen]})`)
            ? p.value
            : false,
        )
        .filter((p) => p !== false)[0] || defaultPadding.toString() + "px"
    : paddingXSingle;

  return (
    <div className="w-ful flex h-full" id="gw__content-width_container">
      <div
        style={{
          maxWidth: maxWidthInPx,
          paddingLeft: paddingX,
          paddingRight: paddingX,
        }}
        className={classNames(paddingInArray, "mx-auto flex w-full")}
        id={"gw__content-width_area"}
      >
        {children}
      </div>
    </div>
  );
}
