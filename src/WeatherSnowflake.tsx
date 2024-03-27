import type { SVGProps } from "react";

export function WeatherSnowflake(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2a.5.5 0 0 1 .5.5v3.043l1.896-1.897a.5.5 0 0 1 .708.708L10.5 6.957V9.5h2.543l2.603-2.604a.5.5 0 0 1 .708.708L14.457 9.5H17.5a.5.5 0 0 1 0 1h-3.043l1.897 1.896a.5.5 0 0 1-.708.708L13.043 10.5H10.5v2.543l2.604 2.603a.5.5 0 0 1-.708.708L10.5 14.457V17.5a.5.5 0 0 1-1 0v-3.043l-1.896 1.897a.5.5 0 0 1-.708-.708L9.5 13.043V10.5H6.957l-2.603 2.604a.5.5 0 0 1-.708-.708L5.543 10.5H2.5a.5.5 0 0 1 0-1h3.043L3.646 7.604a.5.5 0 1 1 .708-.708L6.957 9.5H9.5V6.957L6.896 4.354a.5.5 0 1 1 .708-.708L9.5 5.543V2.5A.5.5 0 0 1 10 2Z"
      />
    </svg>
  );
}
export default WeatherSnowflake;
