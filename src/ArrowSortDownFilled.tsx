import type { SVGProps } from "react";

export function ArrowSortDownFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.75 17a.762.762 0 0 0 .59-.278l2.94-2.946a.75.75 0 0 0 0-1.06a.748.748 0 0 0-1.058 0L10.5 14.434V3.75a.75.75 0 0 0-1.5 0v10.694l-1.722-1.733a.748.748 0 0 0-1.059 0a.75.75 0 0 0 0 1.061l3.004 3.008a.73.73 0 0 0 .527.22Z"
      />
    </svg>
  );
}
export default ArrowSortDownFilled;
