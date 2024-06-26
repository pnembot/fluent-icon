import type { SVGProps } from "react";

export function ArrowJoin(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 2.5a.5.5 0 0 0-1 0a7.453 7.453 0 0 0 4.777 7A7.453 7.453 0 0 0 4 16.5a.5.5 0 0 0 1 0c0-3.624 2.876-6.5 6.5-6.5h.793l-1.147 1.146a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 0 0-.708.708L12.293 9H11.5A6.457 6.457 0 0 1 5 2.5ZM8.5 4a.5.5 0 0 0 0 1H15c.524 0 1 .476 1 1v7c0 .524-.476 1-1 1H8.5a.5.5 0 0 0 0 1H15c1.076 0 2-.924 2-2V6c0-1.076-.924-2-2-2H8.5Z"
      />
    </svg>
  );
}
export default ArrowJoin;
