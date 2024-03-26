import React, { SVGProps } from "react";

export function DualScreenVibrate(props: SVGProps<SVGSVGElement>) {
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
        d="M7 5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7ZM6 7a1 1 0 0 1 1-1h2.5v8H7a1 1 0 0 1-1-1V7Zm4.5 7V6H13a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2.5Zm1-1.5a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5Zm-4-.5a.5.5 0 0 0 0 1H8a.5.5 0 0 0 0-1h-.5ZM1.877 6.515a.5.5 0 0 1 .606.364l.41 1.64a1.5 1.5 0 0 1-.113 1.035l-.611 1.222a.5.5 0 0 0 0 .448l.776 1.552a.5.5 0 1 1-.894.448l-.776-1.553a1.5 1.5 0 0 1 0-1.342l.61-1.222a.5.5 0 0 0 .038-.345l-.41-1.64a.5.5 0 0 1 .364-.607Zm16.606.364a.5.5 0 0 0-.97.242l.41 1.641a.5.5 0 0 1-.037.345l-.611 1.222a1.5 1.5 0 0 0 0 1.342l.776 1.553a.5.5 0 1 0 .894-.448l-.776-1.552a.5.5 0 0 1 0-.448l.61-1.222c.161-.32.201-.687.114-1.034l-.41-1.641Z"
      />
    </svg>
  );
}
export default DualScreenVibrate;
