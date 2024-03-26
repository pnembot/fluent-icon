import React, { SVGProps } from "react";

export function TableResizeRowFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M17 14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3h4.382l.057.06l1.5 1.5a1.5 1.5 0 0 0 2.122 0l1.5-1.5l.057-.06H17Zm0-1h-4c0-.384-.146-.768-.44-1.06a1.495 1.495 0 0 0-1.06-.44v-3c.384 0 .768-.146 1.06-.44c.294-.292.44-.676.44-1.06h4v6ZM7.44 8.06A1.495 1.495 0 0 1 7 7H3v6h4c0-.384.146-.768.44-1.06c.292-.293.676-.44 1.06-.44v-3c-.384 0-.768-.146-1.06-.44ZM3 6h4.382l.057-.06l1.5-1.5a1.5 1.5 0 0 1 2.122 0l1.5 1.5l.057.06H17a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3Zm8.854 1.354a.5.5 0 0 1-.708 0l-.646-.647v6.586l.646-.647a.5.5 0 0 1 .708.708l-1.5 1.5a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708l.646.647V6.707l-.646.647a.5.5 0 1 1-.708-.708l1.5-1.5a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 0 1 0 .708Z"
      />
    </svg>
  );
}
export default TableResizeRowFilled;
