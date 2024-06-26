import type { SVGProps } from "react";

export function TableSimple(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9Zm1 5v4A1.5 1.5 0 0 0 5.5 16h4v-5.5H4Zm5.5-1V4h-4A1.5 1.5 0 0 0 4 5.5v4h5.5Zm1 1V16h4a1.5 1.5 0 0 0 1.5-1.5v-4h-5.5Zm5.5-1v-4A1.5 1.5 0 0 0 14.5 4h-4v5.5H16Z"
      />
    </svg>
  );
}
export default TableSimple;
