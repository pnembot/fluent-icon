import React, { SVGProps } from "react";

export function RewardFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M15.526 3a1.5 1.5 0 0 1 1.5 1.5v1.394a2.5 2.5 0 0 1-1.362 2.227l-4.19 2.14a3.54 3.54 0 1 1-2.922 0L4.363 8.12a2.5 2.5 0 0 1-1.356-2.04L3 5.894V4.5A1.5 1.5 0 0 1 4.5 3h11.026Zm-5.513 7.945a2.539 2.539 0 1 0 0 5.078a2.539 2.539 0 0 0 0-5.078ZM12.616 4h-5.21v4.553l2.38 1.216a.5.5 0 0 0 .455 0l2.375-1.214V3.999Z"
      />
    </svg>
  );
}
export default RewardFilled;
