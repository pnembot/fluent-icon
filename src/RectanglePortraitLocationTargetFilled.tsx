import type { SVGProps } from "react";

export function RectanglePortraitLocationTargetFilled(
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
        d="M6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5.696a4.487 4.487 0 0 1-1.43-2.018a1.5 1.5 0 0 1 .001-2.964a4.487 4.487 0 0 1 2.751-2.75a1.5 1.5 0 0 1 2.964 0l.018.005V4a2 2 0 0 0-2-2H6Zm9.056 13.332a1 1 0 1 1-1.111-1.663a1 1 0 0 1 1.11 1.662ZM17.949 14h.551a.5.5 0 0 1 0 1h-.551A3.487 3.487 0 0 1 15 17.949v.551a.5.5 0 0 1-1 0v-.551A3.487 3.487 0 0 1 11.051 15H10.5a.5.5 0 0 1 0-1h.551A3.487 3.487 0 0 1 14 11.051V10.5a.5.5 0 0 1 1 0v.551A3.487 3.487 0 0 1 17.949 14Zm-3.204 2.988a2.5 2.5 0 1 0-.49-4.976a2.5 2.5 0 0 0 .49 4.976Z"
      />
    </svg>
  );
}
export default RectanglePortraitLocationTargetFilled;
