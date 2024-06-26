import type { SVGProps } from "react";

export function CalendarPhoneFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17 7v1.05a2.512 2.512 0 0 0-.5-.05h-3a2.5 2.5 0 0 0-2.5 2.5v6c0 .171.017.338.05.5H5.5A2.5 2.5 0 0 1 3 14.5V7h14Zm-2.5-4A2.5 2.5 0 0 1 17 5.5V6H3v-.5A2.5 2.5 0 0 1 5.5 3h9Zm-.75 6A1.75 1.75 0 0 0 12 10.75v5.5c0 .966.784 1.75 1.75 1.75h2.5A1.75 1.75 0 0 0 18 16.25v-5.5A1.75 1.75 0 0 0 16.25 9h-2.5Zm.25 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default CalendarPhoneFilled;
