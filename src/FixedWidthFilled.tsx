import type { SVGProps } from "react";

export function FixedWidthFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.5 3a.5.5 0 0 1 .5.5V5h5.5V3.5a.5.5 0 0 1 1 0V5H16V3.5a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0V6h-5.5v1.5a.5.5 0 0 1-1 0V6H4v1.5a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5Zm6 6H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4.5V9Zm1 8H15a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-4.5v8Z"
      />
    </svg>
  );
}
export default FixedWidthFilled;
