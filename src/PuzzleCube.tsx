import type { SVGProps } from "react";

export function PuzzleCube(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 14.5V7h4V3h7.5A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5ZM8 4v3h4V4H8Zm5 0v3h3V5.5A1.5 1.5 0 0 0 14.5 4H13Zm3 4h-3v4h3V8Zm0 5h-3v3h1.5a1.5 1.5 0 0 0 1.5-1.5V13Zm-4 3v-3H8v3h4Zm-5 0v-3H4v1.5A1.5 1.5 0 0 0 5.5 16H7Zm-3-4h3V8H4v4Zm8-4H8v4h4V8Z"
      />
    </svg>
  );
}
export default PuzzleCube;
