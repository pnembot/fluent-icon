import type { SVGProps } from "react";

export function ArchiveMultipleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.5 2A1.5 1.5 0 0 0 2 3.5v1A1.5 1.5 0 0 0 3.5 6h11A1.5 1.5 0 0 0 16 4.5v-1A1.5 1.5 0 0 0 14.5 2h-11ZM15 7H3v5.5A3.5 3.5 0 0 0 6.5 16h5a3.5 3.5 0 0 0 3.5-3.5V7ZM7 8.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM8.5 18a3.489 3.489 0 0 1-2.45-1h6.45a3.5 3.5 0 0 0 3.5-3.5V7.085A1.5 1.5 0 0 1 17 8.5v5a4.5 4.5 0 0 1-4.5 4.5h-4Z"
      />
    </svg>
  );
}
export default ArchiveMultipleFilled;
