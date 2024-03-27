import type { SVGProps } from "react";

export function ArrowUndoFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.862 6.5H9.25a.75.75 0 0 1 0 1.5h-4.4A.85.85 0 0 1 4 7.15v-4.4a.75.75 0 0 1 1.5 0v2.947l3.059-2.66a5.25 5.25 0 0 1 6.888 7.925l-8.172 7.104a.75.75 0 1 1-.984-1.132l8.172-7.104a3.75 3.75 0 1 0-4.92-5.66L6.863 6.5Z"
      />
    </svg>
  );
}
export default ArrowUndoFilled;
