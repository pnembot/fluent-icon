import type { SVGProps } from "react";

export function TextGrammarCheckmarkFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M18 5.75a.75.75 0 0 0-.75-.75H2.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 .75-.75Zm0 3a.75.75 0 0 0-.75-.75H2.75a.75.75 0 0 0 0 1.5h9.456A5.48 5.48 0 0 1 14.5 9a5.48 5.48 0 0 1 2.294.5h.456a.75.75 0 0 0 .75-.75ZM9.022 14a5.571 5.571 0 0 0 .069 1.5H2.75a.75.75 0 0 1 0-1.5h6.272Zm1.235-3a5.495 5.495 0 0 0-.882 1.5H2.75a.75.75 0 0 1 0-1.5h7.507ZM19 14.5a4.5 4.5 0 1 0-9 0a4.5 4.5 0 0 0 9 0Zm-2.5-2a.5.5 0 0 1 .749.657l-.06.068l-3.512 3.64a.5.5 0 0 1-.666.021l-.067-.067l-1.34-1.645a.5.5 0 0 1 .713-.696l.063.064l.999 1.227L16.5 12.5Z"
      />
    </svg>
  );
}
export default TextGrammarCheckmarkFilled;
