import type { SVGProps } from "react";

export function ResizeTable(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 2a3 3 0 0 0-3 3v2.354a4.018 4.018 0 0 1 1-.819V5a2 2 0 0 1 2-2h3.5a.5.5 0 0 0 0-1H5Zm10 16h-2.354a4.02 4.02 0 0 0 .819-1H15a2 2 0 0 0 2-2v-3.5a.5.5 0 0 1 1 0V15a3 3 0 0 1-3 3ZM11.5 2a.5.5 0 0 0 0 1H15a2 2 0 0 1 2 2v3.5a.5.5 0 0 0 1 0V5a3 3 0 0 0-3-3h-3.5ZM5 7a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h5a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3H5Zm-2 3a2 2 0 0 1 2-2v2H3Zm3 0V8h3v2H6Zm4 0V8a2 2 0 0 1 2 2h-2Zm-4 1h3v3H6v-3Zm4 0h2v3h-2v-3Zm-4 4h3v2H6v-2Zm6 0a2 2 0 0 1-2 2v-2h2Zm-9-4h2v3H3v-3Zm0 4h2v2a2 2 0 0 1-2-2Z"
      />
    </svg>
  );
}
export default ResizeTable;
