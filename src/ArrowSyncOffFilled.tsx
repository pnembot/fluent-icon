import type { SVGProps } from "react";

export function ArrowSyncOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.885 3.75a6.236 6.236 0 0 0-3.116.897L5.683 3.56a7.725 7.725 0 0 1 3.665-1.285l-.585-.586A.75.75 0 0 1 9.823.63l2.122 2.121a.75.75 0 0 1 0 1.06L9.823 5.934a.75.75 0 0 1-1.06-1.06L9.885 3.75ZM4.178 4.884a7.75 7.75 0 0 0 1.18 11.322a.75.75 0 1 0 .9-1.2a6.25 6.25 0 0 1-1.016-9.059l8.81 8.811a6.225 6.225 0 0 1-3.937 1.49l1.122-1.123a.75.75 0 0 0-1.06-1.06l-2.122 2.121a.75.75 0 0 0 0 1.06l2.122 2.122a.75.75 0 1 0 1.06-1.06l-.585-.586a7.718 7.718 0 0 0 4.463-1.9l2.031 2.03a.5.5 0 0 0 .708-.707l-15-15a.5.5 0 1 0-.708.708l2.032 2.03Zm11.174 8.346l1.086 1.086a7.753 7.753 0 0 0-1.796-10.524a.75.75 0 0 0-.9 1.2a6.253 6.253 0 0 1 1.61 8.237Z"
      />
    </svg>
  );
}
export default ArrowSyncOffFilled;
