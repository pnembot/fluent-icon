import type { SVGProps } from "react";

export function ArrowCircleLeft(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m9.146 13.354l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L7.707 9.5H13.5a.5.5 0 0 1 0 1H7.707l2.147 2.146a.5.5 0 0 1-.708.708ZM2 10a8 8 0 1 0 16 0a8 8 0 0 0-16 0Zm8 7a7 7 0 1 1 0-14a7 7 0 0 1 0 14Z"
      />
    </svg>
  );
}
export default ArrowCircleLeft;
