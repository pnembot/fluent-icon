import type { SVGProps } from "react";

export function PreviousFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17 4.252c0-1-1.116-1.595-1.947-1.038L6.554 8.921a1.25 1.25 0 0 0-.007 2.071l8.5 5.793A1.25 1.25 0 0 0 17 15.752v-11.5ZM3 3.5a.5.5 0 0 1 1 0v13a.5.5 0 0 1-1 0v-13Z"
      />
    </svg>
  );
}
export default PreviousFilled;
