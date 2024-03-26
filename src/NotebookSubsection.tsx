import React, { SVGProps } from "react";

export function NotebookSubsection(props: SVGProps<SVGSVGElement>) {
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
        d="M4 5.5A3.5 3.5 0 0 1 7.5 2H10c.818 0 1.544.393 2 1H7.5A2.5 2.5 0 0 0 5 5.5V15a2.496 2.496 0 0 1-1-2V5.5Zm9.432-3.495L13.5 2c.253 0 .462.226.495.519L14 2.6v14.8c0 .331-.224.6-.5.6c-.253 0-.462-.226-.495-.519L13 17.4V17H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5V2.6c0-.304.188-.555.432-.595ZM8 5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h5V5H8Z"
      />
    </svg>
  );
}
export default NotebookSubsection;
