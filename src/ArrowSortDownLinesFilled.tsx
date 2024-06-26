import type { SVGProps } from "react";

export function ArrowSortDownLinesFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.75 17a.762.762 0 0 0 .59-.278l2.94-2.946a.75.75 0 0 0 0-1.06a.748.748 0 0 0-1.058 0L7.5 14.434V3.75a.75.75 0 0 0-1.5 0v10.694l-1.722-1.733a.748.748 0 0 0-1.059 0a.75.75 0 0 0 0 1.061l3.004 3.008a.73.73 0 0 0 .527.22Zm3-13a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Zm0 3a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5Zm0 3a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5Z"
      />
    </svg>
  );
}
export default ArrowSortDownLinesFilled;
