import type { SVGProps } from "react";

export function StackAdd(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 6.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V6H3.5a.5.5 0 0 0 0 1H5v1.5a.5.5 0 0 0 1 0V7h1.5a.5.5 0 0 0 0-1H6V4.5Zm6 .5h-1.207a5.466 5.466 0 0 0-.393-1H12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1.257c.307.253.642.474 1 .657v.6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1ZM6 16a2 2 0 0 1-1.732-1H12a3 3 0 0 0 3-3V6.268A2 2 0 0 1 16 8v4a4 4 0 0 1-4 4H6Zm2 2a2 2 0 0 1-1.732-1H12a5 5 0 0 0 5-5V8.268A2 2 0 0 1 18 10v2a6 6 0 0 1-6 6H8Z"
      />
    </svg>
  );
}
export default StackAdd;
