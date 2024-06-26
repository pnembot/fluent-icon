import type { SVGProps } from "react";

export function CaretUp(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.019 12.28a1 1 0 0 0 .778 1.628h8.407a1 1 0 0 0 .778-1.628l-3.815-4.723a1.5 1.5 0 0 0-2.334 0L5.02 12.28Zm9.185.628H5.797L9.61 8.186a.5.5 0 0 1 .778 0l3.815 4.722Z"
      />
    </svg>
  );
}
export default CaretUp;
