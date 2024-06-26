import type { SVGProps } from "react";

export function ArrowMoveInwardFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M13.03 3.72a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 0 1 1.06-1.06l1.22 1.22V1.75a.75.75 0 0 1 1.5 0v3.19l1.22-1.22a.75.75 0 0 1 1.06 0ZM3.72 6.97a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06-1.06l1.22-1.22H1.75a.75.75 0 0 1 0-1.5h3.19L3.72 8.03a.75.75 0 0 1 0-1.06Zm11.5 0a.75.75 0 1 1 1.06 1.06l-1.22 1.22h3.19a.75.75 0 0 1 0 1.5h-3.19l1.22 1.22a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5Zm-2.19 9.31a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 1 0 1.06 1.06l1.22-1.22v3.19a.75.75 0 0 0 1.5 0v-3.19l1.22 1.22a.75.75 0 0 0 1.06 0Z"
      />
    </svg>
  );
}
export default ArrowMoveInwardFilled;
