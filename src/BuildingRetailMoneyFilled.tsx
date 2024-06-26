import type { SVGProps } from "react";

export function BuildingRetailMoneyFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 10V8h8v2H6Zm11-4.085A1.5 1.5 0 0 0 16.5 3h-13A1.5 1.5 0 0 0 3 5.915V16.5a.5.5 0 0 0 .5.5H5v-4.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .456.294A1.99 1.99 0 0 1 11 12h6V5.915ZM3.5 4h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1ZM5 7.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-3ZM9 13v4H6v-4h3Zm8.5 0a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-3a1.5 1.5 0 0 1 1.5-1.5h6Zm0 5a.5.5 0 0 1 .5-.5v-1a1.5 1.5 0 0 0-1.5 1.5h1Zm.5-3.5a.5.5 0 0 1-.5-.5h-1a1.5 1.5 0 0 0 1.5 1.5v-1Zm-6.5-.5a.5.5 0 0 1-.5.5v1a1.5 1.5 0 0 0 1.5-1.5h-1Zm-.5 3.5a.5.5 0 0 1 .5.5h1a1.5 1.5 0 0 0-1.5-1.5v1Zm3.5-3a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Z"
      />
    </svg>
  );
}
export default BuildingRetailMoneyFilled;
