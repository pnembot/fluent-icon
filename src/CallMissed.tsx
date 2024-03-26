import React, { SVGProps } from "react";

export function CallMissed(props: SVGProps<SVGSVGElement>) {
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
        d="M10 2c3.332-.004 5.586 1.276 7.154 2.66c.66.582.962 1.458.805 2.28l-.157.83c-.148.776-.875 1.298-1.698 1.218l-1.637-.158c-.714-.069-1.243-.59-1.467-1.33c-.304-1.005-.5-1.75-.5-1.75a6.188 6.188 0 0 0-2.5-.5c-1.014 0-1.738.215-2.5.5c0 0-.204.746-.5 1.75c-.198.671-.504 1.257-1.203 1.327L4.17 8.99a1.735 1.735 0 0 1-1.822-1.21L2.1 6.952a2.255 2.255 0 0 1 .577-2.28C4.101 3.287 6.673 2.003 10 2Zm3.475 3.527l.026.095l.098.358c.086.306.208.736.358 1.23c.137.45.39.604.606.625l1.637.158c.346.033.575-.177.62-.41l.157-.83a1.454 1.454 0 0 0-.485-1.344C15.067 4.152 13.04 2.996 10.002 3c-3.076.004-5.396 1.192-6.629 2.39a1.255 1.255 0 0 0-.316 1.277l.248.829c.091.306.42.534.764.5l1.628-.164c.039-.004.052-.012.054-.013a.194.194 0 0 0 .05-.05c.07-.088.153-.256.24-.551A115.595 115.595 0 0 0 6.5 5.615l.027-.097c.102-.367.458-.622.623-.705c.819-.306 1.67-.563 2.85-.563a7.19 7.19 0 0 1 2.88.575c.151.062.482.284.587.671l.002.007l.006.024ZM10 12a.5.5 0 0 0-1 0v2a.5.5 0 0 0 .5.5h1.505a.5.5 0 1 0 0-1H10V12Zm-4.5 1.5a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0ZM10 10a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7Z"
      />
    </svg>
  );
}
export default CallMissed;
