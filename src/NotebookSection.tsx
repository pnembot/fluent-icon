import React, { SVGProps } from "react";

export function NotebookSection(props: SVGProps<SVGSVGElement>) {
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
        d="M14 2.5a.5.5 0 0 0-1 0V3H8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h5v.5a.5.5 0 0 0 1 0v-15ZM13 16H8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v12Z"
      />
    </svg>
  );
}
export default NotebookSection;