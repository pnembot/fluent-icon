import type { SVGProps } from "react";

export function TextIndentDecreaseFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
          d="M6 4.75A.75.75 0 0 1 6.75 4h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 6 4.75z"
          fill="currentColor"
        />
        <path
          d="M6.75 9a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5H6.75z"
          fill="currentColor"
        />
        <path
          d="M6.75 14a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5z"
          fill="currentColor"
        />
        <path
          d="M3.47 11.78a.75.75 0 0 0 1.06-1.06l-.97-.97l.97-.97a.75.75 0 0 0-1.06-1.06l-1.5 1.5a.75.75 0 0 0 0 1.06l1.5 1.5z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
export default TextIndentDecreaseFilled;
