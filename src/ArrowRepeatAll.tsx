import React, { SVGProps } from "react";

export function ArrowRepeatAll(props: SVGProps<SVGSVGElement>) {
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
        d="M16.5 6.671c.116 0 .223.04.308.107l.067.063l.017.02a5 5 0 0 1-3.675 8.135L13 15H7a5.07 5.07 0 0 1-.303-.009l1.657 1.655a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.638.057l-.07-.057l-2.5-2.5a.5.5 0 0 1-.057-.638l.057-.07l2.5-2.5a.5.5 0 0 1 .765.638l-.057.07l-1.637 1.636l.14.008L7 14h6a4 4 0 0 0 3.11-6.516a.5.5 0 0 1 .39-.812Zm-4.854-4.025a.5.5 0 0 1 .638-.057l.07.057l2.5 2.5l.057.07a.5.5 0 0 1 0 .568l-.057.07l-2.5 2.5l-.07.057a.5.5 0 0 1-.568 0l-.07-.057l-.057-.07a.5.5 0 0 1 0-.568l.057-.07l1.637-1.636l-.14-.008L13 6H7a4 4 0 0 0-3.105 6.522a.5.5 0 1 1-.801.601a5 5 0 0 1 3.689-8.119L7 5h6c.102 0 .203.003.303.009l-1.657-1.655l-.057-.07a.5.5 0 0 1 .057-.638Z"
      />
    </svg>
  );
}
export default ArrowRepeatAll;
