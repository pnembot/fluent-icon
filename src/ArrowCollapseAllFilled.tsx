import type { SVGProps } from "react";

export function ArrowCollapseAllFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75Zm3.22 2.22a.75.75 0 0 1 1.06 0l2.75 2.75a.75.75 0 1 1-1.06 1.06L6.5 9.31v6.44a.75.75 0 0 1-1.5 0V9.31l-1.47 1.47a.75.75 0 1 1-1.06-1.06l2.75-2.75Zm4.28.78a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75Z"
      />
    </svg>
  );
}
export default ArrowCollapseAllFilled;
