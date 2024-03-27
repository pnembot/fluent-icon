import type { SVGProps } from "react";

export function PresenterOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.146 7.853A1.494 1.494 0 0 0 7 8.5V9h1.293l1 1H3.49a.5.5 0 0 0-.347.86l3.703 3.564a.5.5 0 0 1 .153.36V16.5A1.5 1.5 0 0 0 8.5 18h3a1.5 1.5 0 0 0 1.5-1.5v-1.716a.5.5 0 0 1 .153-.36l.287-.276l3.706 3.706a.5.5 0 0 0 .708-.707l-10-10l-5-5a.5.5 0 1 0-.708.707l5 5Zm9.71 3.007l-1.974 1.9l-2.76-2.76h4.387a.5.5 0 0 1 .347.86ZM13 9h-1.879l-2-2H11.5A1.5 1.5 0 0 1 13 8.5V9Zm-3-3a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z"
      />
    </svg>
  );
}
export default PresenterOffFilled;
