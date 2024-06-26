import type { SVGProps } from "react";

export function TextGrammarArrowLeftFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.75 5a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H2.75Zm0 3a.75.75 0 0 0 0 1.5h.456A5.48 5.48 0 0 1 5.5 9a5.48 5.48 0 0 1 2.294.5h9.456a.75.75 0 0 0 0-1.5H2.75Zm14.5 7.5h-6.34a5.529 5.529 0 0 0 .068-1.5h6.272a.75.75 0 0 1 0 1.5Zm0-3h-6.625a5.497 5.497 0 0 0-.882-1.5h7.507a.75.75 0 0 1 0 1.5Zm-7.25 2a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4.146-2.354a.5.5 0 0 0-.708.708L6.293 14H3.5a.5.5 0 0 0 0 1h2.793l-1.147 1.146a.5.5 0 0 0 .708.708l2-2A.499.499 0 0 0 8 14.503v-.006a.498.498 0 0 0-.144-.348l-.003-.003l-2-2Z"
      />
    </svg>
  );
}
export default TextGrammarArrowLeftFilled;
