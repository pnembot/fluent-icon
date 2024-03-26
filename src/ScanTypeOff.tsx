import React, { SVGProps } from "react";

export function ScanTypeOff(props: SVGProps<SVGSVGElement>) {
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
        d="M2.414 3.121A2.49 2.49 0 0 0 2 4.5v2a.5.5 0 0 0 1 0v-2c0-.232.052-.45.146-.647L9.5 10.207V14H9a.5.5 0 1 0 0 1h2a.5.5 0 0 0 0-1h-.5v-2.793l5.516 5.516A1.991 1.991 0 0 1 15 17h-1.5a.5.5 0 1 0 0 1H15a2.98 2.98 0 0 0 1.738-.555l.408.409a.5.5 0 0 0 .708-.708l-.409-.408l-.722-.722L6.032 5.325L3.853 3.146l-.732-.732l-.267-.268a.5.5 0 1 0-.708.708l.268.267ZM18 15c0 .269-.035.53-.102.777L17 14.879V13.5a.5.5 0 1 1 1 0V15Zm-7.5-9v2.379l-1-1V6H8.121l-1-1H13.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V6h-2.5Zm-4-3H5.121l-.975-.975C4.262 2.008 4.38 2 4.5 2h2a.5.5 0 0 1 0 1ZM5 17a2 2 0 0 1-2-2v-1.5a.5.5 0 1 0-1 0V15a3 3 0 0 0 3 3h1.5a.5.5 0 0 0 0-1H5ZM17 4.5A1.5 1.5 0 0 0 15.5 3h-2a.5.5 0 0 1 0-1h2A2.5 2.5 0 0 1 18 4.5v2a.5.5 0 0 1-1 0v-2Z"
      />
    </svg>
  );
}
export default ScanTypeOff;