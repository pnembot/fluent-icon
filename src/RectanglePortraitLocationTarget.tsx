import type { SVGProps } from "react";

export function RectanglePortraitLocationTarget(
  props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>
) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      {...rest}
    >
      <path
        fill="currentColor"
        d="M4 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6.274l-.018-.007A1.5 1.5 0 0 0 15 9.086V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4.777a4.493 4.493 0 0 0 .92 1H6a2 2 0 0 1-2-2V4Zm11.056 11.332a1 1 0 1 1-1.111-1.663a1 1 0 0 1 1.11 1.662ZM17.949 14h.551a.5.5 0 0 1 0 1h-.551A3.487 3.487 0 0 1 15 17.949v.551a.5.5 0 0 1-1 0v-.551A3.487 3.487 0 0 1 11.051 15H10.5a.5.5 0 0 1 0-1h.551A3.487 3.487 0 0 1 14 11.051V10.5a.5.5 0 0 1 1 0v.551A3.487 3.487 0 0 1 17.949 14Zm-3.204 2.988a2.5 2.5 0 1 0-.49-4.976a2.5 2.5 0 0 0 .49 4.976Z"
      />
    </svg>
  );
}
export default RectanglePortraitLocationTarget;
