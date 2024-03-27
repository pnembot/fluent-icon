import type { SVGProps } from "react";

export function LeafTwo(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 4.318V8a5 5 0 0 0 5.583 4.966c.19.378.422.732.69 1.054l-2.137 2.137a.5.5 0 0 0 .707.707l2.137-2.137A5.5 5.5 0 0 0 18 10.5V6.41C18 5.63 17.37 5 16.59 5H12.5c-.475 0-.936.06-1.375.173A4.995 4.995 0 0 0 7 3H3.318C2.59 3 2 3.59 2 4.318Zm7.691 9.698l3.163-3.162a.5.5 0 0 0-.707-.708L8.983 13.31A4.5 4.5 0 0 1 12.5 6h4.09a.41.41 0 0 1 .41.41v4.09a4.5 4.5 0 0 1-7.309 3.516ZM7 4c1.276 0 2.413.598 3.145 1.528A5.523 5.523 0 0 0 7.636 7.93L5.854 6.146a.5.5 0 1 0-.708.708l2.08 2.08A5.501 5.501 0 0 0 7 10.5c0 .518.072 1.02.206 1.495A4 4 0 0 1 3 8V4.318C3 4.142 3.142 4 3.318 4H7Z"
      />
    </svg>
  );
}
export default LeafTwo;
