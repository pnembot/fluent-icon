import type { SVGProps } from "react";

export function DocumentError(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 2a2 2 0 0 0-2 2v5.207a5.48 5.48 0 0 1 1-.185V4a1 1 0 0 1 1-1h4v3.5A1.5 1.5 0 0 0 11.5 8H15v8a1 1 0 0 1-1 1h-3.6a5.507 5.507 0 0 1-.657 1H14a2 2 0 0 0 2-2V7.414a1.5 1.5 0 0 0-.44-1.06l-3.914-3.915A1.5 1.5 0 0 0 10.586 2H6Zm8.793 5H11.5a.5.5 0 0 1-.5-.5V3.207L14.793 7ZM10 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0ZM5.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.125a.625.625 0 1 0 0-1.25a.625.625 0 0 0 0 1.25Z"
      />
    </svg>
  );
}
export default DocumentError;
