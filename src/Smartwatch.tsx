import type { SVGProps } from "react";

export function Smartwatch(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 5.268V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.268A2 2 0 0 1 15 7v1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v2a2 2 0 0 1-1 1.732V16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1.268A2 2 0 0 1 5 13V7a2 2 0 0 1 1-1.732ZM8 3a1 1 0 0 0-1 1v1h6V4a1 1 0 0 0-1-1H8Zm6 10V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v6a1 1 0 0 0 .999 1H13a1 1 0 0 0 1-1Zm-7 3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1H7v1Z"
      />
    </svg>
  );
}
export default Smartwatch;
