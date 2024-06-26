import type { SVGProps } from "react";

export function TextGrammarArrowRight(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.5 5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Zm0 3a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Zm7.243 3c.253.307.474.642.657 1h7.1a.5.5 0 0 0 0-1H9.743ZM11 14.5c0 .168-.008.335-.022.5H17.5a.5.5 0 0 0 0-1h-6.522c.014.165.022.332.022.5Zm-10 0a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0Zm4.146 2.354a.5.5 0 0 0 .708-.708L4.707 15H7.5a.5.5 0 0 0 0-1H4.707l1.147-1.146a.5.5 0 0 0-.708-.708l-2 2a.499.499 0 0 0-.146.351v.006a.498.498 0 0 0 .144.348l.003.003l2 2Z"
      />
    </svg>
  );
}
export default TextGrammarArrowRight;
