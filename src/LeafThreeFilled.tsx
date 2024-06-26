import type { SVGProps } from "react";

export function LeafThreeFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11 2a4.992 4.992 0 0 0-4 2a5.999 5.999 0 0 1 5.226 3.05A6.06 6.06 0 0 1 13 7h3V3.335C16 2.598 15.402 2 14.665 2H11ZM7.337 14.989A5 5 0 0 1 2 10V6.335C2 5.598 2.598 5 3.335 5H7c1.757 0 3.302.906 4.194 2.277a6.017 6.017 0 0 0-3.426 2.784L6.354 8.646a.5.5 0 1 0-.708.708l1.683 1.682A5.992 5.992 0 0 0 7 13c0 .697.119 1.366.337 1.989ZM8 13a5 5 0 0 1 5-5h3.665C17.402 8 18 8.598 18 9.335V13a5 5 0 0 1-8.164 3.872l-.982.982a.5.5 0 0 1-.707-.708l.982-.982A4.98 4.98 0 0 1 8 13Zm2.547 3.16l3.307-3.306a.5.5 0 0 0-.707-.708L9.84 15.453c.205.264.443.502.707.707Z"
      />
    </svg>
  );
}
export default LeafThreeFilled;
