import type { SVGProps } from "react";

export function PortMicroUsb(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.433 8.3a1.5 1.5 0 0 1 .9-.3h5.334c.324 0 .64.105.9.3l1.333 1A1.5 1.5 0 0 1 14 12H6a1.5 1.5 0 0 1-.9-2.7l1.333-1Zm.9.7a.5.5 0 0 0-.3.1l-1.333 1a.5.5 0 0 0 .3.9h8a.5.5 0 0 0 .3-.9l-1.333-1a.5.5 0 0 0-.3-.1H7.333Z"
      />
    </svg>
  );
}
export default PortMicroUsb;
