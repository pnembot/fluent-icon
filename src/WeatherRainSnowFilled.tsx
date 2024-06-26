import type { SVGProps } from "react";

export function WeatherRainSnowFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 4c2.465 0 3.863 1.574 4.066 3.474h.062c1.586 0 2.872 1.237 2.872 2.763C17 11.763 15.714 13 14.128 13h-1.502a.5.5 0 1 1-.948 0l-4.237-.001l-1.496 2.746a.5.5 0 0 1-.914-.395l.036-.083l1.235-2.268l-.43.001C4.286 13 3 11.763 3 10.237c0-1.526 1.286-2.763 2.872-2.763h.062C6.139 5.561 7.535 4 10 4Zm1.5 11a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm-2.198-.94a.49.49 0 0 1 .235.587l-.036.082l-.562 1.014a.504.504 0 0 1-.678.197a.49.49 0 0 1-.236-.587l.036-.082l.562-1.014a.504.504 0 0 1 .679-.197ZM13.5 14a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Z"
      />
    </svg>
  );
}
export default WeatherRainSnowFilled;
