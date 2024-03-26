import React, { SVGProps } from "react";

export function ArrowSort(props: SVGProps<SVGSVGElement>) {
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
        d="M2.354 7.354L4.998 4.71V16.5a.5.5 0 0 0 1 0V4.705l2.649 2.65a.5.5 0 0 0 .707-.708l-3.49-3.49l-.01-.01A.5.5 0 0 0 5.5 3h-.002a.499.499 0 0 0-.383.179L1.646 6.647a.5.5 0 1 0 .708.707Zm15.293 5.292l-2.644 2.644V3.5a.5.5 0 0 0-1 0v11.795l-2.65-2.65a.5.5 0 0 0-.707.708l3.49 3.49l.01.01a.502.502 0 0 0 .355.147h.002a.5.5 0 0 0 .383-.179l3.468-3.468a.5.5 0 1 0-.707-.707Z"
      />
    </svg>
  );
}
export default ArrowSort;