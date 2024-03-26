import React, { SVGProps } from "react";

export function TagLock(props: SVGProps<SVGSVGElement>) {
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
        d="M14 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm-2.87-5a2 2 0 0 0-1.426.584L3.022 9.249a2 2 0 0 0-.002 2.83l4.949 4.948a2 2 0 0 0 2.031.489V16.4a1 1 0 0 1-1.324-.08l-4.949-4.948a1 1 0 0 1 .001-1.415l6.682-6.665A1 1 0 0 1 11.123 3l4.89.032a1 1 0 0 1 .993.999l.008 4.95a1 1 0 0 1-.293.708l-.145.145c.244.234.448.508.602.812l.25-.25a2 2 0 0 0 .586-1.417l-.008-4.95a2 2 0 0 0-1.986-1.997L11.13 2Zm1.37 10v1H12a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-1a2 2 0 1 0-4 0Zm1 1v-1a1 1 0 1 1 2 0v1h-2Zm1 2.25a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5Z"
      />
    </svg>
  );
}
export default TagLock;
