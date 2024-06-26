import type { SVGProps } from "react";

export function CellularData1(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16.503 4a.5.5 0 0 1 .492.41l.008.09v11a.5.5 0 0 1-.992.09l-.008-.09v-11a.5.5 0 0 1 .5-.5Zm-9 5.999a.5.5 0 0 1 .492.41l.008.09v5a.5.5 0 0 1-.992.09l-.008-.09v-5a.5.5 0 0 1 .5-.5Zm-3.003 2a.5.5 0 0 1 .492.41L5 12.5v3a.5.5 0 0 1-.992.09L4 15.5v-3a.5.5 0 0 1 .5-.5Zm6-4.002a.5.5 0 0 1 .492.41l.008.09v7.002a.5.5 0 0 1-.992.09L10 15.5V8.497a.5.5 0 0 1 .5-.5ZM13.5 6a.5.5 0 0 1 .492.41L14 6.5v9a.5.5 0 0 1-.992.09L13 15.5V6.501a.5.5 0 0 1 .5-.5Z"
      />
    </svg>
  );
}
export default CellularData1;
