import React, { SVGProps } from "react";

export function GiftCardAdd(props: SVGProps<SVGSVGElement>) {
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
        d="M2 4.75A2.75 2.75 0 0 1 4.75 2h10.5A2.75 2.75 0 0 1 18 4.75v5.507a5.503 5.503 0 0 0-1-.657V8H8.707l1.647 1.646a.5.5 0 0 1-.708.708L8 8.707V13h1.207a5.48 5.48 0 0 0-.185 1H4.75A2.75 2.75 0 0 1 2 11.25v-6.5ZM4.75 3A1.75 1.75 0 0 0 3 4.75V7h1.268A2 2 0 0 1 7 4.268V3H4.75ZM8 3v1.268A2 2 0 0 1 10.732 7H17V4.75A1.75 1.75 0 0 0 15.25 3H8Zm0 4h1a1 1 0 1 0-1-1v1ZM6 5a1 1 0 0 0 0 2h1V6a1 1 0 0 0-1-1Zm-3 6.25c0 .966.784 1.75 1.75 1.75H7V8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L6.293 8H3v3.25Zm16 3.25a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"
      />
    </svg>
  );
}
export default GiftCardAdd;
