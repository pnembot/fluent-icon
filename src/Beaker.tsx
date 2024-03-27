import type { SVGProps } from "react";

export function Beaker(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.5 4h.75v4.747a2.5 2.5 0 0 1-.296 1.18l-2.606 4.865A1.5 1.5 0 0 0 5.67 17h8.66a1.5 1.5 0 0 0 1.322-2.208l-2.606-4.864a2.5 2.5 0 0 1-.296-1.181V4h.75a.5.5 0 0 0 0-1h-7a.5.5 0 0 0 0 1Zm1.75 4.747V4h3.5v4.747a3.5 3.5 0 0 0 .415 1.653l.59 1.1h-5.51l.59-1.1a3.5 3.5 0 0 0 .415-1.653ZM6.71 12.5h6.58l1.48 2.764a.5.5 0 0 1-.44.736H5.67a.5.5 0 0 1-.44-.736L6.71 12.5Z"
      />
    </svg>
  );
}
export default Beaker;
