import type { SVGProps } from "react";

export function CalendarMailFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.5 2A2.5 2.5 0 0 0 2 4.5V5h12v-.5A2.5 2.5 0 0 0 11.5 2h-7ZM14 6H2v5.5A2.5 2.5 0 0 0 4.5 14H5v-3a3 3 0 0 1 3-3h6V6Zm-7.93 4.475A2 2 0 0 1 8 9h8a2 2 0 0 1 1.93 1.475L12 13.961l-5.93-3.486Zm6.31 4.423L18 11.594V16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-4.405l5.62 3.303a.75.75 0 0 0 .76 0Z"
      />
    </svg>
  );
}
export default CalendarMailFilled;
