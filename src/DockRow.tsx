import type { SVGProps } from "react";

export function DockRow(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 4a1.5 1.5 0 0 0-1.5 1.5v2A1.5 1.5 0 0 0 3 9h2a1.5 1.5 0 0 0 1.5-1.5v-2A1.5 1.5 0 0 0 5 4H3Zm-.5 1.5A.5.5 0 0 1 3 5h2a.5.5 0 0 1 .5.5v2A.5.5 0 0 1 5 8H3a.5.5 0 0 1-.5-.5v-2ZM3 10a1.5 1.5 0 0 0-1.5 1.5v2A1.5 1.5 0 0 0 3 15h2a1.5 1.5 0 0 0 1.5-1.5v-2A1.5 1.5 0 0 0 5 10H3Zm-.5 1.5A.5.5 0 0 1 3 11h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5v-2Zm5-6A1.5 1.5 0 0 1 9 4h2a1.5 1.5 0 0 1 1.5 1.5v2A1.5 1.5 0 0 1 11 9H9a1.5 1.5 0 0 1-1.5-1.5v-2ZM9 5a.5.5 0 0 0-.5.5v2A.5.5 0 0 0 9 8h2a.5.5 0 0 0 .5-.5v-2A.5.5 0 0 0 11 5H9Zm0 5a1.5 1.5 0 0 0-1.5 1.5v2A1.5 1.5 0 0 0 9 15h2a1.5 1.5 0 0 0 1.5-1.5v-2A1.5 1.5 0 0 0 11 10H9Zm-.5 1.5A.5.5 0 0 1 9 11h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5v-2Zm5-6A1.5 1.5 0 0 1 15 4h2a1.5 1.5 0 0 1 1.5 1.5v2A1.5 1.5 0 0 1 17 9h-2a1.5 1.5 0 0 1-1.5-1.5v-2ZM15 5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2A.5.5 0 0 0 17 5h-2Zm0 5a1.5 1.5 0 0 0-1.5 1.5v2A1.5 1.5 0 0 0 15 15h2a1.5 1.5 0 0 0 1.5-1.5v-2A1.5 1.5 0 0 0 17 10h-2Zm-.5 1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2Z"
      />
    </svg>
  );
}
export default DockRow;
