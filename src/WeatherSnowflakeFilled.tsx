import type { SVGProps } from "react";

export function WeatherSnowflakeFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2a.75.75 0 0 1 .75.75v2.19l1.47-1.47a.75.75 0 1 1 1.06 1.06l-2.53 2.53v2.19h2.19l2.53-2.53a.75.75 0 1 1 1.06 1.06l-1.47 1.47h2.19a.75.75 0 0 1 0 1.5h-2.19l1.47 1.47a.75.75 0 1 1-1.06 1.06l-2.53-2.53h-2.19v2.19l2.53 2.53a.75.75 0 1 1-1.06 1.06l-1.47-1.47v2.19a.75.75 0 0 1-1.5 0v-2.19l-1.47 1.47a.75.75 0 0 1-1.06-1.06l2.53-2.53v-2.19H7.06l-2.53 2.53a.75.75 0 0 1-1.06-1.06l1.47-1.47H2.75a.75.75 0 0 1 0-1.5h2.19L3.47 7.78a.75.75 0 0 1 1.06-1.06l2.53 2.53h2.19V7.06L6.72 4.53a.75.75 0 0 1 1.06-1.06l1.47 1.47V2.75A.75.75 0 0 1 10 2Z"
      />
    </svg>
  );
}
export default WeatherSnowflakeFilled;
