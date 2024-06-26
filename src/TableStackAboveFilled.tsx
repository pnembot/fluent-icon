import type { SVGProps } from "react";

export function TableStackAboveFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.5 3a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13ZM15 17h-2v-4h4v2a2 2 0 0 1-2 2Zm2-5h-4V8h3.5a.5.5 0 0 1 .5.5V12Zm-5 0V8H8v4h4Zm-4 5h4v-4H8v4ZM7 8v4H3V8.5a.5.5 0 0 1 .5-.5H7Zm0 9H5a2 2 0 0 1-2-2v-2h4v4Z"
      />
    </svg>
  );
}
export default TableStackAboveFilled;
