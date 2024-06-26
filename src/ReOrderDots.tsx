import type { SVGProps } from "react";

export function ReOrderDots(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      {...rest}
    >
      <g fill="none">
        <path d="M7 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2z" fill="currentColor" />
        <path d="M7 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2z" fill="currentColor" />
        <path d="M8 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0z" fill="currentColor" />
        <path d="M13 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2z" fill="currentColor" />
        <path d="M14 10a1 1 0 1 1-2 0a1 1 0 0 1 2 0z" fill="currentColor" />
        <path d="M13 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2z" fill="currentColor" />
      </g>
    </svg>
  );
}
export default ReOrderDots;
