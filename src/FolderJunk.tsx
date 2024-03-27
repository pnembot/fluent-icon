import React, { SVGProps } from "react";

export function FolderJunk(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        d="M2 5.5A2.5 2.5 0 0 1 4.5 3h2.667c.324 0 .64.105.9.3l1.6 1.2H15.5A2.5 2.5 0 0 1 18 7v3.257a5.503 5.503 0 0 0-1-.657V7a1.5 1.5 0 0 0-1.5-1.5H9.62L8.157 7.034A1.5 1.5 0 0 1 7.07 7.5H3v7A1.5 1.5 0 0 0 4.5 16h4.707c.099.349.23.683.393 1H4.5A2.5 2.5 0 0 1 2 14.5v-9zM4.5 4A1.5 1.5 0 0 0 3 5.5v1h4.071a.5.5 0 0 0 .363-.155l1.26-1.324L7.467 4.1a.5.5 0 0 0-.3-.1H4.5zm10 7a3.5 3.5 0 0 0-2.803 5.596l4.9-4.9A3.484 3.484 0 0 0 14.5 11zm2.803 1.404l-4.9 4.9a3.5 3.5 0 0 0 4.9-4.9zM10 14.5a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}
export default FolderJunk;
