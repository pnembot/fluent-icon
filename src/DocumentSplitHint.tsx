import type { SVGProps } from "react";

export function DocumentSplitHint(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 4a2 2 0 0 1 2-2h4.586a1.5 1.5 0 0 1 1.06.44l3.915 3.914A1.5 1.5 0 0 1 16 7.414V9.5a.5.5 0 0 1-1 0V8h-3.5A1.5 1.5 0 0 1 10 6.5V3H6a1 1 0 0 0-1 1v5.5a.5.5 0 0 1-1 0V4Zm7-.793V6.5a.5.5 0 0 0 .5.5h3.293L11 3.207ZM4.5 11.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5Zm11 0a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5ZM4.5 15a.5.5 0 0 1 .5.5v.5a1 1 0 0 0 1 1h.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2v-.5a.5.5 0 0 1 .5-.5Zm11 0a.5.5 0 0 1 .5.5v.5a2 2 0 0 1-2 2h-.5a.5.5 0 0 1 0-1h.5a1 1 0 0 0 1-1v-.5a.5.5 0 0 1 .5-.5Zm-7 2.5A.5.5 0 0 1 9 17h2a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default DocumentSplitHint;
