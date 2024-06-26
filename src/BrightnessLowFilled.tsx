import type { SVGProps } from "react";

export function BrightnessLowFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 3a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 10 3Zm0 3a4 4 0 1 0 0 8a4 4 0 0 0 0-8Zm0 7V7a3 3 0 1 1 0 6Zm6.5-2.5a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1h1ZM10 15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5Zm-5.5-4.5a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1h1Zm.646-5.354a.5.5 0 0 1 .708 0l.5.5a.5.5 0 1 1-.708.708l-.5-.5a.5.5 0 0 1 0-.708Zm.708 9.708a.5.5 0 0 1-.708-.708l.5-.5a.5.5 0 0 1 .708.708l-.5.5Zm9-9.708a.5.5 0 0 0-.708 0l-.5.5a.5.5 0 0 0 .708.708l.5-.5a.5.5 0 0 0 0-.708Zm-.708 9.708a.5.5 0 0 0 .708-.708l-.5-.5a.5.5 0 0 0-.708.708l.5.5Z"
      />
    </svg>
  );
}
export default BrightnessLowFilled;
