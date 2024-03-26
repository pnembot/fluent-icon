import React, { SVGProps } from "react";

export function TableEdit(props: SVGProps<SVGSVGElement>) {
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
        d="M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h3.721l.212-.846c.012-.052.027-.103.042-.154H8v-3h3.942L13 11.942V8h3v1.231c.32-.137.659-.213 1-.229V5.5Zm-13 9V13h3v3H5.5l-.144-.007A1.5 1.5 0 0 1 4 14.5ZM12 8v4H8V8h4Zm0-1H8V4h4v3Zm1-3h1.5l.145.007A1.5 1.5 0 0 1 16 5.5V7h-3V4ZM4 7V5.5l.007-.144A1.5 1.5 0 0 1 5.5 4H7v3H4Zm3 1v4H4V8h3Zm8.809 2.547l-4.83 4.829a2.197 2.197 0 0 0-.577 1.02l-.375 1.498a.89.89 0 0 0 1.079 1.079l1.498-.375a2.197 2.197 0 0 0 1.02-.578l4.83-4.829a1.87 1.87 0 0 0-2.646-2.644Zm-1.16 6.449l2.347-2.346Z"
      />
    </svg>
  );
}
export default TableEdit;
