import type { SVGProps } from "react";

export function CreditCardClockFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 6.75A2.75 2.75 0 0 1 4.75 4h10.5A2.75 2.75 0 0 1 18 6.75V8H2V6.75ZM9.207 16H4.75A2.75 2.75 0 0 1 2 13.25V9h12.5a5.5 5.5 0 0 0-5.293 7ZM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0ZM14.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5H16a.5.5 0 0 0 0-1h-1v-1.5a.5.5 0 0 0-.5-.5Z"
      />
    </svg>
  );
}
export default CreditCardClockFilled;
