import type { SVGProps } from "react";

export function TableStackAbove(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5Zm0 5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5V15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8.5ZM4 13v2a1 1 0 0 0 1 1h2v-3H4Zm8 3v-3H8v3h4Zm1 0h2a1 1 0 0 0 1-1v-2h-3v3Zm0-4h3V9h-3v3Zm-1-3H8v3h4V9ZM4 9v3h3V9H4Z"
      />
    </svg>
  );
}
export default TableStackAbove;
