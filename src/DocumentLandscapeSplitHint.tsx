import type { SVGProps } from "react";

export function DocumentLandscapeSplitHint(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 6a1 1 0 0 1 1-1h.5a.5.5 0 0 0 0-1H4a2 2 0 0 0-2 2v.5a.5.5 0 0 0 1 0V6Zm6.5-2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5H16a2 2 0 0 0 2-2V9.414a1.5 1.5 0 0 0-.44-1.06l-3.914-3.915A1.5 1.5 0 0 0 12.586 4H9.5Zm.5 11V5h2v3.5a1.5 1.5 0 0 0 1.5 1.5H17v4a1 1 0 0 1-1 1h-6Zm3.5-6a.5.5 0 0 1-.5-.5V5.207L16.793 9H13.5ZM3 14a1 1 0 0 0 1 1h.5a.5.5 0 0 1 0 1H4a2 2 0 0 1-2-2v-.5a.5.5 0 0 1 1 0v.5Zm0-5.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0v-3Zm3-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5ZM6.5 15a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z"
      />
    </svg>
  );
}
export default DocumentLandscapeSplitHint;
