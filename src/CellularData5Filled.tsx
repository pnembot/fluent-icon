import type { SVGProps } from "react";

export function CellularData5Filled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.75 12a.75.75 0 0 1 .743.64l.008.11v2.503a.75.75 0 0 1-1.493.11L4 15.254V12.75a.75.75 0 0 1 .75-.75Z"
      />
    </svg>
  );
}
export default CellularData5Filled;
