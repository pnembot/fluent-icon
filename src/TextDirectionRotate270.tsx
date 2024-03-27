import type { SVGProps } from "react";

export function TextDirectionRotate270(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
          d="M8.854 5.146a.5.5 0 1 1-.707.708L7 4.707V9.5a.5.5 0 0 1-1 0V4.707L4.854 5.854a.5.5 0 1 1-.707-.708l2-2a.5.5 0 0 1 .707 0l2 2z"
          fill="currentColor"
        />
        <path
          d="M16.854 5.146a.5.5 0 1 1-.707.708L15 4.707V16.5a.5.5 0 0 1-1 0V4.707l-1.146 1.147a.5.5 0 1 1-.707-.708l2-2a.5.5 0 0 1 .707 0l2 2z"
          fill="currentColor"
        />
        <path
          d="M3 13.5a.5.5 0 0 1 .324-.468l8-3a.5.5 0 0 1 .352.936L9 11.972v3.057l2.676 1.003a.5.5 0 0 1-.352.936l-8-3A.5.5 0 0 1 3 13.5zm1.924 0L8 14.654v-2.307L4.924 13.5z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
export default TextDirectionRotate270;
