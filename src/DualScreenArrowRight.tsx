import React, { SVGProps } from "react";

export function DualScreenArrowRight(props: SVGProps<SVGSVGElement>) {
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
        d="M14.5 1a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9Zm2.353 4.854l.003-.003A.5.5 0 0 0 17 5.503v-.006a.5.5 0 0 0-.146-.35l-2-2a.5.5 0 0 0-.708.707L15.293 5H12.5a.5.5 0 0 0 0 1h2.793l-1.147 1.146a.5.5 0 0 0 .708.708l2-2ZM17 16v-5.6a5.507 5.507 0 0 0 1-.657V16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5.022a5.5 5.5 0 0 0 .185 1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5V7.794a5.51 5.51 0 0 0 1 1.48V17H16a1 1 0 0 0 1-1Zm-11-.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm6.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z"
      />
    </svg>
  );
}
export default DualScreenArrowRight;
