import type { SVGProps } from "react";

export function TextGrammarErrorFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.75 5a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H2.75Zm0 3a.75.75 0 0 0 0 1.5h9.456A5.48 5.48 0 0 1 14.5 9a5.48 5.48 0 0 1 2.294.5h.456a.75.75 0 0 0 0-1.5H2.75Zm0 3h7.507a5.495 5.495 0 0 0-.882 1.5H2.75a.75.75 0 0 1 0-1.5Zm0 3h6.272a5.571 5.571 0 0 0 .069 1.5H2.75a.75.75 0 0 1 0-1.5Zm16.25.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0ZM14.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.125a.625.625 0 1 0 0-1.25a.625.625 0 0 0 0 1.25Z"
      />
    </svg>
  );
}
export default TextGrammarErrorFilled;
