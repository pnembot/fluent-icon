import type { SVGProps } from "react";

export function CalendarRtlFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.5 3A2.5 2.5 0 0 1 17 5.5V6H3v-.5A2.5 2.5 0 0 1 5.5 3h9ZM3 7h14v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5V7Zm9 3a1 1 0 1 0 2 0a1 1 0 0 0-2 0Zm1 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm-4-4a1 1 0 1 0 2 0a1 1 0 0 0-2 0Zm1 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm-4-4a1 1 0 1 0 2 0a1 1 0 0 0-2 0Z"
      />
    </svg>
  );
}
export default CalendarRtlFilled;
