import type { SVGProps } from "react";

export function TableStackRightFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17 3.5a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0v-13ZM3 15v-2h4v4H5a2 2 0 0 1-2-2Zm5 2v-4h4v3.5a.5.5 0 0 1-.5.5H8Zm0-5h4V8H8v4ZM3 8v4h4V8H3Zm9-1H8V3h3.5a.5.5 0 0 1 .5.5V7ZM3 7V5a2 2 0 0 1 2-2h2v4H3Z"
      />
    </svg>
  );
}
export default TableStackRightFilled;
