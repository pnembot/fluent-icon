import type { SVGProps } from "react";

export function SwipeRight(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 6a4.001 4.001 0 0 1 3.71 2.5H8.598a3 3 0 1 0 0 3h1.11A4.001 4.001 0 0 1 2 10a4 4 0 0 1 4-4Zm8.854 7.354l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.707.708L16.293 9.5H5.5a.5.5 0 0 0 0 1h10.793l-2.146 2.146a.5.5 0 0 0 .707.708Z"
      />
    </svg>
  );
}
export default SwipeRight;
