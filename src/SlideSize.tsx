import type { SVGProps } from "react";

export function SlideSize(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 6.75A2.75 2.75 0 0 1 4.75 4h10.5A2.75 2.75 0 0 1 18 6.75v6.5A2.75 2.75 0 0 1 15.25 16H4.75A2.75 2.75 0 0 1 2 13.25v-6.5ZM4.75 5A1.75 1.75 0 0 0 3 6.75v6.5c0 .966.784 1.75 1.75 1.75h10.5A1.75 1.75 0 0 0 17 13.25v-6.5A1.75 1.75 0 0 0 15.25 5H4.75ZM11 6.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-.793l-1.646 1.647a.5.5 0 0 1-.708-.708L12.293 7H11.5a.5.5 0 0 1-.5-.5Zm-2.354 4.146a.5.5 0 0 1 .708.708L7.707 13H8.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 1 0v.793l1.646-1.647Z"
      />
    </svg>
  );
}
export default SlideSize;
