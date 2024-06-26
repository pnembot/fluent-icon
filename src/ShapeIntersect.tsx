import type { SVGProps } from "react";

export function ShapeIntersect(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 4.5A2.5 2.5 0 0 1 4.5 2h6A2.5 2.5 0 0 1 13 4.5V7h2.5A2.5 2.5 0 0 1 18 9.5v6a2.5 2.5 0 0 1-2.5 2.5h-6A2.5 2.5 0 0 1 7 15.5V13H4.5A2.5 2.5 0 0 1 2 10.5v-6Zm10 0A1.5 1.5 0 0 0 10.5 3h-6A1.5 1.5 0 0 0 3 4.5v6A1.5 1.5 0 0 0 4.5 12H7V9.5a2.491 2.491 0 0 1 1.416-2.253A2.5 2.5 0 0 1 9.5 7H12V4.5Zm-4 6.207V12h.293L12 8.293V8h-1.293L8 10.707Zm.017-1.43l1.26-1.26a1.5 1.5 0 0 0-1.26 1.26ZM13 8v2.5a2.5 2.5 0 0 1-2.5 2.5H8v2.5A1.5 1.5 0 0 0 9.5 17h6a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 15.5 8H13Zm-3.293 4h.793a1.5 1.5 0 0 0 1.5-1.5v-.793L9.707 12Z"
      />
    </svg>
  );
}
export default ShapeIntersect;
