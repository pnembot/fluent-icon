import type { SVGProps } from "react";

export function CellularData2Filled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.75 12a.75.75 0 0 1 .741.639l.009.11v2.496a.75.75 0 0 1-1.492.11L4 15.246V12.75a.75.75 0 0 1 .75-.75Zm3-2a.75.75 0 0 1 .741.639l.009.11v4.496a.75.75 0 0 1-1.492.11L7 15.246V10.75a.75.75 0 0 1 .75-.75Zm3-2a.75.75 0 0 1 .741.639l.008.11v6.501a.75.75 0 0 1-1.49.111l-.009-.11V8.75a.75.75 0 0 1 .75-.75Zm3-2a.75.75 0 0 1 .741.639l.008.11v8.501a.75.75 0 0 1-1.49.111l-.009-.11V6.75a.75.75 0 0 1 .75-.75Z"
      />
    </svg>
  );
}
export default CellularData2Filled;
