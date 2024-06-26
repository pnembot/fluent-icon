import type { SVGProps } from "react";

export function ArrowRedoFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M13.14 6.5h-2.387a.75.75 0 1 0 0 1.5h4.4c.47 0 .85-.38.85-.85v-4.4a.75.75 0 0 0-1.5 0v2.947l-3.059-2.66a5.25 5.25 0 0 0-6.888 7.925l8.172 7.104a.75.75 0 1 0 .984-1.132L5.54 9.83a3.75 3.75 0 1 1 4.92-5.66l2.68 2.33Z"
      />
    </svg>
  );
}
export default ArrowRedoFilled;
