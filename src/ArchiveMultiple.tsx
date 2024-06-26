import type { SVGProps } from "react";

export function ArchiveMultiple(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.5 8a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm-4-6A1.5 1.5 0 0 0 2 3.5v2a1.5 1.5 0 0 0 1.007 1.417A.503.503 0 0 0 3 7v5.5A3.5 3.5 0 0 0 6.5 16h5a3.5 3.5 0 0 0 3.5-3.5V7a.504.504 0 0 0-.007-.083A1.5 1.5 0 0 0 16 5.5v-2A1.5 1.5 0 0 0 14.5 2h-11ZM4 12.5V7h10v5.5a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 4 12.5Zm-1-9a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-2ZM8.5 18a3.489 3.489 0 0 1-2.45-1h6.45a3.5 3.5 0 0 0 3.5-3.5V7.085A1.5 1.5 0 0 1 17 8.5v5a4.5 4.5 0 0 1-4.5 4.5h-4Z"
      />
    </svg>
  );
}
export default ArchiveMultiple;
