import React, { SVGProps } from "react";

export function Gift(props: SVGProps<SVGSVGElement>) {
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
        d="M12 2a2.5 2.5 0 0 1 2 4.001L16 6a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 4 15.5V11a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1l2 .001a2.5 2.5 0 1 1 4-3A2.49 2.49 0 0 1 12 2Zm-2.5 9H5v4.5A1.5 1.5 0 0 0 6.5 17h3v-6Zm5.5 0h-4.5v6h3a1.5 1.5 0 0 0 1.5-1.5V11ZM9.5 7H4v3h5.5V7ZM16 7h-5.5v3H16V7Zm-4-4a1.5 1.5 0 0 0-1.5 1.5V6H12a1.5 1.5 0 0 0 0-3ZM8 3a1.5 1.5 0 0 0-.144 2.993L8 6h1.5V4.5l-.007-.144A1.5 1.5 0 0 0 8 3Z"
      />
    </svg>
  );
}
export default Gift;