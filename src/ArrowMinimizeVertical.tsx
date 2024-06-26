import type { SVGProps } from "react";

export function ArrowMinimizeVertical(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.5 1a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L9 5.293V1.5a.5.5 0 0 1 .5-.5Zm-6 8.5A.5.5 0 0 1 4 9h11a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5Zm6.5 4.207V17.5a.5.5 0 0 1-1 0v-3.793l-1.146 1.147a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L10 13.707Z"
      />
    </svg>
  );
}
export default ArrowMinimizeVertical;
