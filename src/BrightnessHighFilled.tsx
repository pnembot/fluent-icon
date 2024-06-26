import type { SVGProps } from "react";

export function BrightnessHighFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.5 2.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1ZM10 6a4 4 0 1 1 0 8a4 4 0 0 1 0-8Zm3 4a3 3 0 0 0-3-3v6a3 3 0 0 0 3-3Zm5 0a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 .5.5Zm-7.5 6.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1ZM4 10a.5.5 0 0 1-.5.5H2.463a.5.5 0 0 1 0-1H3.5a.5.5 0 0 1 .5.5Zm.854-5.854a.5.5 0 1 0-.708.708l1 1a.5.5 0 1 0 .708-.708l-1-1Zm-.708 11.708a.5.5 0 0 0 .708 0l1-1a.5.5 0 0 0-.708-.708l-1 1a.5.5 0 0 0 0 .708Zm11-11.708a.5.5 0 0 1 .708.708l-1 1a.5.5 0 0 1-.708-.708l1-1Zm.708 11.708a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l1 1a.5.5 0 0 1 0 .708Z"
      />
    </svg>
  );
}
export default BrightnessHighFilled;
