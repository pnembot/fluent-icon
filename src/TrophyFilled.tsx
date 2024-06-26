import type { SVGProps } from "react";

export function TrophyFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 4a2 2 0 0 1 2-1.998h5A2 2 0 0 1 14.5 4h.996a1.5 1.5 0 0 1 1.5 1.5v1.505a2.996 2.996 0 0 1-2.601 2.97a4.504 4.504 0 0 1-3.894 3.498v1.495h2.003a2 2 0 0 1 2 2v.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-.5a2 2 0 0 1 2-2h1.997v-1.495a4.503 4.503 0 0 1-3.895-3.501a3.006 3.006 0 0 1-2.61-2.974V5.5a1.5 1.5 0 0 1 1.5-1.5h1.005Zm9 4.937a1.996 1.996 0 0 0 1.496-1.932V5.5a.5.5 0 0 0-.5-.5h-.995v3.937ZM5.5 5H4.497a.5.5 0 0 0-.5.5v1.498c0 .93.64 1.713 1.505 1.936V5Z"
      />
    </svg>
  );
}
export default TrophyFilled;
