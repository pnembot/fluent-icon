import type { SVGProps } from "react";

export function ClipboardHeart(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.085 3A1.5 1.5 0 0 1 8.5 2h3a1.5 1.5 0 0 1 1.415 1H14.5A1.5 1.5 0 0 1 16 4.5v4.503a3.86 3.86 0 0 0-1 .173V4.5a.5.5 0 0 0-.5-.5h-1.585A1.5 1.5 0 0 1 11.5 5h-3a1.5 1.5 0 0 1-1.415-1H5.5a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h5.055l1 1H5.5A1.5 1.5 0 0 1 4 16.5v-12A1.5 1.5 0 0 1 5.5 3h1.585ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm1.335 7.835a2.85 2.85 0 0 1 4.031 0l.136.136l.137-.136a2.85 2.85 0 0 1 4.031 4.031l-3.814 3.814a.5.5 0 0 1-.707 0l-3.814-3.814a2.85 2.85 0 0 1 0-4.031Z"
      />
    </svg>
  );
}
export default ClipboardHeart;
