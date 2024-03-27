import type { SVGProps } from "react";

export function TextItalicFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8 3.25a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-3.235L8.592 15.5h2.658a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3.235L11.408 4H8.75A.75.75 0 0 1 8 3.25Z"
      />
    </svg>
  );
}
export default TextItalicFilled;
