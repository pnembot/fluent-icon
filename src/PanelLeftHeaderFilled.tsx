import type { SVGProps } from "react";

export function PanelLeftHeaderFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 3a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H5Zm12 3v1H8.5V4H15a2 2 0 0 1 2 2Zm-2 9H8.5V8H17v5a2 2 0 0 1-2 2Z"
      />
    </svg>
  );
}
export default PanelLeftHeaderFilled;
