import type { SVGProps } from "react";

export function CalendarDataBarFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 17H10v-2a2 2 0 0 1 3-1.732V11a2 2 0 1 1 4 0V7H3v7.5A2.5 2.5 0 0 0 5.5 17Zm9-14A2.5 2.5 0 0 1 17 5.5V6H3v-.5A2.5 2.5 0 0 1 5.5 3h9Zm.5 7a1 1 0 0 0-1 1v7a1 1 0 1 0 2 0v-7a1 1 0 0 0-1-1Zm-3 4a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-1-1Zm5-1a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0v-5Z"
      />
    </svg>
  );
}
export default CalendarDataBarFilled;
