import React, { SVGProps } from "react";

export function TagSearch(props: SVGProps<SVGSVGElement>) {
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
        d="M15 6a1 1 0 1 1-2 0a1 1 0 0 1 2 0ZM9.704 2.584A2 2 0 0 1 11.129 2l4.89.032a2 2 0 0 1 1.988 1.997l.007 4.95a2 2 0 0 1-.586 1.417l-.36.36a4.526 4.526 0 0 0-.695-.72l.348-.347a1 1 0 0 0 .293-.708l-.008-4.95a1 1 0 0 0-.993-.999L11.123 3a1 1 0 0 0-.713.292L3.728 9.957a1 1 0 0 0 0 1.415l4.948 4.948a1 1 0 0 0 1.359.051c.214.258.456.492.721.696a2 2 0 0 1-2.787-.04L3.02 12.08a2 2 0 0 1 .002-2.83l6.682-6.665Zm6.6 13.012a3.5 3.5 0 1 0-.707.707l2.55 2.55a.5.5 0 1 0 .707-.707l-2.55-2.55ZM16 13.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"
      />
    </svg>
  );
}
export default TagSearch;
