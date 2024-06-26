import type { SVGProps } from "react";

export function StackVerticalFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v10.75a.75.75 0 0 1-1.5 0V13.5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v2.75a.75.75 0 0 1-1.5 0V5.5Zm1.5 5.708a2.492 2.492 0 0 1 1-.208h9c.356 0 .694.074 1 .208V9.5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v1.708Zm11-5.708a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v1.708A2.492 2.492 0 0 1 5.5 7h9c.356 0 .694.074 1 .208V5.5Z"
      />
    </svg>
  );
}
export default StackVerticalFilled;
