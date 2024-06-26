import type { SVGProps } from "react";

export function VirtualNetworkFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.707 6.156a.75.75 0 0 1 .137 1.051L2.696 10l2.148 2.793a.75.75 0 1 1-1.188.914l-2.5-3.25a.75.75 0 0 1 0-.914l2.5-3.25a.75.75 0 0 1 1.051-.137Zm10.449 6.637a.75.75 0 1 0 1.188.914l2.5-3.25a.75.75 0 0 0 0-.914l-2.5-3.25a.75.75 0 1 0-1.188.914L17.304 10l-2.148 2.793ZM6 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"
      />
    </svg>
  );
}
export default VirtualNetworkFilled;
