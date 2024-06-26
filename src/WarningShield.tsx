import type { SVGProps } from "react";

export function WarningShield(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      {...rest}
    >
      <g fill="currentColor">
        <path d="M10.315 1.852a1.5 1.5 0 0 0-2.629 0L1.127 13.777A1.5 1.5 0 0 0 2.442 16h7.934a6.705 6.705 0 0 1-.257-1H2.442a.5.5 0 0 1-.439-.74l6.56-11.926a.5.5 0 0 1 .875 0l3.735 6.79a4.72 4.72 0 0 0 .782-.652l-3.64-6.62Z" />
        <path d="M9 6a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4A.5.5 0 0 1 9 6Zm0 7.5A.75.75 0 1 0 9 12a.75.75 0 0 0 0 1.5Zm7-3.735c.323.244.656.438 1 .582a4.053 4.053 0 0 0 1.6.32c.193 0 .355.143.392.333l.008.084v2.5c0 2.683-1.313 4.506-3.873 5.395a.385.385 0 0 1-.254 0c-.725-.252-1.35-.579-1.873-.979a4.813 4.813 0 0 1-1.555-2c-.267-.636-.414-1.353-.44-2.15L11 13.585v-2.501c0-.23.18-.417.4-.417c1.223 0 2.323-.51 3.318-1.545a.389.389 0 0 1 .566 0c.232.243.471.457.716.643Z" />
      </g>
    </svg>
  );
}
export default WarningShield;
