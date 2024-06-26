import type { SVGProps } from "react";

export function DocumentOnePageLinkFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3.05a3.5 3.5 0 0 1 2.45-6h4c.17 0 .337.012.5.035V4a2 2 0 0 0-2-2H6Zm1.5 4h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1ZM9 15.5a2.5 2.5 0 0 1 2.5-2.5h.5a.5.5 0 0 1 0 1h-.5a1.5 1.5 0 0 0 0 3h.5a.5.5 0 0 1 0 1h-.5A2.5 2.5 0 0 1 9 15.5Zm6-2.5a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H15a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5H15Zm-3.5 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm-4-5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1Z"
      />
    </svg>
  );
}
export default DocumentOnePageLinkFilled;
