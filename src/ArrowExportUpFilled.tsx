import type { SVGProps } from "react";

export function ArrowExportUpFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.53 1.72a.75.75 0 0 0-1.06 0l-4 4a.75.75 0 0 0 1.06 1.06l2.72-2.72v10.19a.75.75 0 0 0 1.5 0V4.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-4-4ZM4.5 16.5a.75.75 0 0 0 0 1.5h11a.75.75 0 0 0 0-1.5h-11Z"
      />
    </svg>
  );
}
export default ArrowExportUpFilled;
