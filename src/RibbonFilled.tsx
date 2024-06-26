import type { SVGProps } from "react";

export function RibbonFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16 8A6 6 0 1 1 4 8a6 6 0 0 1 12 0Zm-6 7a6.968 6.968 0 0 0 4-1.255V17.5a.5.5 0 0 1-.79.407L10 16l-3.21 1.907A.5.5 0 0 1 6 17.5v-3.755A6.968 6.968 0 0 0 10 15Z"
      />
    </svg>
  );
}
export default RibbonFilled;
