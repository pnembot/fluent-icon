import type { SVGProps } from "react";

export function TableStackLeftFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 16.5a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-1 0v13ZM17 5v2h-4V3h2a2 2 0 0 1 2 2Zm-5-2v4H8V3.5a.5.5 0 0 1 .5-.5H12Zm0 5H8v4h4V8Zm5 4V8h-4v4h4Zm-9 1h4v4H8.5a.5.5 0 0 1-.5-.5V13Zm9 0v2a2 2 0 0 1-2 2h-2v-4h4Z"
      />
    </svg>
  );
}
export default TableStackLeftFilled;
