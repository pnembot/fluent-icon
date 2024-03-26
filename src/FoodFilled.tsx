import React, { SVGProps } from "react";

export function FoodFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M9.5 3a.5.5 0 0 1 .492.41L10 3.5v3a2.5 2.5 0 0 1-2 2.45v7.55a.5.5 0 0 1-.992.09L7 16.5V8.95a2.501 2.501 0 0 1-1.994-2.279L5 6.5v-3a.5.5 0 0 1 .992-.09L6 3.5v3a1.5 1.5 0 0 0 1 1.415V3.5a.5.5 0 0 1 .992-.09L8 3.5v4.414c.538-.19.935-.678.993-1.265L9 6.5v-3a.5.5 0 0 1 .5-.5Zm5 0a.5.5 0 0 1 .492.41L15 3.5v13a.5.5 0 0 1-.992.09L14 16.5V11h-1.5a.5.5 0 0 1-.492-.41L12 10.5v-5A2.5 2.5 0 0 1 14.5 3Z"
      />
    </svg>
  );
}
export default FoodFilled;