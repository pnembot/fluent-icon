import type { SVGProps } from "react";

export function Wifi4Filled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.921 13.881a1.242 1.242 0 1 1-1.756 1.757a1.242 1.242 0 0 1 1.757-1.757Z"
      />
    </svg>
  );
}
export default Wifi4Filled;
