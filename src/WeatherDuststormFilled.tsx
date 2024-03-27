import type { SVGProps } from "react";

export function WeatherDuststormFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.25 3.5a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0Zm1.25 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0ZM9.502 3a3.498 3.498 0 0 0-3.43 2.812l-.057.29a.75.75 0 0 0 1.47.295l.059-.291a1.998 1.998 0 0 1 3.956.393a2.001 2.001 0 0 1-2 2.001H2.75a.75.75 0 1 0 0 1.5H9.5a3.501 3.501 0 0 0 .002-7Zm6.048 5a2.45 2.45 0 0 0-2.19 1.354l-.03.06a.75.75 0 1 0 1.34.671l.031-.06a.95.95 0 0 1 1.799.424v.051a1 1 0 0 1-1 1H2.75a.75.75 0 0 0 0 1.5h9.625a.875.875 0 1 1-.003 1.75a.883.883 0 0 1-.733-.39l-.016-.024a.75.75 0 0 0-1.246.835l.016.023a2.383 2.383 0 0 0 1.979 1.056A2.378 2.378 0 0 0 14.584 13h.916a2.5 2.5 0 0 0 2.5-2.5v-.05A2.45 2.45 0 0 0 15.55 8ZM7.5 17.25a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5Zm0 1.25a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm9.75-14a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0Zm1.25 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"
      />
    </svg>
  );
}
export default WeatherDuststormFilled;
