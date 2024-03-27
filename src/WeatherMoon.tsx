import type { SVGProps } from "react";

export function WeatherMoon(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M15.493 13.497a6.981 6.981 0 0 1-11.483.892c2.831-1.087 4.558-2.42 5.593-4.397c1.048-2 1.337-4.16.76-6.909a6.981 6.981 0 0 1 5.13 10.414ZM5.457 16.918A7.981 7.981 0 1 0 9.88 2.035a.599.599 0 0 0-.614.74c.688 2.819.434 4.876-.55 6.753c-.934 1.784-2.544 3.031-5.55 4.107a.599.599 0 0 0-.292.903a7.952 7.952 0 0 0 2.582 2.38Z"
      />
    </svg>
  );
}
export default WeatherMoon;
