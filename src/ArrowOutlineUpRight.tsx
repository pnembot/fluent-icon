import React, { SVGProps } from "react";

export function ArrowOutlineUpRight(props: SVGProps<SVGSVGElement>) {
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
        d="M16.997 3.555a.5.5 0 0 0-.553-.552L6.741 4.081a.5.5 0 0 0-.299.85l1.421 1.421a.5.5 0 0 1 0 .708l-4.717 4.716a.5.5 0 0 0 0 .707l4.37 4.37a.5.5 0 0 0 .707 0l4.717-4.717a.5.5 0 0 1 .707 0l1.42 1.421a.5.5 0 0 0 .851-.298l1.079-9.704Zm-.663-1.546a1.5 1.5 0 0 1 1.656 1.657l-1.078 9.703c-.139 1.25-1.662 1.784-2.551.895l-1.068-1.067L8.93 17.56a1.5 1.5 0 0 1-2.12 0l-4.37-4.37a1.5 1.5 0 0 1 0-2.121l4.362-4.363l-1.067-1.067c-.889-.89-.355-2.413.895-2.551l9.704-1.079Z"
      />
    </svg>
  );
}
export default ArrowOutlineUpRight;
