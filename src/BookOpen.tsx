import React, { SVGProps } from "react";

export function BookOpen(props: SVGProps<SVGSVGElement>) {
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
        d="M10 16c-.456.607-1.182 1-2 1H3.5A1.5 1.5 0 0 1 2 15.5v-11A1.5 1.5 0 0 1 3.5 3H8c.818 0 1.544.393 2 1c.456-.607 1.182-1 2-1h4.5A1.5 1.5 0 0 1 18 4.5v11a1.5 1.5 0 0 1-1.5 1.5H12a2.496 2.496 0 0 1-2-1ZM3 4.5v11a.5.5 0 0 0 .5.5H8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 8 4H3.5a.5.5 0 0 0-.5.5Zm7.5 10A1.5 1.5 0 0 0 12 16h4.5a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5H12a1.5 1.5 0 0 0-1.5 1.5v9Z"
      />
    </svg>
  );
}
export default BookOpen;
