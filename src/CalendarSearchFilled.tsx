import type { SVGProps } from "react";

export function CalendarSearchFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17 14.5V7H3v2.468a4.5 4.5 0 0 1 6.061 5.972l1.56 1.56H14.5a2.5 2.5 0 0 0 2.5-2.5Zm0-9A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5V6h14v-.5ZM7.096 16.303a3.5 3.5 0 1 1 .707-.707l2.55 2.55a.5.5 0 0 1-.707.708l-2.55-2.55ZM7.5 13.5a2.5 2.5 0 1 0-5 0a2.5 2.5 0 0 0 5 0Z"
      />
    </svg>
  );
}
export default CalendarSearchFilled;
