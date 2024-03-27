import type { SVGProps } from "react";

export function ArrowJoinFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.5 2a.5.5 0 0 1 .5.5C5 6.124 7.876 9 11.5 9h.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L12.293 10H11.5A6.457 6.457 0 0 0 5 16.5a.5.5 0 0 1-1 0a7.453 7.453 0 0 1 4.777-7A7.453 7.453 0 0 1 4 2.5a.5.5 0 0 1 .5-.5Zm5.532 9.193A5.434 5.434 0 0 0 7 13.309V14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v.691a5.433 5.433 0 0 0 3.032 2.116A1.499 1.499 0 0 1 12.56 6.44l2 2a1.5 1.5 0 0 1 0 2.122l-2 2a1.5 1.5 0 0 1-2.53-1.368Z"
      />
    </svg>
  );
}
export default ArrowJoinFilled;
