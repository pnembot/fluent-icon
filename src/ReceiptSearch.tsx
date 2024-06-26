import type { SVGProps } from "react";

export function ReceiptSearch(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 3a2 2 0 0 0-2 2v4.256c.318-.112.653-.19 1-.229V5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v11h-3.879l1 1H15a3 3 0 0 0 3-3v-2h-3V5a2 2 0 0 0-2-2H6Zm2.329 7H11.5a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.447.275c.466.172.897.418 1.276.725ZM15 16v-3h2v1a2 2 0 0 1-2 2ZM7.5 6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm-2 11c.786 0 1.512-.26 2.096-.697l2.55 2.55a.5.5 0 1 0 .708-.707l-2.55-2.55A3.5 3.5 0 1 0 5.5 17Zm0-1a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5Z"
      />
    </svg>
  );
}
export default ReceiptSearch;
