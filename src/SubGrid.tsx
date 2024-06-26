import type { SVGProps } from "react";

export function SubGrid(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM4 14v-3.5h2v2A1.5 1.5 0 0 0 7.5 14h2v2H6a2 2 0 0 1-2-2Zm6.5 0h2a1.5 1.5 0 0 0 1.5-1.5v-2h2V14a2 2 0 0 1-2 2h-3.5v-2Zm2.5-3.5v2a.5.5 0 0 1-.5.5h-2v-2.5H13Zm1-1v-2A1.5 1.5 0 0 0 12.5 6h-2V4H14a2 2 0 0 1 2 2v3.5h-2ZM10.5 7h2a.5.5 0 0 1 .5.5v2h-2.5V7Zm-1-1h-2A1.5 1.5 0 0 0 6 7.5v2H4V6a2 2 0 0 1 2-2h3.5v2ZM7 9.5v-2a.5.5 0 0 1 .5-.5h2v2.5H7Zm0 1h2.5V13h-2a.5.5 0 0 1-.5-.5v-2Z"
      />
    </svg>
  );
}
export default SubGrid;
