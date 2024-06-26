import type { SVGProps } from "react";

export function TableStackBelow(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17 16.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1 0-1h13a.5.5 0 0 1 .5.5Zm0-5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6.5ZM16 7V5a1 1 0 0 0-1-1h-2v3h3ZM8 4v3h4V4H8ZM7 4H5a1 1 0 0 0-1 1v2h3V4Zm0 4H4v3h3V8Zm1 3h4V8H8v3Zm8 0V8h-3v3h3Z"
      />
    </svg>
  );
}
export default TableStackBelow;
