import type { SVGProps } from "react";

export function TextIndentIncrease(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        <path
          d="M6 4.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5z"
          fill="currentColor"
        />
        <path
          d="M6 9.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
          fill="currentColor"
        />
        <path
          d="M6.5 14a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6z"
          fill="currentColor"
        />
        <path
          d="M2.854 7.732a.5.5 0 1 0-.708.707L3.207 9.5l-1.06 1.06a.5.5 0 1 0 .707.708l1.414-1.414a.5.5 0 0 0 0-.708L2.854 7.732z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
export default TextIndentIncrease;
