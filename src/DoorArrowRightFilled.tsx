import React, { SVGProps } from "react";

export function DoorArrowRightFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M6 2.5A1.5 1.5 0 0 0 4.5 4v12A1.5 1.5 0 0 0 6 17.5h3.89a5.5 5.5 0 0 1 5.61-8.41V4A1.5 1.5 0 0 0 14 2.5H6ZM8 10a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm6.5 9a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm.354-2.146a.5.5 0 0 1-.708-.708L15.293 15H12.5a.5.5 0 0 1 0-1h2.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 .146.351v.006a.5.5 0 0 1-.144.348l-.003.003l-2 2Z"
      />
    </svg>
  );
}
export default DoorArrowRightFilled;
