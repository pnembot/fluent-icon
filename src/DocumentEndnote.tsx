import type { SVGProps } from "react";

export function DocumentEndnote(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 2a2 2 0 0 0-2 2v6h1V4a1 1 0 0 1 1-1h4v3.5A1.5 1.5 0 0 0 11.5 8H15v8a1 1 0 0 1-1 1h-3v1h3a2 2 0 0 0 2-2V7.414a1.5 1.5 0 0 0-.44-1.06l-3.914-3.915A1.5 1.5 0 0 0 10.586 2H6Zm8.793 5H11.5a.5.5 0 0 1-.5-.5V3.207L14.793 7ZM3.5 11a.5.5 0 0 1 0 1h-1a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h1a.5.5 0 0 1 0 1h-1A1.5 1.5 0 0 1 1 17.5v-5A1.5 1.5 0 0 1 2.5 11h1Zm4 7a.5.5 0 0 0 0 1h1a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 8.5 11h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-1Zm-2.001-4a.5.5 0 0 1 .5.5l.001 3a.5.5 0 1 1-1 0v-3a.5.5 0 0 1 .5-.5Zm.001-1a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Z"
      />
    </svg>
  );
}
export default DocumentEndnote;
