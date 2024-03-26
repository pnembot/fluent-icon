import React, { SVGProps } from "react";

export function PageFitFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M4 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm1.5 2h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 1-1 0v-1A1.5 1.5 0 0 1 5.5 6Zm8 0h1A1.5 1.5 0 0 1 16 7.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 1 0-1ZM5 11.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 1 0 1h-1A1.5 1.5 0 0 1 4 12.5v-1a.5.5 0 0 1 1 0Zm11 0v1a1.5 1.5 0 0 1-1.5 1.5h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 1 1 0Z"
      />
    </svg>
  );
}
export default PageFitFilled;
