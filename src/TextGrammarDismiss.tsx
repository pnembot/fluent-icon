import type { SVGProps } from "react";

export function TextGrammarDismiss(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17.5 5a.5.5 0 0 1 0 1h-15a.5.5 0 0 1 0-1h15Zm0 3a.5.5 0 0 1 0 1h-15a.5.5 0 0 1 0-1h15Zm-7.243 3a5.503 5.503 0 0 0-.657 1H2.5a.5.5 0 0 1 0-1h7.757ZM9 14.5c0 .168.008.335.022.5H2.5a.5.5 0 0 1 0-1h6.522a5.571 5.571 0 0 0-.022.5Zm5.5 4.5a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm1.146-2.646L14.5 15.207l-1.146 1.147a.5.5 0 0 1-.708-.708l1.147-1.146l-1.147-1.146a.5.5 0 0 1 .708-.708l1.146 1.147l1.146-1.147a.5.5 0 0 1 .708.708L15.207 14.5l1.147 1.146a.5.5 0 0 1-.708.708Z"
      />
    </svg>
  );
}
export default TextGrammarDismiss;
