import type { SVGProps } from "react";

export function DocumentBriefcase(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 2a2 2 0 0 0-2 2v5.05c.162-.033.329-.05.5-.05H5V4a1 1 0 0 1 1-1h4v3.5A1.5 1.5 0 0 0 11.5 8H15v8a1 1 0 0 1-1 1h-3v.5c0 .171-.017.338-.05.5H14a2 2 0 0 0 2-2V7.414a1.5 1.5 0 0 0-.44-1.06l-3.914-3.915A1.5 1.5 0 0 0 10.586 2H6Zm8.793 5H11.5a.5.5 0 0 1-.5-.5V3.207L14.793 7ZM3 11.5v.5h-.5A1.5 1.5 0 0 0 1 13.5v4A1.5 1.5 0 0 0 2.5 19h6a1.5 1.5 0 0 0 1.5-1.5v-4A1.5 1.5 0 0 0 8.5 12H8v-.5A1.5 1.5 0 0 0 6.5 10h-2A1.5 1.5 0 0 0 3 11.5Zm1.5-.5h2a.5.5 0 0 1 .5.5v.5H4v-.5a.5.5 0 0 1 .5-.5Z"
      />
    </svg>
  );
}
export default DocumentBriefcase;
