import type { SVGProps } from "react";

export function BeakerOff(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708L7.25 7.957v.79a2.5 2.5 0 0 1-.296 1.18l-2.606 4.865A1.5 1.5 0 0 0 5.67 17h8.66c.552 0 1.007-.287 1.266-.697l1.55 1.55a.5.5 0 0 0 .708-.707l-15-15Zm11.975 13.39a.5.5 0 0 1-.5.464H5.67a.5.5 0 0 1-.44-.736L6.71 12.5h5.083l3.036 3.036ZM10.793 11.5H7.246l.589-1.1a3.5 3.5 0 0 0 .409-1.449l2.549 2.549Zm.957-2.753c0 .354.053.704.158 1.04l2.29 2.289l-1.152-2.148a2.5 2.5 0 0 1-.296-1.181V4h.75a.5.5 0 0 0 0-1h-7a.5.5 0 0 0 0 1h.75v1.129l1 1V4h3.5v4.747Z"
      />
    </svg>
  );
}
export default BeakerOff;
