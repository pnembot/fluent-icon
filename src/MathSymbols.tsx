import type { SVGProps } from "react";

export function MathSymbols(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 5v2.5a.5.5 0 0 0 1 0V5h2.5a.5.5 0 0 0 0-1H6V1.5a.5.5 0 0 0-1 0V4H2.5a.5.5 0 0 0 0 1H5Zm6-.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5ZM8.854 16.146L6.207 13.5l2.647-2.646a.5.5 0 0 0-.708-.708L5.5 12.793l-2.646-2.647a.5.5 0 0 0-.708.708L4.793 13.5l-2.647 2.646a.5.5 0 0 0 .708.708L5.5 14.207l2.646 2.647a.5.5 0 0 0 .708-.708ZM11.5 13a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm4-2a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-1 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"
      />
    </svg>
  );
}
export default MathSymbols;
