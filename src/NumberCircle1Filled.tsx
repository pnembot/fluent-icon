import type { SVGProps } from "react";

export function NumberCircle1Filled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16Zm1-11.5v7a.5.5 0 0 1-1 0V8.477c-.378.484-.818.92-1.223 1.189a.5.5 0 1 1-.554-.832c.313-.209.711-.6 1.065-1.072c.354-.472.624-.973.727-1.383A.5.5 0 0 1 11 6.5Z"
      />
    </svg>
  );
}
export default NumberCircle1Filled;
