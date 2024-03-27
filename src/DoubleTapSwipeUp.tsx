import type { SVGProps } from "react";

export function DoubleTapSwipeUp(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.354 2.146a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L9.5 3.707V12.5a.5.5 0 0 0 1 0V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3ZM4.5 12.5a5.502 5.502 0 0 1 4-5.293v1.05A4.502 4.502 0 0 0 10 17a4.5 4.5 0 0 0 1.5-8.744V7.207a5.5 5.5 0 1 1-7 5.293Zm2 0a3.5 3.5 0 0 1 2-3.163V10.5a2.5 2.5 0 1 0 3 0V9.337a3.5 3.5 0 1 1-5 3.163Z"
      />
    </svg>
  );
}
export default DoubleTapSwipeUp;
