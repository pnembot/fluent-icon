import type { SVGProps } from "react";

export function TextPositionFrontFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.75 3.5a.75.75 0 0 1 .75-.75h13a.75.75 0 0 1 0 1.5h-13a.75.75 0 0 1-.75-.75ZM10 6.25a2.25 2.25 0 0 0-2.122 1.5H6.325a3.751 3.751 0 0 1 7.35 0h-1.553A2.251 2.251 0 0 0 10 6.25Zm-3.75 5h1.5v2.25a.75.75 0 0 1-1.5 0v-2.25Zm7.5 0h-1.5v2.25a.75.75 0 0 0 1.5 0v-2.25ZM3.5 14.75a.75.75 0 0 0 0 1.5h13a.75.75 0 0 0 0-1.5h-13Zm0-6a.75.75 0 0 0 0 1.5h13a.75.75 0 0 0 0-1.5h-13Z"
      />
    </svg>
  );
}
export default TextPositionFrontFilled;
