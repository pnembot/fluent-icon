import type { SVGProps } from "react";

export function DataTreemapFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7 3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h1V3Zm1 14h6a3 3 0 0 0 3-3v-1H8v4Zm9-5V6a3 3 0 0 0-3-3H8v9h9Z"
      />
    </svg>
  );
}
export default DataTreemapFilled;
