import type { SVGProps } from "react";

export function ArrowTurnUpLeftFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.28 3.22a.75.75 0 0 0-1.06 0l-4 4a.75.75 0 0 0 0 1.06l4 4a.75.75 0 0 0 1.06-1.06L6.56 8.5H13a1.5 1.5 0 0 1 1.5 1.5v6.25a.75.75 0 0 0 1.5 0V10a3 3 0 0 0-3-3H6.56l2.72-2.72a.75.75 0 0 0 0-1.06Z"
      />
    </svg>
  );
}
export default ArrowTurnUpLeftFilled;
