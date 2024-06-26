import type { SVGProps } from "react";

export function ArrowRotateClockwiseFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 3.5A6.5 6.5 0 0 0 3.5 10A.75.75 0 0 1 2 10a8 8 0 1 1 12.665 6.5h1.085a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v1.228A6.5 6.5 0 0 0 10 3.5Zm2.5 6.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0ZM11 10a1 1 0 1 0-2 0a1 1 0 0 0 2 0Z"
      />
    </svg>
  );
}
export default ArrowRotateClockwiseFilled;
