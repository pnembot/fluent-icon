import type { SVGProps } from "react";

export function TextPositionBehindFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.75 3.5a.75.75 0 0 1 .75-.75h13a.75.75 0 0 1 0 1.5h-13a.75.75 0 0 1-.75-.75Zm5 5a2.25 2.25 0 0 1 4.5 0v5a.75.75 0 0 0 1.5 0v-5a3.75 3.75 0 1 0-7.5 0v5a.75.75 0 0 0 1.5 0v-5Zm8.75 1.75h-1.75v-1.5h1.75a.75.75 0 0 1 0 1.5Zm-13-1.5h1.75v1.5H3.5a.75.75 0 0 1 0-1.5Zm0 6a.75.75 0 0 0 0 1.5h13a.75.75 0 0 0 0-1.5h-13Zm5.25-6h2.5v1.5h-2.5v-1.5Z"
      />
    </svg>
  );
}
export default TextPositionBehindFilled;
