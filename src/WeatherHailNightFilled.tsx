import type { SVGProps } from "react";

export function WeatherHailNightFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11 16.667A.667.667 0 1 1 11 18a.667.667 0 0 1 0-1.333ZM8.667 16a.667.667 0 1 1 0 1.333a.667.667 0 0 1 0-1.333Zm4.666 0a.667.667 0 1 1 0 1.333a.667.667 0 0 1 0-1.333ZM11 6c2.465 0 3.863 1.574 4.066 3.474h.062c1.586 0 2.872 1.237 2.872 2.763C18 13.763 16.714 15 15.128 15H6.872C5.286 15 4 13.763 4 12.237c0-1.47 1.192-2.671 2.697-2.758l.237-.005C7.139 7.561 8.535 6 11 6ZM5.843 2a4.236 4.236 0 0 1 1.895.565a4.238 4.238 0 0 1 1.979 2.573c-1.724.38-2.963 1.54-3.469 3.141l-.064.221l-.046.187l-.165.03a3.754 3.754 0 0 0-2.2 1.362a4.238 4.238 0 0 1-1.662-1.418a.629.629 0 0 1 .306-.948c1.376-.492 2.117-1.046 2.54-1.856c.463-.883.549-1.82.242-3.08a.628.628 0 0 1 .644-.776Z"
      />
    </svg>
  );
}
export default WeatherHailNightFilled;
