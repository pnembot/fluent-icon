import type { SVGProps } from "react";

export function DocumentDatabase(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 2a2 2 0 0 0-2 2v3.126a8.732 8.732 0 0 1 1-.112V4a1 1 0 0 1 1-1h4v3.5A1.5 1.5 0 0 0 11.5 8H15v8a1 1 0 0 1-1 1h-3.051a2.63 2.63 0 0 1-.449 1H14a2 2 0 0 0 2-2V7.414a1.5 1.5 0 0 0-.44-1.06l-3.914-3.915A1.5 1.5 0 0 0 10.586 2H6Zm8.793 5H11.5a.5.5 0 0 1-.5-.5V3.207L14.793 7ZM6.879 8.12a6.47 6.47 0 0 1 1.12.3C9.207 8.87 10 9.634 10 10.5c0 1.38-2.015 2.5-4.5 2.5S1 11.88 1 10.5S3.015 8 5.5 8c.481 0 .945.042 1.38.12ZM5.5 14c1.38 0 2.679-.309 3.668-.858c.293-.163.578-.36.833-.59L10 16.5c0 1.38-2.015 2.5-4.5 2.5S1 17.88 1 16.5v-3.945c.255.23.54.425.832.588c.99.55 2.288.858 3.668.858Z"
      />
    </svg>
  );
}
export default DocumentDatabase;
