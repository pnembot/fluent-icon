import type { SVGProps } from "react";

export function TimeAndWeatherFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.5 2.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1Zm-5 7.5a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0ZM10 8.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 .5.5H11a.5.5 0 0 0 0-1h-1V8.5Zm0 7.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5ZM2.5 9.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1ZM16 10a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5ZM4.146 15.146a.5.5 0 0 0 .708.708l1-1a.5.5 0 0 0-.708-.708l-1 1Zm10-10l1-1a.5.5 0 0 1 .708.708l-1 1a.5.5 0 0 1-.708-.708Zm-9.292-1a.5.5 0 1 0-.708.708l1 1a.5.5 0 1 0 .708-.708l-1-1Zm10 10l1 1a.5.5 0 0 1-.708.708l-1-1a.5.5 0 0 1 .708-.708Z"
      />
    </svg>
  );
}
export default TimeAndWeatherFilled;
