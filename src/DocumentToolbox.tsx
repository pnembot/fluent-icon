import type { SVGProps } from "react";

export function DocumentToolbox(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 2a2 2 0 0 0-2 2v4.268A1.99 1.99 0 0 1 5 8V4a1 1 0 0 1 1-1h4v3.5A1.5 1.5 0 0 0 11.5 8H15v8a1 1 0 0 1-1 1h-1v1h1a2 2 0 0 0 2-2V7.414a1.5 1.5 0 0 0-.44-1.06l-3.914-3.915A1.5 1.5 0 0 0 10.586 2H6Zm8.793 5H11.5a.5.5 0 0 1-.5-.5V3.207L14.793 7ZM4 12v-1.5A1.5 1.5 0 0 1 5.5 9h2A1.5 1.5 0 0 1 9 10.5V12h1.5a1.5 1.5 0 0 1 1.5 1.5V15H9v-.5a.5.5 0 0 0-1 0v.5H5v-.5a.5.5 0 0 0-1 0v.5H1v-1.5A1.5 1.5 0 0 1 2.5 12H4Zm1-1.5V12h3v-1.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5ZM9 16h3v1.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 1 17.5V16h3v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0V16Z"
      />
    </svg>
  );
}
export default DocumentToolbox;
