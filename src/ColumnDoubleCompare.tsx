import type { SVGProps } from "react";

export function ColumnDoubleCompare(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7 3H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM3 4h4a1 1 0 0 1 1 1v1H2V5a1 1 0 0 1 1-1Zm4 12H3a1 1 0 0 1-1-1V7h6v8a1 1 0 0 1-1 1ZM17 3h-4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm-4 1h4a1 1 0 0 1 1 1v5h-6V5a1 1 0 0 1 1-1Zm4 12h-4a1 1 0 0 1-1-1v-2h6v2a1 1 0 0 1-1 1Z"
      />
    </svg>
  );
}
export default ColumnDoubleCompare;
