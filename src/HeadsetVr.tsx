import type { SVGProps } from "react";

export function HeadsetVr(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.75 8a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0ZM5.5 10a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm6.5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5ZM8.5 3a.5.5 0 0 0-.5.5V5H5.25a3.25 3.25 0 0 0-3.24 3H1.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5H2v1.75A3.25 3.25 0 0 0 5.25 17h1.61a3.25 3.25 0 0 0 2.297-.952l.594-.593a.35.35 0 0 1 .495 0l.593.593a3.25 3.25 0 0 0 2.298.952h1.613A3.25 3.25 0 0 0 18 13.75V12h.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-.51a3.25 3.25 0 0 0-3.24-3H12V3.5a.5.5 0 0 0-.5-.5h-3ZM17 8.25v5.5A2.25 2.25 0 0 1 14.75 16h-1.613a2.25 2.25 0 0 1-1.59-.659l-.594-.593a1.35 1.35 0 0 0-1.91 0l-.593.593A2.25 2.25 0 0 1 6.86 16H5.25A2.25 2.25 0 0 1 3 13.75v-5.5A2.25 2.25 0 0 1 5.25 6h9.5A2.25 2.25 0 0 1 17 8.25Z"
      />
    </svg>
  );
}
export default HeadsetVr;
