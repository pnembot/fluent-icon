import React, { SVGProps } from "react";

export function Vault(props: SVGProps<SVGSVGElement>) {
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
        d="M13.723 11.016a1.993 1.993 0 0 0 0-2.032l.63-.63a.5.5 0 0 0-.707-.708l-.63.63A1.991 1.991 0 0 0 12 8c-.37 0-.718.101-1.016.277l-.63-.63a.5.5 0 0 0-.708.707l.63.63A1.991 1.991 0 0 0 10 10c0 .37.101.718.277 1.016l-.63.63a.5.5 0 0 0 .707.708l.63-.63a2 2 0 0 0 2.032-.001l.63.63a.5.5 0 0 0 .708-.707l-.63-.63ZM12 11a1 1 0 1 1 0-2a1 1 0 0 1 0 2ZM6 7.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0v-5ZM2 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7Zm3-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5Z"
      />
    </svg>
  );
}
export default Vault;
