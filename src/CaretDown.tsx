import type { SVGProps } from "react";

export function CaretDown(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.019 8.628A1 1 0 0 1 5.797 7h8.407a1 1 0 0 1 .778 1.628l-3.815 4.723a1.5 1.5 0 0 1-2.334 0L5.02 8.628ZM14.204 8H5.797l3.814 4.723a.5.5 0 0 0 .778 0L14.204 8Z"
      />
    </svg>
  );
}
export default CaretDown;
