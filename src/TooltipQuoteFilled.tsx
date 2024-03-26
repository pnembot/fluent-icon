import React, { SVGProps } from "react";

export function TooltipQuoteFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill="currentColor"
        d="M2 4a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9.42l-1.48 2.738a.5.5 0 0 1-.879.002L5.562 12H4a2 2 0 0 1-2-2V4Zm3.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .799.401c-.202.666-.503 1.095-.653 1.245a.5.5 0 1 0 .708.708C6.283 8.424 7 7.23 7 5.5a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .799.401c-.202.666-.503 1.095-.653 1.245a.5.5 0 1 0 .708.708C9.283 8.424 10 7.23 10 5.5a.5.5 0 0 0-.5-.5h-1Zm-2.983 9H2.5a.5.5 0 0 0 0 1h3.564l-.547-1Zm3.418 1H17.5a.5.5 0 0 0 0-1H9.476l-.541 1ZM2 17.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default TooltipQuoteFilled;
