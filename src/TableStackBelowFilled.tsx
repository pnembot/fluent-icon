import type { SVGProps } from "react";

export function TableStackBelowFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16.5 17a.5.5 0 0 0 0-1h-13a.5.5 0 0 0 0 1h13ZM5 3h2v4H3V5a2 2 0 0 1 2-2ZM3 8h4v4H3.5a.5.5 0 0 1-.5-.5V8Zm5 0v4h4V8H8Zm4-5H8v4h4V3Zm1 9V8h4v3.5a.5.5 0 0 1-.5.5H13Zm0-9h2a2 2 0 0 1 2 2v2h-4V3Z"
      />
    </svg>
  );
}
export default TableStackBelowFilled;
