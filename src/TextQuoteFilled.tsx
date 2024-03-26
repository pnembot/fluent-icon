import React, { SVGProps } from "react";

export function TextQuoteFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M9 6.5a2.5 2.5 0 1 0-1.174 2.12a8.802 8.802 0 0 1-.952 2.764c-.649 1.18-1.476 2.011-2.228 2.762a.5.5 0 0 0 .708.708l.011-.012c.747-.747 1.664-1.664 2.386-2.976C8.48 10.538 9 8.83 9 6.5Zm5.826 2.12A2.5 2.5 0 1 1 16 6.5c0 2.33-.52 4.038-1.25 5.366c-.721 1.312-1.638 2.23-2.384 2.976l-.012.012a.5.5 0 0 1-.708-.708c.752-.751 1.579-1.581 2.228-2.762a8.8 8.8 0 0 0 .952-2.765Z"
      />
    </svg>
  );
}
export default TextQuoteFilled;
