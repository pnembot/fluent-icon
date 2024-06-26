import type { SVGProps } from "react";

export function ImageShadowFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 2a3 3 0 0 0-3 3v6c0 .648.205 1.248.555 1.738l4.243-4.243a1.7 1.7 0 0 1 2.404 0l4.243 4.243c.35-.49.555-1.09.555-1.738V5a3 3 0 0 0-3-3H5Zm0 12a2.987 2.987 0 0 1-1.738-.555l4.243-4.243a.7.7 0 0 1 .99 0l4.243 4.243A2.98 2.98 0 0 1 11 14H5Zm6-8a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-5 9a3 3 0 0 0 3 3h3a6 6 0 0 0 6-6V9a3 3 0 0 0-3-3v5a4 4 0 0 1-4 4H6Z"
      />
    </svg>
  );
}
export default ImageShadowFilled;
