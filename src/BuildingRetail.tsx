import type { SVGProps } from "react";

export function BuildingRetail(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 7a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-9Zm.5 3V8h8v2H6Zm5.5 2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-3Zm.5 2v-1h2v1h-2ZM2 4.5A1.5 1.5 0 0 1 3.5 3h13a1.5 1.5 0 0 1 .5 2.915V16.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V5.915A1.5 1.5 0 0 1 2 4.5ZM3.5 4a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13ZM4 6v10h1v-3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5V16h6V6H4Zm2 10h3v-3H6v3Z"
      />
    </svg>
  );
}
export default BuildingRetail;
