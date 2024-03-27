import type { SVGProps } from "react";

export function TextSuperscriptFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M15.335 3.25c-.31 0-.586.29-.586.614a.75.75 0 0 1-1.5 0c0-1.04.841-2.114 2.086-2.114c.71 0 1.405.332 1.8.938c.416.64.416 1.46-.04 2.237c-.235.4-.553.694-.847.926c-.147.117-.298.224-.436.322l-.06.042c-.118.083-.225.159-.328.237c-.14.105-.257.202-.351.298h1.62a.75.75 0 0 1 0 1.5H14.05a.76.76 0 0 1-.052 0a.75.75 0 0 1-.75-.75c0-1.158.688-1.807 1.273-2.247c.123-.093.251-.183.368-.266l.057-.04c.136-.096.258-.183.371-.273c.228-.18.383-.34.483-.508c.21-.36.14-.562.076-.66c-.087-.133-.28-.256-.542-.256ZM9.487 10l2.857-3.332a3.4 3.4 0 0 1 .67-1.358a1.754 1.754 0 0 1-.687-.928L8.5 8.848L4.355 4.011a.75.75 0 1 0-1.14.976L7.513 10l-4.296 5.012a.75.75 0 1 0 1.139.976L8.5 11.152l4.145 4.836a.75.75 0 1 0 1.14-.976L9.486 10Z"
      />
    </svg>
  );
}
export default TextSuperscriptFilled;
