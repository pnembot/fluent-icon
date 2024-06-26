import type { SVGProps } from "react";

export function DesktopFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.5 2A1.5 1.5 0 0 0 2 3.5v10A1.5 1.5 0 0 0 3.5 15H7v2H5.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1H13v-2h3.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 16.5 2h-13ZM12 15v2H8v-2h4Z"
      />
    </svg>
  );
}
export default DesktopFilled;
