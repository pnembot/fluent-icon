import type { SVGProps } from "react";

export function TooltipQuote(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .799.401c-.202.666-.503 1.095-.653 1.245a.5.5 0 1 0 .708.708C6.283 8.424 7 7.23 7 5.5a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .799.401c-.202.666-.503 1.095-.653 1.245a.5.5 0 1 0 .708.708C9.283 8.424 10 7.23 10 5.5a.5.5 0 0 0-.5-.5h-1ZM2 4a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9.42l-1.48 2.738a.5.5 0 0 1-.879.002L5.562 12H4a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1.858a.5.5 0 0 1 .439.26l1.2 2.194l1.186-2.192a.5.5 0 0 1 .44-.262H11a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4ZM2.5 14h3.017l.547 1H2.5a.5.5 0 0 1 0-1Zm15 1H8.935l.54-1H17.5a.5.5 0 0 1 0 1Zm-15 2a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1h-10Z"
      />
    </svg>
  );
}
export default TooltipQuote;
