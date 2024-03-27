import type { SVGProps } from "react";

export function DualScreenHeaderFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16 16h-5.5V8H18v6a2 2 0 0 1-2 2Zm2-9V6a2 2 0 0 0-2-2h-5.5v3H18ZM9.5 7V4H4a2 2 0 0 0-2 2v1h7.5ZM2 8v6a2 2 0 0 0 2 2h5.5V8H2Z"
      />
    </svg>
  );
}
export default DualScreenHeaderFilled;
