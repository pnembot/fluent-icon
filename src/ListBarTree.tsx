import React, { SVGProps } from "react";

export function ListBarTree(props: SVGProps<SVGSVGElement>) {
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
        d="M5 3a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h.268A1.99 1.99 0 0 0 5 9v2c0 .597.262 1.133.677 1.5A1.995 1.995 0 0 0 5 14v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1c0-.597-.262-1.133-.677-1.5c.415-.367.677-.903.677-1.5V9c0-.597-.262-1.134-.677-1.5c.415-.366.677-.903.677-1.5V5a2 2 0 0 0-2-2H5Zm10 9h-5V8h5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1ZM9 8v4H7a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2Zm1 5h5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-5v-3Zm-1 0v3H7a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h2ZM8 7V4h7a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H8ZM7 7H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h2v3Z"
      />
    </svg>
  );
}
export default ListBarTree;