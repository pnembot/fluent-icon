import type { SVGProps } from "react";

export function HighlightFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.5 2A1.5 1.5 0 0 0 3 3.5v3A1.5 1.5 0 0 0 4.5 8h11A1.5 1.5 0 0 0 17 6.5v-3A1.5 1.5 0 0 0 15.5 2h-11ZM6 11a2 2 0 0 1-2-2h12a2 2 0 0 1-2 2H6Zm0 1h8v1.074a2 2 0 0 1-1.106 1.789l-6.17 3.085A.5.5 0 0 1 6 17.501V12Z"
      />
    </svg>
  );
}
export default HighlightFilled;
