import type { SVGProps } from "react";

export function CalendarPatternFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.75 3h8.5A2.75 2.75 0 0 1 17 5.75v8.5A2.75 2.75 0 0 1 14.25 17h-8.5A2.75 2.75 0 0 1 3 14.25v-8.5A2.75 2.75 0 0 1 5.75 3ZM4.5 5.75V7h11V5.75c0-.69-.56-1.25-1.25-1.25h-8.5c-.69 0-1.25.56-1.25 1.25ZM14.707 8l-4 4h2.586L15.5 9.793V8h-.793Zm-1.414 0h-2.586l-4 4h2.586l4-4Zm-8 4l4-4H6.707L4.5 10.207V12h.793ZM4.5 8.793L5.293 8H4.5v.793ZM14.707 12h.793v-.793l-.793.793Z"
      />
    </svg>
  );
}
export default CalendarPatternFilled;
