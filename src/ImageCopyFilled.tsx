import type { SVGProps } from "react";

export function ImageCopyFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a2.98 2.98 0 0 1-.555 1.738L12.21 9.502a1.71 1.71 0 0 0-2.418 0l-4.236 4.236A2.986 2.986 0 0 1 5 12V6Zm3.498 1.497a.998.998 0 1 0 0-1.995a.998.998 0 0 0 0 1.995Zm3.004 2.712l4.236 4.236A2.98 2.98 0 0 1 14 15H8a2.986 2.986 0 0 1-1.738-.555l4.236-4.236a.71.71 0 0 1 1.004 0ZM14.236 16c-.55.614-1.348 1-2.236 1H7.5A4.5 4.5 0 0 1 3 12.5V8c0-.888.386-1.687 1-2.236V12.5A3.5 3.5 0 0 0 7.5 16h6.736Z"
      />
    </svg>
  );
}
export default ImageCopyFilled;
