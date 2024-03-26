import React, { SVGProps } from "react";

export function InprivateAccount(props: SVGProps<SVGSVGElement>) {
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
        d="M6 6a4 4 0 0 1 7.123-2.5H10V3a3 3 0 0 0 0 6v-.5h3.123A4 4 0 0 1 6 6Zm7.71 1.5H10v-1h3.97c-.045.35-.133.685-.26 1Zm.26-2a3.973 3.973 0 0 0-.26-1H10v1h3.97ZM3 13c0-1.113.903-2 2.009-2H15a2 2 0 0 1 1.73.995H10V12H5.009C4.448 12 4 12.447 4 13c0 1.309.622 2.284 1.673 2.953C6.743 16.636 8.265 17 10 17h4.52c-1.238.678-2.826 1-4.52 1c-1.855 0-3.583-.386-4.865-1.203C3.833 15.967 3 14.69 3 13Zm7 .995v-1h7V13c0 .35-.036.681-.104.995H10Zm6.544 1A4.272 4.272 0 0 1 15.836 16h-1.583l.007-.005H10v-1h6.544Z"
      />
    </svg>
  );
}
export default InprivateAccount;
