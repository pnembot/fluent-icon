import type { SVGProps } from "react";

export function GaugeFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16Zm1.819-12.66a5.002 5.002 0 0 0-5.355 8.196a.5.5 0 0 1-.707.707a6 6 0 0 1 6.425-9.834a.5.5 0 0 1-.364.932Zm3.772 2.478a6.001 6.001 0 0 1-1.348 6.425a.5.5 0 1 1-.707-.707a5.001 5.001 0 0 0 1.123-5.354a.5.5 0 0 1 .932-.364ZM14.085 5.82a.5.5 0 0 1 .111.626l-.11.196a323.588 323.588 0 0 1-.686 1.206l-.23.402l-.298.518l-.422.727c-.2.345-.395.675-.567.963a30.112 30.112 0 0 1-.492.793a4.28 4.28 0 0 1-.074.108a1.5 1.5 0 1 1-2.371-1.83c.072-.085.203-.205.343-.329c.15-.132.343-.296.56-.479c.436-.364.982-.81 1.514-1.24c.533-.432 1.055-.85 1.443-1.16l.275-.219l.369-.293a.5.5 0 0 1 .635.011Z"
      />
    </svg>
  );
}
export default GaugeFilled;
