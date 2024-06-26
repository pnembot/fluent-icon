import type { SVGProps } from "react";

export function TargetEditFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 11.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3ZM5 10a4.999 4.999 0 0 1 9.996-.055l-2.412 2.413a3.499 3.499 0 1 0-.228.228l-2.083 2.083a3.21 3.21 0 0 0-.288.33A4.999 4.999 0 0 1 5.001 10Zm4.995-6.5c3.28 0 5.991 2.43 6.434 5.587a2.883 2.883 0 0 1 1.515.031a7.998 7.998 0 1 0-8.935 8.816c.009-.093.025-.187.049-.282l.297-1.188A6.498 6.498 0 0 1 9.996 3.5Zm.985 11.876l4.828-4.828a1.87 1.87 0 1 1 2.643 2.644l-4.827 4.828a2.196 2.196 0 0 1-1.02.578l-1.498.375a.89.89 0 0 1-1.078-1.079l.374-1.497a2.18 2.18 0 0 1 .578-1.02Z"
      />
    </svg>
  );
}
export default TargetEditFilled;
