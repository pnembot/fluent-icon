import type { SVGProps } from "react";

export function ArrowTurnRightUpFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16.78 9.28a.75.75 0 0 0 0-1.06l-4-4a.75.75 0 0 0-1.06 0l-4 4a.75.75 0 0 0 1.06 1.06l2.72-2.72V13a1.5 1.5 0 0 1-1.5 1.5H3.75a.75.75 0 0 0 0 1.5H10a3 3 0 0 0 3-3V6.56l2.72 2.72a.75.75 0 0 0 1.06 0Z"
      />
    </svg>
  );
}
export default ArrowTurnRightUpFilled;
