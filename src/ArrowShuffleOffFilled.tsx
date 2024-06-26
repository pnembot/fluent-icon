import type { SVGProps } from "react";

export function ArrowShuffleOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708l3.002 3.001A7.91 7.91 0 0 0 2.75 5.5a.75.75 0 0 0 0 1.5c2.237 0 3.67.971 5.02 2.286c.128-.135.259-.274.392-.417l.707.708C7.14 11.428 5.596 13 2.75 13a.75.75 0 0 0 0 1.5c3.528 0 5.473-2.033 7.18-3.862l.708.707a70.37 70.37 0 0 1-.436.464c.849.824 1.805 1.592 2.995 2.095l1.43 1.43a.75.75 0 0 0 1.04 1.04l1.48 1.48a.5.5 0 0 0 .707-.708l-15-15Zm12.158 10.745l2.079 2.079l.69-.69a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 1 0-1.061 1.06l.668.669a6.318 6.318 0 0 1-.376-.058Zm-4.754-4.754l1.062 1.062c1.142-1.095 2.354-1.937 4.068-2.148l-.668.669a.75.75 0 0 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 1 0-1.06 1.06l.753.754c-2.312.208-3.896 1.333-5.215 2.603Z"
      />
    </svg>
  );
}
export default ArrowShuffleOffFilled;
