import type { SVGProps } from "react";

export function ImageShadow(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 2a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5ZM3 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6c0 .37-.101.718-.277 1.016l-3.52-3.521a1.7 1.7 0 0 0-2.405 0l-3.521 3.521A1.99 1.99 0 0 1 3 11V5Zm5.495 4.202l3.521 3.521A1.991 1.991 0 0 1 11 13H5c-.37 0-.718-.101-1.016-.277l3.521-3.52a.7.7 0 0 1 .99 0ZM11 6a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-5 9a3 3 0 0 0 3 3h3a6 6 0 0 0 6-6V9a3 3 0 0 0-3-3v5a4 4 0 0 1-4 4H6Z"
      />
    </svg>
  );
}
export default ImageShadow;
