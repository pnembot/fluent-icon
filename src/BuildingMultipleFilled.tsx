import type { SVGProps } from "react";

export function BuildingMultipleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 2a2 2 0 0 0-2 2v13a1 1 0 0 0 1 1h7.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 .5.5H17a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2h-4V4a2 2 0 0 0-2-2H4Zm7 3h-1a2 2 0 0 0-2 2v10H3V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1ZM5.25 9.5a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5ZM6 5.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm-.75 9.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5ZM6 11.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm5.25-2.25a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5Zm.75 2.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm2.75-2.25a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5Zm.75 2.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Z"
      />
    </svg>
  );
}
export default BuildingMultipleFilled;
