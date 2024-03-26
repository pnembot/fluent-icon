import React, { SVGProps } from "react";

export function SyringeFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M14.146 2.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-.396-.397l-1.793 1.793l1.897 1.896a.5.5 0 0 1-.708.708L15 8.707l-5.56 5.56A2.5 2.5 0 0 1 7.671 15H5.707l-2.853 2.854a.5.5 0 0 1-.708-.708L5 14.293v-1.965a2.5 2.5 0 0 1 .732-1.767l.56-.561l.854.854a.5.5 0 0 0 .708-.708L7 9.293l.793-.793l.853.854a.5.5 0 1 0 .708-.708L8.5 7.793L9.293 7l.853.854a.5.5 0 0 0 .708-.708L10 6.293L11.293 5l-1.147-1.146a.5.5 0 0 1 .708-.708l1.896 1.897l1.793-1.793l-.397-.396a.5.5 0 0 1 0-.708Zm1.897 2.604l-.793-.793l-1.793 1.793l.793.793l1.793-1.793Z"
      />
    </svg>
  );
}
export default SyringeFilled;
