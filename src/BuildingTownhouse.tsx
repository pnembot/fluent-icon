import type { SVGProps } from "react";

export function BuildingTownhouse(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.105 3.236a1 1 0 0 1 1.29 0L9.968 5.41l.032.028l.032-.028l2.573-2.174a1 1 0 0 1 1.29 0l2.573 2.174A1.5 1.5 0 0 1 17 6.556v8.949a1.5 1.5 0 0 1-1.5 1.5h-11a1.5 1.5 0 0 1-1.5-1.5v-8.95c0-.44.195-.86.532-1.145l2.573-2.174ZM10.5 13h2a.5.5 0 0 1 .5.5v2.505h2.5a.5.5 0 0 0 .5-.5v-8.95a.5.5 0 0 0-.177-.381L13.25 4l-2.573 2.174a.5.5 0 0 0-.177.382V13Zm-1 0V6.556a.5.5 0 0 0-.177-.382L6.75 4L4.177 6.174A.5.5 0 0 0 4 6.556v8.949a.5.5 0 0 0 .5.5H7V13.5a.5.5 0 0 1 .5-.5h2ZM8 16.005h1.5V14H8v2.005ZM10.5 14v2.005H12V14h-1.5ZM6.75 8.5a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Zm.75 2.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm5.75-2.25a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Zm.75 2.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Z"
      />
    </svg>
  );
}
export default BuildingTownhouse;
