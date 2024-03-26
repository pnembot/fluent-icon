import React, { SVGProps } from "react";

export function Cut(props: SVGProps<SVGSVGElement>) {
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
        d="M5.92 2.228a.5.5 0 0 0-.84.544L9.405 9.43L7.48 12.39a3 3 0 1 0 .779.636L10 10.348l1.74 2.68a3 3 0 1 0 .779-.636L5.92 2.227ZM14 17a2 2 0 1 1 0-4a2 2 0 0 1 0 4ZM4 15a2 2 0 1 1 4 0a2 2 0 0 1-4 0Zm7.192-6.489l-.596-.918l3.485-5.365a.5.5 0 0 1 .838.544l-3.727 5.74Z"
      />
    </svg>
  );
}
export default Cut;
