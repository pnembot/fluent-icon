import type { SVGProps } from "react";

export function ArrowTurnBidirectionalDownRightFilled(
  props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>
) {
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
        d="M13.78 2.22a.75.75 0 1 0-1.06 1.06L15.44 6H9a3 3 0 0 0-3 3v6.44l-2.72-2.72a.75.75 0 0 0-1.06 1.06l4 4a.75.75 0 0 0 1.06 0l4-4a.75.75 0 1 0-1.06-1.06L7.5 15.44V9A1.5 1.5 0 0 1 9 7.5h6.44l-2.72 2.72a.75.75 0 1 0 1.06 1.06l4-4a.75.75 0 0 0 0-1.06l-4-4Z"
      />
    </svg>
  );
}
export default ArrowTurnBidirectionalDownRightFilled;
