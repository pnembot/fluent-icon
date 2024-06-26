import type { SVGProps } from "react";

export function CalendarPattern(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3ZM4 5.5V7h12V5.5A1.5 1.5 0 0 0 14.5 4h-9A1.5 1.5 0 0 0 4 5.5ZM14.707 8l-4 4h2.586L16 9.293V8h-1.293Zm-1.414 0h-2.586l-4 4h2.586l4-4Zm-8 4l4-4H6.707L4 10.707V12h1.293ZM4 9.293L5.293 8H4v1.293ZM14.707 12H16v-1.293L14.707 12Z"
      />
    </svg>
  );
}
export default CalendarPattern;
