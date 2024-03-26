import React, { SVGProps } from "react";

export function CollectionsFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M15.5 7a2.5 2.5 0 0 1 2.495 2.335l.006.164v6a2.5 2.5 0 0 1-2.336 2.495l-.164.005h-6a2.5 2.5 0 0 1-2.495-2.336l-.005-.164v-6a2.5 2.5 0 0 1 2.336-2.495L9.5 7h6Zm-2.999 2a.5.5 0 0 0-.492.41l-.008.09V12H9.5l-.09.007a.5.5 0 0 0 0 .984l.09.008H12v2.5l.008.09a.5.5 0 0 0 .984 0L13 15.5V13h2.5l.09-.008a.5.5 0 0 0 0-.984L15.5 12H13V9.5l-.008-.09A.5.5 0 0 0 12.5 9Zm.162-5.306l.048.158l.575 2.147H9.001a3 3 0 0 0-2.995 2.824l-.005.176v5.348a2.502 2.502 0 0 1-2.31-1.683l-.052-.17l-1.553-5.795a2.5 2.5 0 0 1 1.61-3.015l.158-.047l5.795-1.553a2.5 2.5 0 0 1 2.957 1.458l.057.152Z"
      />
    </svg>
  );
}
export default CollectionsFilled;
