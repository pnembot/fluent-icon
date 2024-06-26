import type { SVGProps } from "react";

export function SubtractCircleArrowForward(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 8.5a.5.5 0 0 0 0 1h6.706c.238-.11.486-.203.742-.278A.5.5 0 0 0 12.5 8.5h-7Zm10.497.706a7 7 0 1 0-6.79 6.79c.096.343.224.671.382.983a8 8 0 1 1 7.39-7.39a5.464 5.464 0 0 0-.982-.383ZM10 14.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0Zm5.396-2.604a.5.5 0 0 1 .708 0l1.75 1.75a.5.5 0 0 1 .002.705l-1.752 1.753a.5.5 0 0 1-.708-.708l.897-.896H14.75A1.75 1.75 0 0 0 13 16.25v.25a.5.5 0 0 1-1 0v-.25a2.75 2.75 0 0 1 2.75-2.75h1.543l-.897-.896a.5.5 0 0 1 0-.708Z"
      />
    </svg>
  );
}
export default SubtractCircleArrowForward;
