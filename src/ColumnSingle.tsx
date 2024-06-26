import type { SVGProps } from "react";

export function ColumnSingle(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentColor"
        d="M5.75 2A1.75 1.75 0 0 0 4 3.75v8.5c0 .966.784 1.75 1.75 1.75h3.5A1.75 1.75 0 0 0 11 12.25v-8.5A1.75 1.75 0 0 0 9.25 2h-3.5ZM5 3.75A.75.75 0 0 1 5.75 3h3.5a.75.75 0 0 1 .75.75V5H5V3.75ZM5 6h5v6.25a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1-.75-.75V6Z"
      />
    </svg>
  );
}
export default ColumnSingle;
