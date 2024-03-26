import React, { SVGProps } from "react";

export function NoteAddFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M10 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V5H3.5a.5.5 0 0 0 0 1H5v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H6V3.5ZM5.5 11a5.5 5.5 0 0 0 4.9-8H14a3 3 0 0 1 2.995 2.824L17 6v4h-4l-.176.005a3 3 0 0 0-2.819 2.819L10 13v4H6a3 3 0 0 1-2.995-2.824L3 14v-3.6c.75.384 1.6.6 2.5.6Zm11.4.001a2 2 0 0 1-.358.652l-.128.14l-4.621 4.621c-.224.224-.496.39-.792.487L11 13l.005-.15a2 2 0 0 1 1.838-1.844L13 11l3.9.001Z"
      />
    </svg>
  );
}
export default NoteAddFilled;
