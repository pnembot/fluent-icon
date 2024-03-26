import React, { SVGProps } from "react";

export function Guardian(props: SVGProps<SVGSVGElement>) {
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
        d="M6.5 7a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5Zm0-1a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3Zm0 11.618A1.5 1.5 0 0 1 4 16.5v-3.053a1.5 1.5 0 0 1-2-1.415V10.5A2.5 2.5 0 0 1 4.5 8h4c.818 0 1.544.393 2 1h5a2.5 2.5 0 0 1 2.5 2.5v1a1.5 1.5 0 0 1-2 1.415V16.5a1.5 1.5 0 0 1-2.5 1.118A1.5 1.5 0 0 1 11 16.5v-4.465a1.5 1.5 0 0 1-2 1.412V16.5a1.5 1.5 0 0 1-2.5 1.118ZM3 10.5v1.532a.5.5 0 0 0 1 0V10.5a.5.5 0 0 1 1 0v6a.5.5 0 0 0 1 0v-3a.5.5 0 0 1 1 0v3a.5.5 0 0 0 1 0v-6a.5.5 0 0 1 1 0v1.532a.5.5 0 0 0 1 0V10.5A1.5 1.5 0 0 0 8.5 9h-4A1.5 1.5 0 0 0 3 10.5Zm7.95-.5c.033.162.05.329.05.5v.5h1v5.5a.5.5 0 0 0 1 0v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 0 1 0v-5a.5.5 0 0 1 1 0v1a.5.5 0 0 0 1 0v-1a1.5 1.5 0 0 0-1.5-1.5h-4.55ZM16 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm-1 0a1 1 0 1 0-2 0a1 1 0 0 0 2 0Z"
      />
    </svg>
  );
}
export default Guardian;