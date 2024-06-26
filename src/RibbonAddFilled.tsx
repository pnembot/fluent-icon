import type { SVGProps } from "react";

export function RibbonAddFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M19 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V5h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H15V3.5Zm-6 2c0-1.277.435-2.453 1.166-3.387a6 6 0 1 0 4.036 8.879A5.5 5.5 0 0 1 9 5.5ZM9 15a6.968 6.968 0 0 0 4-1.255V17.5a.5.5 0 0 1-.79.407L9 16l-3.21 1.907A.5.5 0 0 1 5 17.5v-3.755A6.968 6.968 0 0 0 9 15Z"
      />
    </svg>
  );
}
export default RibbonAddFilled;
