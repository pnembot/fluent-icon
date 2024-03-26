import React, { SVGProps } from "react";

export function PersonSearchFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M10 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8Zm4.865 14.797c-1.071.683-2.454 1.064-3.962 1.171a1.497 1.497 0 0 0-.342-.529l-2-1.999A4.482 4.482 0 0 0 9 13.5a4.48 4.48 0 0 0-.758-2.5H15a2 2 0 0 1 2 2c0 1.691-.833 2.966-2.135 3.797ZM4.5 17c.786 0 1.512-.26 2.096-.697l2.55 2.55a.5.5 0 1 0 .708-.707l-2.55-2.55A3.5 3.5 0 1 0 4.5 17Zm0-1a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5Z"
      />
    </svg>
  );
}
export default PersonSearchFilled;
