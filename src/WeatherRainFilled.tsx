import type { SVGProps } from "react";

export function WeatherRainFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.015 4.018c2.465 0 3.863 1.573 4.066 3.474h.062c1.586 0 2.872 1.237 2.872 2.763c0 1.525-1.286 2.763-2.872 2.763l-.716-.001l-.01.025l-1.483 2.704a.5.5 0 0 1-.914-.396l.036-.083l1.235-2.25h-1.853l-.01.025l-1.483 2.704a.5.5 0 0 1-.914-.396l.036-.083l1.235-2.25h-1.87l-1.487 2.729a.5.5 0 0 1-.596.235l-.082-.036a.5.5 0 0 1-.236-.595l.036-.083l1.225-2.25h-.405c-1.586 0-2.872-1.236-2.872-2.762c0-1.47 1.192-2.671 2.697-2.758l.237-.005c.205-1.913 1.602-3.474 4.066-3.474Z"
      />
    </svg>
  );
}
export default WeatherRainFilled;
