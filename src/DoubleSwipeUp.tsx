import type { SVGProps } from "react";

export function DoubleSwipeUp(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.854 2.146a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L5 3.707V14.5a.5.5 0 0 0 1 0V3.707l2.146 2.147a.5.5 0 1 0 .708-.708l-3-3Zm9 0a.5.5 0 0 0-.708 0l-3 3a.5.5 0 0 0 .708.708L14 3.707V14.5a.5.5 0 0 0 1 0V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3ZM11 14.5a3.5 3.5 0 0 1 2-3.163V12.5a2.5 2.5 0 1 0 3 0v-1.163a3.5 3.5 0 1 1-5 3.163Zm-7-3.163a3.5 3.5 0 1 0 3 0V12.5a2.5 2.5 0 1 1-3 0v-1.163Z"
      />
    </svg>
  );
}
export default DoubleSwipeUp;
