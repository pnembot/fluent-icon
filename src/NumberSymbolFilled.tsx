import React, { SVGProps } from "react";

export function NumberSymbolFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M8.99 2.877a.75.75 0 0 0-1.48-.254l-.667 3.88l-3.093.001a.75.75 0 0 0 0 1.5l2.835-.001l-.688 3.996L2.75 12a.75.75 0 0 0 0 1.5h2.89l-.624 3.624a.75.75 0 1 0 1.478.254l.668-3.879l4.477-.002l-.625 3.627a.75.75 0 1 0 1.479.255l.668-3.883l3.094-.001a.75.75 0 0 0 0-1.5l-2.835.001L14.107 8l3.143-.001a.75.75 0 1 0 0-1.5l-2.885.001l.624-3.622a.75.75 0 0 0-1.478-.254L12.843 6.5l-4.478.002l.624-3.625Zm-.883 5.125L12.585 8l-.689 3.996l-4.477.002l.688-3.996Z"
      />
    </svg>
  );
}
export default NumberSymbolFilled;
