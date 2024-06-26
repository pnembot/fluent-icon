import type { SVGProps } from "react";

export function CalendarArrowCounterclockwiseFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5V6H6.11A1.5 1.5 0 0 0 4 5.875v1.418l.646-.647a.5.5 0 1 1 .708.708l-1.5 1.5a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L3 7.293V5.5ZM17 7v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5V9.917a1.5 1.5 0 0 0 1.553-.356l1.5-1.5c.293-.293.44-.677.44-1.061H17ZM7 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm-1 2a1 1 0 1 0 2 0a1 1 0 0 0-2 0Zm4-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm-1 2a1 1 0 1 0 2 0a1 1 0 0 0-2 0Zm4-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"
      />
    </svg>
  );
}
export default CalendarArrowCounterclockwiseFilled;
