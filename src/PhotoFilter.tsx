import type { SVGProps } from "react";

export function PhotoFilter(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 8a6.003 6.003 0 0 0 4.257 5.743a6 6 0 1 0 7.486-7.486A6 6 0 0 0 2 8Zm6-5a5.001 5.001 0 0 1 4.597 3.03a6 6 0 0 0-6.567 6.567A5.001 5.001 0 0 1 8 3Zm9 9a5 5 0 0 1-9.597 1.97a6 6 0 0 0 6.567-6.567A5.001 5.001 0 0 1 17 12Z"
      />
    </svg>
  );
}
export default PhotoFilter;
