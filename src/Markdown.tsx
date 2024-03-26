import React, { SVGProps } from "react";

export function Markdown(props: SVGProps<SVGSVGElement>) {
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
        d="M16 4.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L16 13.293V4.5ZM2.32 4.033a.5.5 0 0 1 .552.133L7 8.753l4.128-4.587A.5.5 0 0 1 12 4.5v10a.5.5 0 1 1-1 0V5.803L7.372 9.835a.5.5 0 0 1-.744 0L3 5.803V14.5a.5.5 0 1 1-1 0v-10a.5.5 0 0 1 .32-.467Z"
      />
    </svg>
  );
}
export default Markdown;
