import React, { SVGProps } from "react";

export function PictureInPictureExit(props: SVGProps<SVGSVGElement>) {
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
        d="M8.5 9A1.5 1.5 0 0 0 10 7.5v-4A1.5 1.5 0 0 0 8.5 2h-6A1.5 1.5 0 0 0 1 3.5v4a1.5 1.5 0 0 0 1 1.415l.019.006c.15.051.313.079.481.079h6Zm6.75-3H11V5h4.25A2.75 2.75 0 0 1 18 7.75v6.5A2.75 2.75 0 0 1 15.25 17H4.75A2.75 2.75 0 0 1 2 14.25v-4.3c.162.033.329.05.5.05H3v4.25c0 .966.784 1.75 1.75 1.75h10.5A1.75 1.75 0 0 0 17 14.25v-6.5A1.75 1.75 0 0 0 15.25 6ZM14 12.293l-2.646-2.647a.5.5 0 0 0-.708.708L13.293 13H11.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.497V10.5a.5.5 0 0 0-1 0v1.793Z"
      />
    </svg>
  );
}
export default PictureInPictureExit;
