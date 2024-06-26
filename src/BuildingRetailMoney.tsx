import type { SVGProps } from "react";

export function BuildingRetailMoney(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 4.5A1.5 1.5 0 0 1 3.5 3h13a1.5 1.5 0 0 1 .5 2.915V12h-1V6H4v10h1v-3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .456.294A1.999 1.999 0 0 0 9 14v-1H6v3h3v1H3.5a.5.5 0 0 1-.5-.5V5.915A1.5 1.5 0 0 1 2 4.5ZM3.5 4a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Zm2 3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-9Zm.5 3V8h8v2H6Zm13 4.5v3a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-3a1.5 1.5 0 0 1 1.5-1.5h6a1.5 1.5 0 0 1 1.5 1.5ZM17.5 18a.5.5 0 0 1 .5-.5v-1a1.5 1.5 0 0 0-1.5 1.5h1Zm.5-3.5a.5.5 0 0 1-.5-.5h-1a1.5 1.5 0 0 0 1.5 1.5v-1Zm-6.5-.5a.5.5 0 0 1-.5.5v1a1.5 1.5 0 0 0 1.5-1.5h-1Zm-.5 3.5a.5.5 0 0 1 .5.5h1a1.5 1.5 0 0 0-1.5-1.5v1Zm3.5-3a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Z"
      />
    </svg>
  );
}
export default BuildingRetailMoney;
