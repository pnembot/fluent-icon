import type { SVGProps } from "react";

export function DocumentArrowUp(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 2a2 2 0 0 0-2 2v5.207a5.48 5.48 0 0 1 1-.185V4a1 1 0 0 1 1-1h4v3.5A1.5 1.5 0 0 0 11.5 8H15v8a1 1 0 0 1-1 1h-3.6a5.507 5.507 0 0 1-.657 1H14a2 2 0 0 0 2-2V7.414a1.5 1.5 0 0 0-.44-1.06l-3.914-3.915A1.5 1.5 0 0 0 10.586 2H6Zm8.793 5H11.5a.5.5 0 0 1-.5-.5V3.207L14.793 7ZM5.5 19a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm2.354-4.854a.5.5 0 1 1-.708.708L6 13.707V16.5a.5.5 0 0 1-1 0v-2.793l-1.146 1.147a.5.5 0 1 1-.708-.707l2-2A.5.5 0 0 1 5.497 12h.006a.498.498 0 0 1 .348.144l.003.003l2 2Z"
      />
    </svg>
  );
}
export default DocumentArrowUp;
