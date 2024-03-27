import type { SVGProps } from "react";

export function Prohibited(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M18 10a8 8 0 1 1-16 0a8 8 0 0 1 16 0Zm-1 0a6.973 6.973 0 0 0-1.71-4.584l-9.874 9.875A7 7 0 0 0 17 10ZM4.71 14.584l9.874-9.875a7 7 0 0 0-9.874 9.874Z"
      />
    </svg>
  );
}
export default Prohibited;
