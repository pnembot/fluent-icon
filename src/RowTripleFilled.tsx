import type { SVGProps } from "react";

export function RowTripleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.5 2A1.5 1.5 0 0 0 3 3.5v1A1.5 1.5 0 0 0 4.5 6h11A1.5 1.5 0 0 0 17 4.5v-1A1.5 1.5 0 0 0 15.5 2h-11Zm0 6A1.5 1.5 0 0 0 3 9.5v1A1.5 1.5 0 0 0 4.5 12h11a1.5 1.5 0 0 0 1.5-1.5v-1A1.5 1.5 0 0 0 15.5 8h-11Zm0 6A1.5 1.5 0 0 0 3 15.5v1A1.5 1.5 0 0 0 4.5 18h11a1.5 1.5 0 0 0 1.5-1.5v-1a1.5 1.5 0 0 0-1.5-1.5h-11Z"
      />
    </svg>
  );
}
export default RowTripleFilled;
