import React, { SVGProps } from "react";

export function PersonRunningFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M11.5 4.5a2 2 0 1 1 2.612 1.905L15.707 8H17.5a1.5 1.5 0 0 1 0 3h-3.223c-.63 0-1.234-.25-1.68-.696l-.097-.097l-1.043 1.043l1.397 1.396A.5.5 0 0 1 13 13v3.5a1.5 1.5 0 0 1-3 0v-1.793L8.453 13.16l-1.002.752a2.942 2.942 0 0 1-1.765.588H2.5a1.5 1.5 0 0 1 0-3h4.25A2.25 2.25 0 0 0 9 9.25V8h1a.5.5 0 0 0 0-1H8.5a.5.5 0 0 0-.5.5v1.75a1.25 1.25 0 1 1-2.5 0V7A2.5 2.5 0 0 1 8 4.5h3.5Z"
      />
    </svg>
  );
}
export default PersonRunningFilled;
