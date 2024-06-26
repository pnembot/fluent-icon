import type { SVGProps } from "react";

export function WeatherMoonOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708L8.752 9.46a9.451 9.451 0 0 1-.035.069c-.935 1.783-2.545 3.03-5.551 4.106a.598.598 0 0 0-.292.903a7.985 7.985 0 0 0 12.143 1.186l2.13 2.13a.5.5 0 0 0 .707-.708l-2.165-2.165l-6.507-6.506l-6.328-6.329Zm13.504 11.851l-.089.15l-6.777-6.776c.268-1.324.211-2.807-.226-4.596a.598.598 0 0 1 .614-.74a7.981 7.981 0 0 1 6.478 11.962Z"
      />
    </svg>
  );
}
export default WeatherMoonOffFilled;
