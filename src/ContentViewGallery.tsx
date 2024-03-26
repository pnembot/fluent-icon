import React, { SVGProps } from "react";

export function ContentViewGallery(props: SVGProps<SVGSVGElement>) {
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
        d="M6 6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H6Zm0 1h3v2H6V7Zm-1 4.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm.5 1.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4ZM3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm8 10V4H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5Zm3 0a2 2 0 0 0 2-2v-1h-4v3h2Zm2-9V6a2 2 0 0 0-2-2h-2v3h4Zm0 5V8h-4v4h4Z"
      />
    </svg>
  );
}
export default ContentViewGallery;
