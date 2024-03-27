import type { SVGProps } from "react";

export function CellularData4Filled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.75 12a.75.75 0 0 1 .742.64l.008.11v2.5a.75.75 0 0 1-1.492.11L4 15.25v-2.5a.75.75 0 0 1 .75-.75Zm3-2a.75.75 0 0 1 .742.64l.008.11v4.5a.75.75 0 0 1-1.492.11L7 15.25v-4.5a.75.75 0 0 1 .75-.75Z"
      />
    </svg>
  );
}
export default CellularData4Filled;
