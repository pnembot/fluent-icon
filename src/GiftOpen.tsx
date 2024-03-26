import React, { SVGProps } from "react";

export function GiftOpen(props: SVGProps<SVGSVGElement>) {
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
        d="M13.5 4.25a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5ZM5 10.5a.5.5 0 0 0-.757-.429l-2.5 1.5a.5.5 0 1 0 .514.858L4 11.383V15.5A2.5 2.5 0 0 0 6.5 18h7a2.5 2.5 0 0 0 2.5-2.5v-4.117l1.743 1.046a.5.5 0 0 0 .514-.858l-2.5-1.5A.5.5 0 0 0 15 10.5v5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 5 15.5v-5ZM16.5 5a.5.5 0 0 1 .5.5V6h.5a.5.5 0 0 1 0 1H17v.5a.5.5 0 0 1-1 0V7h-.5a.5.5 0 1 1 0-1h.5v-.5a.5.5 0 0 1 .5-.5Zm-7 0a3 3 0 0 0-3 3A2.5 2.5 0 0 0 9 10.5a2 2 0 0 0 2-2A1.5 1.5 0 0 0 9.5 7a1 1 0 0 0-1 1a.5.5 0 0 0 1 0a.5.5 0 0 1 .5.5a1 1 0 0 1-1 1A1.5 1.5 0 0 1 7.5 8a2 2 0 0 1 2-2A2.5 2.5 0 0 1 12 8.5a3 3 0 0 1-3 3a.5.5 0 0 0 0 1a4 4 0 0 0 4-4A3.5 3.5 0 0 0 9.5 5Z"
      />
    </svg>
  );
}
export default GiftOpen;
