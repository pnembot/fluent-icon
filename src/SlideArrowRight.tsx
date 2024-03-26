import React, { SVGProps } from "react";

export function SlideArrowRight(props: SVGProps<SVGSVGElement>) {
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
        d="M5.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm0 2.5a.5.5 0 0 0 0 1h5.225a5.51 5.51 0 0 1 1.48-1H5.5Zm0 2.5h4.1a5.465 5.465 0 0 0-.393 1H5.5a.5.5 0 0 1 0-1Zm-1 3h4.522a5.5 5.5 0 0 0 .185 1H4.5A2.5 2.5 0 0 1 2 13.5v-7A2.5 2.5 0 0 1 4.5 4h11A2.5 2.5 0 0 1 18 6.5v3.757a5.503 5.503 0 0 0-1-.657V6.5A1.5 1.5 0 0 0 15.5 5h-11A1.5 1.5 0 0 0 3 6.5v7A1.5 1.5 0 0 0 4.5 15Zm14.5-.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.147.354l.003-.003a.499.499 0 0 0 .144-.348v-.006a.5.5 0 0 0-.146-.35l-2-2a.5.5 0 0 0-.708.707L15.293 14H12.5a.5.5 0 0 0 0 1h2.793l-1.147 1.146a.5.5 0 0 0 .708.708l2-2Z"
      />
    </svg>
  );
}
export default SlideArrowRight;
