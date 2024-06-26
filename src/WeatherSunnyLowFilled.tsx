import type { SVGProps } from "react";

export function WeatherSunnyLowFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.662 11a4.481 4.481 0 1 1 8.746 0H17.5a.5.5 0 0 1 0 1h-15a.5.5 0 0 1 0-1h3.162Zm4.473 7a.504.504 0 0 1-.22 0h.22ZM5.076 4.382l-.069-.058a.5.5 0 0 0-.638.765l.858.858l.07.058a.5.5 0 0 0 .638-.765l-.859-.858Zm10.663.637a.5.5 0 0 0-.765-.637l-.859.858l-.058.07a.5.5 0 0 0 .765.637l.859-.858l.058-.07ZM10.52 2.435a.5.5 0 0 0-.992.09v1.213l.008.09a.5.5 0 0 0 .992-.09V2.524l-.008-.09ZM8.5 16a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM5 14a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 5 14Z"
      />
    </svg>
  );
}
export default WeatherSunnyLowFilled;
