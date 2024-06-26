import type { SVGProps } from "react";

export function CalculatorArrowClockwise(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7 12a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 3a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm2.627-3.072a5.521 5.521 0 0 1 1.178-1.522A.998.998 0 0 0 9 11a1 1 0 0 0 .627.928ZM6.5 17h3.11c.185.358.408.693.663 1H6.5A2.5 2.5 0 0 1 4 15.5v-11A2.5 2.5 0 0 1 6.5 2h7A2.5 2.5 0 0 1 16 4.5v4.688a5.482 5.482 0 0 0-1-.185V4.5A1.5 1.5 0 0 0 13.5 3h-7A1.5 1.5 0 0 0 5 4.5v11A1.5 1.5 0 0 0 6.5 17ZM6 5.5A1.5 1.5 0 0 1 7.5 4h5A1.5 1.5 0 0 1 14 5.5v1A1.5 1.5 0 0 1 12.5 8h-5A1.5 1.5 0 0 1 6 6.5v-1ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-5Zm10 7.48a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v.758a4.5 4.5 0 1 0 2 3.742a.5.5 0 1 0-1 0a3.5 3.5 0 1 1-1.696-3H15.5a.5.5 0 1 0 0 1h2Z"
      />
    </svg>
  );
}
export default CalculatorArrowClockwise;
