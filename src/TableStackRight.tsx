import type { SVGProps } from "react";

export function TableStackRight(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16.5 3a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5Zm-5 0a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6.5ZM7 4H5a1 1 0 0 0-1 1v2h3V4Zm-3 8h3V8H4v4Zm0 1v2a1 1 0 0 0 1 1h2v-3H4Zm4 0v3h3v-3H8Zm3-1V8H8v4h3Zm0-8H8v3h3V4Z"
      />
    </svg>
  );
}
export default TableStackRight;
