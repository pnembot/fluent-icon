import type { SVGProps } from "react";

export function TextPositionSquareRightFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16.5 2.75a.75.75 0 0 1 0 1.5h-13a.75.75 0 0 1 0-1.5h13Zm-8.5 3a.75.75 0 0 1 0 1.5H3.5a.75.75 0 0 1 0-1.5H8Zm.75 3.75A.75.75 0 0 0 8 8.75H3.5a.75.75 0 0 0 0 1.5H8a.75.75 0 0 0 .75-.75ZM8 11.75a.75.75 0 0 1 0 1.5H3.5a.75.75 0 0 1 0-1.5H8Zm9.25 3.75a.75.75 0 0 0-.75-.75h-13a.75.75 0 0 0 0 1.5h13a.75.75 0 0 0 .75-.75Zm-1.5-7a2.25 2.25 0 0 0-4.5 0v5a.75.75 0 0 1-1.5 0v-5a3.75 3.75 0 1 1 7.5 0v5a.75.75 0 0 1-1.5 0v-5Z"
      />
    </svg>
  );
}
export default TextPositionSquareRightFilled;
