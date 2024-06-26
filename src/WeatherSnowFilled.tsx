import type { SVGProps } from "react";

export function WeatherSnowFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.5 15a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM7 14a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM10 4c2.465 0 3.863 1.574 4.066 3.474h.062c1.586 0 2.872 1.237 2.872 2.763C17 11.763 15.714 13 14.128 13H5.872C4.286 13 3 11.763 3 10.237c0-1.47 1.192-2.671 2.697-2.758l.237-.005C6.139 5.561 7.535 4 10 4Z"
      />
    </svg>
  );
}
export default WeatherSnowFilled;
