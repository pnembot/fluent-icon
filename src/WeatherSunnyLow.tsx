import type { SVGProps } from "react";

export function WeatherSunnyLow(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.554 10.016c0 .338.037.667.108.984H2.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.092a4.481 4.481 0 1 0-8.854-.984Zm7.822.984h-6.68a3.481 3.481 0 1 1 6.68 0Zm-3.35 7.012a.504.504 0 0 0 .109-.012h-.22a.503.503 0 0 0 .11.012ZM5.006 4.324l.07.058l.858.858a.5.5 0 0 1-.638.765l-.07-.058l-.858-.858a.5.5 0 0 1 .638-.765Zm10.674.058a.5.5 0 0 1 .058.637l-.058.07l-.859.858a.5.5 0 0 1-.764-.638l.057-.07l.859-.857a.5.5 0 0 1 .707 0Zm-5.653-2.358a.5.5 0 0 1 .492.41l.008.09v1.214a.5.5 0 0 1-.992.09l-.008-.09V2.524a.5.5 0 0 1 .5-.5ZM8.5 16a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM5 14a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 5 14Z"
      />
    </svg>
  );
}
export default WeatherSunnyLow;
