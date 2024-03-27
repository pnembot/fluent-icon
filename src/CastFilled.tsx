import type { SVGProps } from "react";

export function CastFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.5 4A1.5 1.5 0 0 0 2 5.5v9A1.5 1.5 0 0 0 3.5 16h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 16.5 4h-13Zm.497 4a.5.5 0 0 1 .5-.5a6.003 6.003 0 0 1 6.003 6.003a.5.5 0 0 1-1 0A5.003 5.003 0 0 0 4.497 8.5a.5.5 0 0 1-.5-.5Zm.5 2A3.503 3.503 0 0 1 8 13.502a.5.5 0 1 1-1 0A2.503 2.503 0 0 0 4.497 11a.5.5 0 0 1 0-1Zm.252 3.999a.75.75 0 1 1 0-1.499a.75.75 0 0 1 0 1.499Z"
      />
    </svg>
  );
}
export default CastFilled;
