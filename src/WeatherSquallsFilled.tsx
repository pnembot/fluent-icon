import type { SVGProps } from "react";

export function WeatherSquallsFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.073 5.812A3.498 3.498 0 0 1 13 6.499A3.501 3.501 0 0 1 9.5 10H2.75a.75.75 0 1 1 0-1.5H9.5a2.001 2.001 0 0 0 .002-4c-.952 0-1.772.672-1.958 1.606l-.059.291a.75.75 0 0 1-1.47-.294l.058-.291Zm7.287 3.542A2.45 2.45 0 0 1 18 10.449v.051a2.5 2.5 0 0 1-2.5 2.5h-.916a2.378 2.378 0 0 1-2.212 3.25a2.383 2.383 0 0 1-1.98-1.056l-.015-.024a.75.75 0 1 1 1.246-.834l.016.024c.163.243.439.39.733.39a.875.875 0 1 0 .003-1.75H2.75a.75.75 0 0 1 0-1.5H15.5a1 1 0 0 0 1-1v-.05a.95.95 0 0 0-1.799-.425l-.03.06a.75.75 0 1 1-1.342-.67l.03-.061Z"
      />
    </svg>
  );
}
export default WeatherSquallsFilled;
