import type { SVGProps } from "react";

export function PortUsbC(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.5 10a2 2 0 0 1 2-2h7a2 2 0 1 1 0 4h-7a2 2 0 0 1-2-2Zm2-1a1 1 0 0 0 0 2h7a1 1 0 1 0 0-2h-7Z"
      />
    </svg>
  );
}
export default PortUsbC;
