import type { SVGProps } from "react";

export function PhotoFilterFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.257 13.743a6 6 0 1 1 7.486-7.486a6 6 0 1 1-7.486 7.486ZM3.5 8A4.5 4.5 0 0 0 6 12.032V12a6 6 0 0 1 6.032-6A4.5 4.5 0 0 0 3.5 8Zm4.468 6A4.5 4.5 0 1 0 14 7.968V8a6 6 0 0 1-6 6h-.032Z"
      />
    </svg>
  );
}
export default PhotoFilterFilled;
