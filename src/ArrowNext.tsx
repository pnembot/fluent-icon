import React, { SVGProps } from "react";

export function ArrowNext(props: SVGProps<SVGSVGElement>) {
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
        d="M13.5 5a.5.5 0 0 1 .492.41L14 5.5v9a.5.5 0 0 1-.992.09L13 14.5v-9a.5.5 0 0 1 .5-.5Zm-7.854.146a.5.5 0 0 1 .638-.057l.07.057l4.5 4.5a.5.5 0 0 1 .057.638l-.057.07l-4.5 4.5a.5.5 0 0 1-.765-.638l.057-.07L9.793 10L5.646 5.854a.5.5 0 0 1 0-.708Z"
      />
    </svg>
  );
}
export default ArrowNext;
