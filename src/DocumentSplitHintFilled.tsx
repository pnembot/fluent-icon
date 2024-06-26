import type { SVGProps } from "react";

export function DocumentSplitHintFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2v4.5A1.5 1.5 0 0 0 11.5 8H16v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-6A1.5 1.5 0 0 1 5.5 2H10Zm1 .25V6.5a.5.5 0 0 0 .5.5h4.25L11 2.25ZM5 12a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1Zm11 0a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1ZM5 15.5a.5.5 0 0 0-1 0v.5a2 2 0 0 0 2 2h.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1v-.5Zm11 0a.5.5 0 0 0-1 0v.5a1 1 0 0 1-1 1h-.5a.5.5 0 0 0 0 1h.5a2 2 0 0 0 2-2v-.5ZM9 17a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H9Z"
      />
    </svg>
  );
}
export default DocumentSplitHintFilled;
