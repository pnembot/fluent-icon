import type { SVGProps } from "react";

export function CellularData2(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.503 10a.5.5 0 0 1 .492.41l.008.09v5a.5.5 0 0 1-.992.09l-.008-.09v-5a.5.5 0 0 1 .5-.5ZM4.5 12a.5.5 0 0 1 .492.41L5 12.5v3a.5.5 0 0 1-.992.09L4 15.5v-3a.5.5 0 0 1 .5-.5Zm6-4.003a.5.5 0 0 1 .492.41l.008.09V15.5a.5.5 0 0 1-.992.09L10 15.5V8.497a.5.5 0 0 1 .5-.5Zm3-1.995a.5.5 0 0 1 .492.41l.008.09V15.5a.5.5 0 0 1-.992.09L13 15.5V6.502a.5.5 0 0 1 .5-.5Z"
      />
    </svg>
  );
}
export default CellularData2;
