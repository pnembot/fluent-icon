import type { SVGProps } from "react";

export function TableStackLeft(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.5 17a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5Zm5 0a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5H15a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8.5Zm4.5-1h2a1 1 0 0 0 1-1v-2h-3v3Zm3-8h-3v4h3V8Zm0-1V5a1 1 0 0 0-1-1h-2v3h3Zm-4 0V4H9v3h3ZM9 8v4h3V8H9Zm0 8h3v-3H9v3Z"
      />
    </svg>
  );
}
export default TableStackLeft;
