import type { SVGProps } from "react";

export function CalendarMentionFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17 7v3.416A5 5 0 0 0 10.416 17H5.5A2.5 2.5 0 0 1 3 14.5V7h14Zm-2.5-4A2.5 2.5 0 0 1 17 5.5V6H3v-.5A2.5 2.5 0 0 1 5.5 3h9Zm.502 9a3.001 3.001 0 1 0 0 6.003c.46 0 .89-.105 1.283-.293a.5.5 0 1 1 .43.903c-.52.248-1.097.39-1.713.39a4.001 4.001 0 1 1 4.001-4.005v.5a1.502 1.502 0 0 1-2.646.972a2 2 0 1 1-.189-3.093a.5.5 0 0 1 .832.374v1.747a.501.501 0 1 0 1.003 0v-.496A3.001 3.001 0 0 0 15.001 12ZM14 15a1 1 0 1 0 2 0a1 1 0 0 0-2 0Z"
      />
    </svg>
  );
}
export default CalendarMentionFilled;
