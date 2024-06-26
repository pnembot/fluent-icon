import type { SVGProps } from "react";

export function FolderOpenVerticalFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.137 2.873A1.49 1.49 0 0 0 4 3.5v10.628a2.5 2.5 0 0 0 1.6 2.332l4.36 1.682c.355.137.72.13 1.04.015V6.568a1.5 1.5 0 0 0-.956-1.398L4.137 2.873Zm.797-.763l5.472 2.128A2.5 2.5 0 0 1 12 6.568V16h1.5a1.5 1.5 0 0 0 1.5-1.5v-2.938l.955-3.821c.03-.12.045-.241.045-.364V3.5A1.5 1.5 0 0 0 14.5 2h-9c-.2 0-.391.04-.566.11Z"
      />
    </svg>
  );
}
export default FolderOpenVerticalFilled;
