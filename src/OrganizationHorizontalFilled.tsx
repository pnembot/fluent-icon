import type { SVGProps } from "react";

export function OrganizationHorizontalFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 13a3 3 0 1 1 2.96-3.5H9.5v-3A1.5 1.5 0 0 1 11 5h1.041a3.001 3.001 0 1 1 0 1H11a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h1.041a3.001 3.001 0 1 1 0 1H11a1.5 1.5 0 0 1-1.5-1.5v-3H7.96A3.002 3.002 0 0 1 5 13Z"
      />
    </svg>
  );
}
export default OrganizationHorizontalFilled;
