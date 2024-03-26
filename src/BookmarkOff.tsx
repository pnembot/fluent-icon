import React, { SVGProps } from "react";

export function BookmarkOff(props: SVGProps<SVGSVGElement>) {
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
        d="M4 4.707L2.146 2.854a.5.5 0 1 1 .708-.708l15 15a.5.5 0 0 1-.708.708L16 16.707v.793a.5.5 0 0 1-.794.404L10 14.118l-5.206 3.786A.5.5 0 0 1 4 17.5V4.707Zm11 11l-10-10v10.811l4.706-3.422a.5.5 0 0 1 .588 0L15 16.518v-.811ZM15 4.5v8.379l1 1V4.5A2.5 2.5 0 0 0 13.5 2h-7c-.66 0-1.26.255-1.706.673l.708.707c.265-.236.615-.38.998-.38h7A1.5 1.5 0 0 1 15 4.5Z"
      />
    </svg>
  );
}
export default BookmarkOff;
