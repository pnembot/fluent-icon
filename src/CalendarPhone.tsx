import type { SVGProps } from "react";

export function CalendarPhone(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.5 3A2.5 2.5 0 0 1 17 5.5v2.55a2.512 2.512 0 0 0-.5-.05H16V7H4v7.5A1.5 1.5 0 0 0 5.5 16H11v.5c0 .171.017.338.05.5H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm0 1h-9A1.5 1.5 0 0 0 4 5.5V6h12v-.5A1.5 1.5 0 0 0 14.5 4Zm-.75 5A1.75 1.75 0 0 0 12 10.75v5.5c0 .966.784 1.75 1.75 1.75h2.5A1.75 1.75 0 0 0 18 16.25v-5.5A1.75 1.75 0 0 0 16.25 9h-2.5Zm.25 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default CalendarPhone;
