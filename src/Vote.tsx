import React, { SVGProps } from "react";

export function Vote(props: SVGProps<SVGSVGElement>) {
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
        d="M12.232 9H13.5a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h.757a1 1 0 0 1-.123-1.17l2.5-4.33A1 1 0 0 1 11 3.134l2.598 1.5A1 1 0 0 1 13.964 6l-1.732 3Zm.866-3.5L10.5 4L8 8.33L9.16 9h1.918l2.02-3.5ZM13.96 8l.577-1a1 1 0 0 1 .763.4l2.5 3.333a1 1 0 0 1 .2.6V16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-4.667a1 1 0 0 1 .2-.6L4.7 7.4a1 1 0 0 1 .8-.4h.963l-.479.83a1.006 1.006 0 0 0-.078.17H5.5l-2.25 3h13.5L14.5 8h-.54ZM3 16h14v-4H3v4Z"
      />
    </svg>
  );
}
export default Vote;