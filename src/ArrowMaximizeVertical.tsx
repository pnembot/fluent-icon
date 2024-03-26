import React, { SVGProps } from "react";

export function ArrowMaximizeVertical(props: SVGProps<SVGSVGElement>) {
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
        d="M9.646 1.404a.5.5 0 0 1 .708 0l2.12 2.122a.5.5 0 0 1-.706.707L10.5 2.965V7.5a.5.5 0 0 1-1 0V2.965L8.232 4.233a.5.5 0 1 1-.707-.707l2.121-2.122ZM4 10a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 4 10Zm6.5 7.036V12.5a.5.5 0 0 0-1 0v4.536l-1.268-1.268a.5.5 0 1 0-.707.707l2.121 2.122a.5.5 0 0 0 .708 0l2.12-2.122a.5.5 0 0 0-.706-.707L10.5 17.036Z"
      />
    </svg>
  );
}
export default ArrowMaximizeVertical;
