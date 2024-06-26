import type { SVGProps } from "react";

export function RadarRectangleMultiple(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m14.497 3.382l-.722.722A7.003 7.003 0 0 0 3.071 11H2.062a8.003 8.003 0 0 1 12.435-7.618ZM9.83 17.998c.11-.312.17-.648.17-.998a6.978 6.978 0 0 0 4.95-2.05a.5.5 0 0 1 .707.707a7.977 7.977 0 0 1-5.827 2.341ZM10 14.5v.5c1.28 0 2.56-.488 3.536-1.464a.5.5 0 1 0-.708-.708A3.988 3.988 0 0 1 9.914 14c.056.157.086.325.086.501ZM5.1 11h1.026a4.001 4.001 0 0 1 5.436-4.683l.751-.751A5.002 5.002 0 0 0 5.1 11Zm10.754-6.854a.5.5 0 0 1 0 .708L10.966 9.74a1.001 1.001 0 1 1-.707-.707l4.887-4.888a.5.5 0 0 1 .708 0ZM17 13.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0ZM16.5 7a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Zm1.5 4.25a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Zm-.5-2a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Zm-2.5 2a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Zm-.5-2a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1ZM1.5 12a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-5Zm7 2a.5.5 0 0 1 .5.5V17a2 2 0 0 1-2 2H3.5a.5.5 0 0 1 0-1H7a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 .5-.5Z"
      />
    </svg>
  );
}
export default RadarRectangleMultiple;
