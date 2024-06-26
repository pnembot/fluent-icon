import type { SVGProps } from "react";

export function TableSplitFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8 6h4V2H8v4ZM7 2H3.5a.5.5 0 0 0-.5.5V4a2 2 0 0 0 2 2h2V2Zm6 4h2a2 2 0 0 0 2-2V2.5a.5.5 0 0 0-.5-.5H13v4Zm4 11.5a.5.5 0 0 1-.5.5H13v-4h2a2 2 0 0 1 2 2v1.5ZM12 14v4H8v-4h4Zm-8.5 4H7v-4H5a2 2 0 0 0-2 2v1.5a.5.5 0 0 0 .5.5Zm-1-8.5h15.005a.5.5 0 1 1 0 1H2.5a.5.5 0 0 1 0-1Z"
      />
    </svg>
  );
}
export default TableSplitFilled;
