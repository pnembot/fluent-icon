import type { SVGProps } from "react";

export function DocumentOnePageLink(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14 2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3.05a3.51 3.51 0 0 1-.713-1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8h.5c.17 0 .337.012.5.035V4a2 2 0 0 0-2-2Zm-1.41 4.992A.5.5 0 0 0 12.5 6h-5l-.09.008A.5.5 0 0 0 7.5 7h5l.09-.008ZM7.5 10a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Zm4 3a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1h-.5Zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H15a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5H15Zm-4 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default DocumentOnePageLink;
