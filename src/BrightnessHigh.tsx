import type { SVGProps } from "react";

export function BrightnessHigh(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 10 2Zm0 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm0-1a3 3 0 1 1 0-6a3 3 0 0 1 0 6Zm7.5-2.5a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1h1ZM10 16a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5Zm-6.5-5.5a.5.5 0 0 0 0-1H2.463a.5.5 0 0 0 0 1H3.5Zm.646-6.354a.5.5 0 0 1 .708 0l1 1a.5.5 0 1 1-.708.708l-1-1a.5.5 0 0 1 0-.708Zm.708 11.708a.5.5 0 0 1-.708-.708l1-1a.5.5 0 0 1 .708.708l-1 1Zm11-11.708a.5.5 0 0 0-.708 0l-1 1a.5.5 0 0 0 .708.708l1-1a.5.5 0 0 0 0-.708Zm-.708 11.708a.5.5 0 0 0 .708-.708l-1-1a.5.5 0 0 0-.708.708l1 1Z"
      />
    </svg>
  );
}
export default BrightnessHigh;
