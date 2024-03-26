import React, { SVGProps } from "react";

export function ConnectedFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M7 4.5c0 .51-.152.983-.414 1.379L8.62 7.914A2.49 2.49 0 0 1 9.999 7.5c.51 0 .983.152 1.379.414l2.035-2.035a2.5 2.5 0 1 1 .707.707L12.086 8.62c.262.396.414.87.414 1.379c0 .51-.152.983-.414 1.379l2.035 2.035a2.5 2.5 0 1 1-.707.707l-2.035-2.035a2.49 2.49 0 0 1-1.379.414c-.51 0-.983-.152-1.379-.414L6.586 14.12a2.5 2.5 0 1 1-.707-.707l2.035-2.035A2.488 2.488 0 0 1 7.5 10c0-.51.152-.983.414-1.379L5.88 6.586A2.5 2.5 0 1 1 7 4.5Z"
      />
    </svg>
  );
}
export default ConnectedFilled;