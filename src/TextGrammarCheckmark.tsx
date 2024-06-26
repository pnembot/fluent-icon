import type { SVGProps } from "react";

export function TextGrammarCheckmark(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17.5 5a.5.5 0 0 1 0 1h-15a.5.5 0 0 1 0-1h15Zm0 3a.5.5 0 0 1 0 1h-15a.5.5 0 0 1 0-1h15ZM9 14.5c0-.168.008-.335.022-.5H2.5a.5.5 0 0 0 0 1h6.522A5.571 5.571 0 0 1 9 14.5Zm.6-2.5c.183-.358.404-.693.657-1H2.5a.5.5 0 0 0 0 1h7.1Zm4.9-2a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9Zm-1.121 5.769l-.999-1.227l-.063-.064a.5.5 0 0 0-.712.696l1.34 1.645l.066.067a.5.5 0 0 0 .666-.02l3.512-3.641l.06-.068a.5.5 0 0 0-.749-.657l-3.121 3.269Z"
      />
    </svg>
  );
}
export default TextGrammarCheckmark;
