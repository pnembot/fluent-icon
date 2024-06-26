import type { SVGProps } from "react";

export function ResizeTableFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 2a3 3 0 0 0-3 3v2.354a4.018 4.018 0 0 1 1-.819V5a2 2 0 0 1 2-2h3.5a.5.5 0 0 0 0-1H5Zm10 16h-2.354a4.02 4.02 0 0 0 .819-1H15a2 2 0 0 0 2-2v-3.5a.5.5 0 0 1 1 0V15a3 3 0 0 1-3 3ZM11.5 2a.5.5 0 0 0 0 1H15a2 2 0 0 1 2 2v3.5a.5.5 0 0 0 1 0V5a3 3 0 0 0-3-3h-3.5ZM5 7a3 3 0 0 0-3 3h3V7Zm0 4v3H2v-3h3Zm0 4H2a3 3 0 0 0 3 3v-3Zm1 0h3v3H6v-3Zm0-1h3v-3H6v3Zm4 1h3a3 3 0 0 1-3 3v-3Zm0-4v3h3v-3h-3Zm0-1V7a3 3 0 0 1 3 3h-3ZM6 7h3v3H6V7Z"
      />
    </svg>
  );
}
export default ResizeTableFilled;
