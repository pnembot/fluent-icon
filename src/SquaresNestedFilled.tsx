import type { SVGProps } from "react";

export function SquaresNestedFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v1.764A2.989 2.989 0 0 0 15 7h-5a3 3 0 0 0-3 3v5c0 .768.289 1.47.764 2H6a3 3 0 0 1-3-3V6Zm7 11h4a3 3 0 0 0 3-3v-4a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2Z"
      />
    </svg>
  );
}
export default SquaresNestedFilled;
