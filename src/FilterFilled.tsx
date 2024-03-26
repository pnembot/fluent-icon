import React, { SVGProps } from "react";

export function FilterFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M12.25 13.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5h4.5Zm2-4.25a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5h8.5Zm2-4.25a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5h12.5Z"
      />
    </svg>
  );
}
export default FilterFilled;
