import React, { SVGProps } from "react";

export function TableDismiss(props: SVGProps<SVGSVGElement>) {
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
        d="M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h4.1a5.465 5.465 0 0 1-.393-1H8v-3h1.207c.099-.349.23-.683.393-1H8V8h4v1.6a5.465 5.465 0 0 1 1-.393V8h3v1.207c.349.099.683.23 1 .393V5.5Zm-13 9V13h3v3H5.5l-.144-.007A1.5 1.5 0 0 1 4 14.5ZM12 4v3H8V4h4Zm1 0h1.5l.145.007A1.5 1.5 0 0 1 16 5.5V7h-3V4ZM7 4v3H4V5.5l.007-.144A1.5 1.5 0 0 1 5.5 4H7Zm0 4v4H4V8h3Zm12 6.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-3.793 0l1.147-1.146a.5.5 0 0 0-.708-.708L14.5 13.793l-1.146-1.147a.5.5 0 0 0-.708.708l1.147 1.146l-1.147 1.146a.5.5 0 0 0 .708.708l1.146-1.147l1.146 1.147a.5.5 0 0 0 .708-.708L15.207 14.5Z"
      />
    </svg>
  );
}
export default TableDismiss;
