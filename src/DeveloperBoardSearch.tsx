import React, { SVGProps } from "react";

export function DeveloperBoardSearch(props: SVGProps<SVGSVGElement>) {
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
        d="M8 9a3 3 0 1 1 6 0a3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4ZM9 1.5a.5.5 0 0 0-1 0V3h-.5A2.5 2.5 0 0 0 5 5.5V6H3.5a.5.5 0 0 0 0 1H5v1.5H3.5a.5.5 0 0 0-.441.736A4.495 4.495 0 0 1 4.5 9c.526 0 1.03.09 1.5.256V5.5A1.5 1.5 0 0 1 7.5 4h7A1.5 1.5 0 0 1 16 5.5v7a1.5 1.5 0 0 1-1.5 1.5H8.973a4.474 4.474 0 0 1-.23 1H10.5v1.5a.5.5 0 0 0 1 0V15H13v1.5a.5.5 0 0 0 1 0V15h.5a2.5 2.5 0 0 0 2.5-2.5V12h1.5a.5.5 0 0 0 0-1H17V9.5h1.5a.5.5 0 0 0 0-1H17V7h1.5a.5.5 0 0 0 0-1H17v-.5A2.5 2.5 0 0 0 14.5 3H14V1.5a.5.5 0 0 0-1 0V3h-1.5V1.5a.5.5 0 0 0-1 0V3H9V1.5ZM4.5 17c.786 0 1.512-.26 2.096-.697l2.55 2.55a.5.5 0 0 0 .708-.707l-2.55-2.55A3.5 3.5 0 1 0 4.5 17Zm0-1a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5Z"
      />
    </svg>
  );
}
export default DeveloperBoardSearch;