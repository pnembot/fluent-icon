import type { SVGProps } from "react";

export function Stethoscope(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.5 2a.5.5 0 0 0-.5.5v5a4.5 4.5 0 0 0 4 4.473V13a5 5 0 0 0 10 0v-1.05a2.5 2.5 0 1 0-1 0V13a4 4 0 1 1-8 0v-1.027A4.5 4.5 0 0 0 11 7.5v-5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0 0 1H10v4.5a3.5 3.5 0 0 1-7 0V3h1.5a.5.5 0 0 0 0-1h-2Zm13 6a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z"
      />
    </svg>
  );
}
export default Stethoscope;
