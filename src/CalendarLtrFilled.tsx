import type { SVGProps } from "react";

export function CalendarLtrFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 3A2.5 2.5 0 0 0 3 5.5V6h14v-.5A2.5 2.5 0 0 0 14.5 3h-9ZM17 7H3v7.5A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5V7Zm-9 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-1 4a1 1 0 1 1 0-2a1 1 0 0 1 0 2Zm4-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-1 4a1 1 0 1 1 0-2a1 1 0 0 1 0 2Zm4-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"
      />
    </svg>
  );
}
export default CalendarLtrFilled;
