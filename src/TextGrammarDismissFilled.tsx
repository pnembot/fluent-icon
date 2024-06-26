import type { SVGProps } from "react";

export function TextGrammarDismissFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M18 5.75a.75.75 0 0 0-.75-.75H2.75a.75.75 0 1 0 0 1.5h14.5a.75.75 0 0 0 .75-.75Zm0 3a.75.75 0 0 0-.75-.75H2.75a.75.75 0 1 0 0 1.5h9.456A5.48 5.48 0 0 1 14.5 9a5.48 5.48 0 0 1 2.294.5h.456a.75.75 0 0 0 .75-.75ZM9.09 15.5H2.75a.75.75 0 0 1 0-1.5h6.272a5.571 5.571 0 0 0 .069 1.5Zm.285-3H2.75a.75.75 0 0 1 0-1.5h7.507a5.495 5.495 0 0 0-.882 1.5Zm9.625 2a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4.5.707l1.146 1.147a.5.5 0 0 0 .708-.708L15.207 14.5l1.147-1.146a.5.5 0 0 0-.708-.708L14.5 13.793l-1.146-1.147a.5.5 0 0 0-.708.708l1.147 1.146l-1.147 1.146a.5.5 0 0 0 .708.708l1.146-1.147Z"
      />
    </svg>
  );
}
export default TextGrammarDismissFilled;
