import React, { SVGProps } from "react";

export function CircleImage(props: SVGProps<SVGSVGElement>) {
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
        d="M7.5 3a4.5 4.5 0 0 0-.5 8.973v1.005A5.5 5.5 0 1 1 12.978 7h-1.005A4.5 4.5 0 0 0 7.5 3Zm8.5 8a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-5.5-3A2.5 2.5 0 0 0 8 10.5v5a2.5 2.5 0 0 0 2.5 2.5h5a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 15.5 8h-5ZM9 10.5A1.5 1.5 0 0 1 10.5 9h5a1.5 1.5 0 0 1 1.5 1.5v5c0 .232-.052.45-.146.647l-2.44-2.44a2 2 0 0 0-2.828 0l-2.44 2.44A1.494 1.494 0 0 1 9 15.5v-5Zm.853 6.354l2.44-2.44a1 1 0 0 1 1.414 0l2.44 2.44A1.494 1.494 0 0 1 15.5 17h-5c-.232 0-.45-.052-.647-.146Z"
      />
    </svg>
  );
}
export default CircleImage;
