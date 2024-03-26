import React, { SVGProps } from "react";

export function SaveEdit(props: SVGProps<SVGSVGElement>) {
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
        d="M5 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3.004c.007-.114.025-.23.054-.347L8.221 16H6v-4.5a.5.5 0 0 1 .5-.5h5.444l1-1H6.5A1.5 1.5 0 0 0 5 11.5V16a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h1v2.5A1.5 1.5 0 0 0 7.5 8h4A1.5 1.5 0 0 0 13 6.5V4h.379a1 1 0 0 1 .707.293l1.621 1.621a1 1 0 0 1 .293.707v1.382a2.88 2.88 0 0 1 1 .13V6.622a2 2 0 0 0-.586-1.414l-1.621-1.621A2 2 0 0 0 13.379 3H5Zm2 3.5V4h5v2.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5Zm7.81 3.048l-4.83 4.83a2.197 2.197 0 0 0-.578 1.02l-.375 1.498a.89.89 0 0 0 1.079 1.078l1.498-.374a2.194 2.194 0 0 0 1.02-.578l4.83-4.83a1.87 1.87 0 0 0-2.645-2.644Z"
      />
    </svg>
  );
}
export default SaveEdit;