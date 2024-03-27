import type { SVGProps } from "react";

export function SquareEraser(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.081 16H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2.079c.368.09.71.265 1 .51V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h2.591a2.474 2.474 0 0 1-.51-1Zm1.358.466a1.5 1.5 0 0 1 0-2.122l4.9-4.9a1.5 1.5 0 0 1 2.122 0l2.095 2.1a1.499 1.499 0 0 1 0 2.122L14.216 18h2.531a.5.5 0 0 1 0 1h-4.092a1.498 1.498 0 0 1-1.121-.438l-2.095-2.096Zm5.612-6.319l-3.6 3.6l2.8 2.8l3.6-3.6a.498.498 0 0 0 0-.708l-2.095-2.095a.5.5 0 0 0-.705.003Zm-1.5 7.108l-2.8-2.8l-.6.6a.5.5 0 0 0 0 .708l2.095 2.095a.5.5 0 0 0 .708 0l.597-.603Z"
      />
    </svg>
  );
}
export default SquareEraser;
