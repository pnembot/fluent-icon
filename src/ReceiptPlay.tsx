import type { SVGProps } from "react";

export function ReceiptPlay(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v7h3v2a3 3 0 0 1-3 3h-4.6c.162-.317.294-.651.393-1H14V5a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v4.022a5.48 5.48 0 0 0-1 .185V5Zm7.5 5H8.663a5.479 5.479 0 0 0-1.584-.77A.5.5 0 0 1 7.5 9h4a.5.5 0 0 1 0 1Zm3.5 6a2 2 0 0 0 2-2v-1h-2v3ZM7 6.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm3 8a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-6 1.495a.5.5 0 0 0 .757.429l2.5-1.497a.5.5 0 0 0 0-.858l-2.5-1.497A.5.5 0 0 0 4 13v2.994Z"
      />
    </svg>
  );
}
export default ReceiptPlay;
