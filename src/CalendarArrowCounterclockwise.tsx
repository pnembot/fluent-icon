import type { SVGProps } from "react";

export function CalendarArrowCounterclockwise(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 17A2.5 2.5 0 0 1 3 14.5v-4a.5.5 0 0 1 1 0v4A1.5 1.5 0 0 0 5.5 16h9a1.5 1.5 0 0 0 1.5-1.5V7H6.491c0-.358-.127-.716-.382-1H16v-.5A1.5 1.5 0 0 0 14.5 4h-9A1.5 1.5 0 0 0 4 5.5v1.793l.646-.647a.5.5 0 1 1 .708.708l-1.5 1.5a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L3 7.293V5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9ZM8 10a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-1 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm4-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-1 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm4-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"
      />
    </svg>
  );
}
export default CalendarArrowCounterclockwise;
