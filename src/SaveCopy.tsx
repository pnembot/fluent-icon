import type { SVGProps } from "react";

export function SaveCopy(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.5 6.5a.5.5 0 0 0-1 0v2h-2a.5.5 0 0 0 0 1h2v2a.5.5 0 0 0 1 0v-2h2a.5.5 0 0 0 0-1h-2v-2ZM4.5 2A2.5 2.5 0 0 0 2 4.5v9A2.5 2.5 0 0 0 4.5 16h9a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 13.5 2h-9ZM3 4.5A1.5 1.5 0 0 1 4.5 3h9A1.5 1.5 0 0 1 15 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 3 13.5v-9ZM7.5 18a3.489 3.489 0 0 1-2.45-1h9.45a2.5 2.5 0 0 0 2.5-2.5V5.05c.619.632 1 1.496 1 2.45v7a3.5 3.5 0 0 1-3.5 3.5h-7Z"
      />
    </svg>
  );
}
export default SaveCopy;
