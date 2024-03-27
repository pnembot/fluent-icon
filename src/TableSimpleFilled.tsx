import type { SVGProps } from "react";

export function TableSimpleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 3A2.5 2.5 0 0 0 3 5.5v4h6.5V3h-4Zm4 7.5H3v4A2.5 2.5 0 0 0 5.5 17h4v-6.5Zm1 0H17v4a2.5 2.5 0 0 1-2.5 2.5h-4v-6.5Zm6.5-1v-4A2.5 2.5 0 0 0 14.5 3h-4v6.5H17Z"
      />
    </svg>
  );
}
export default TableSimpleFilled;
