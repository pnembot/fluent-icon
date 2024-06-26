import type { SVGProps } from "react";

export function DialpadOff(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708L6.36 7.067a1 1 0 1 0 .574.574l3.426 3.425A.999.999 0 0 0 9 12a1 1 0 1 0 1.934-.36l6.212 6.214a.5.5 0 0 0 .708-.708l-15-15ZM15 12c0 .245-.088.47-.235.644l-1.409-1.41A1 1 0 0 1 15 12Zm-4-4c0 .245-.088.47-.235.644l-1.409-1.41A1 1 0 0 1 11 8ZM7 4c0 .245-.088.47-.235.644l-1.409-1.41A1 1 0 0 1 7 4Zm0 8a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm3-7a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm1 11a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm3-11a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm1 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"
      />
    </svg>
  );
}
export default DialpadOff;
