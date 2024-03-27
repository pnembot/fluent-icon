import type { SVGProps } from "react";

export function SwipeUp(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.354 2.146a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L9.5 3.707V14.5a.5.5 0 0 0 1 0V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3ZM6 14a4.001 4.001 0 0 1 2.5-3.71v1.111a3 3 0 1 0 3 0v-1.11A4.001 4.001 0 0 1 10 18a4 4 0 0 1-4-4Z"
      />
    </svg>
  );
}
export default SwipeUp;
