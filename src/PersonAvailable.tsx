import React, { SVGProps } from "react";

export function PersonAvailable(props: SVGProps<SVGSVGElement>) {
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
        d="M5 6a4 4 0 1 1 8 0a4 4 0 0 1-8 0Zm4-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6ZM2 13c0-1.113.903-2 2.009-2h6.248a5.503 5.503 0 0 0-.657 1H4.009C3.448 12 3 12.447 3 13c0 1.309.622 2.284 1.673 2.953C5.743 16.636 7.265 17 9 17c.2 0 .398-.005.592-.015c.173.342.381.662.618.958c-.395.038-.8.057-1.21.057c-1.855 0-3.583-.386-4.865-1.203C2.833 15.967 2 14.69 2 13Zm17 1.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.146-1.854a.5.5 0 0 0-.708 0L13.5 15.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708Z"
      />
    </svg>
  );
}
export default PersonAvailable;
