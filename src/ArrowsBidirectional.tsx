import type { SVGProps } from "react";

export function ArrowsBidirectional(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.678 5.033A.5.5 0 0 1 7 5.5V8h6V5.5a.5.5 0 0 1 .874-.332l4 4.5a.5.5 0 0 1 0 .664l-4 4.5A.5.5 0 0 1 13 14.5V12H7v2.5a.5.5 0 0 1-.874.332l-4-4.5a.5.5 0 0 1 0-.664l4-4.5a.5.5 0 0 1 .552-.135ZM3.169 10L6 13.185V11.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1.685L16.831 10L14 6.815V8.5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5V6.815L3.169 10Z"
      />
    </svg>
  );
}
export default ArrowsBidirectional;
