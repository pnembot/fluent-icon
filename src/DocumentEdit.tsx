import React, { SVGProps } from "react";

export function DocumentEdit(props: SVGProps<SVGSVGElement>) {
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
        d="M11.5 8H16v-.586a1.496 1.496 0 0 0-.057-.41L15.942 7a1.5 1.5 0 0 0-.381-.646l-3.915-3.915A1.5 1.5 0 0 0 10.586 2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2.221l-.013-.026A1.856 1.856 0 0 1 8.003 17H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4v3.5A1.5 1.5 0 0 0 11.5 8Zm0-1a.5.5 0 0 1-.5-.5V3.207L14.793 7H11.5Zm3.31 2.548a1.87 1.87 0 1 1 2.644 2.645l-4.83 4.829a2.197 2.197 0 0 1-1.02.578l-1.498.374a.89.89 0 0 1-1.079-1.078l.375-1.498a2.18 2.18 0 0 1 .578-1.02l4.83-4.83Z"
      />
    </svg>
  );
}
export default DocumentEdit;