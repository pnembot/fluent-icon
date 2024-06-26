import type { SVGProps } from "react";

export function NumberSymbolSquareFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m11.453 9l-.429 2H8.547l.429-2h2.476ZM5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 14.5 3h-9Zm3.605 3.011a.5.5 0 0 1 .384.594L9.19 8h2.477l.343-1.605a.5.5 0 0 1 .978.21L12.69 8h.811a.5.5 0 0 1 0 1h-1.025l-.428 2H13a.5.5 0 0 1 0 1h-1.167l-.344 1.604a.5.5 0 1 1-.978-.21L10.81 12H8.333l-.344 1.605a.5.5 0 1 1-.978-.21l.3-1.395H6.5a.5.5 0 0 1 0-1h1.024l.43-2H7a.5.5 0 0 1 0-1h1.167l.344-1.605a.5.5 0 0 1 .594-.384Z"
      />
    </svg>
  );
}
export default NumberSymbolSquareFilled;
