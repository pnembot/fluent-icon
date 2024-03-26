import React, { SVGProps } from "react";

export function FlashlightOff(props: SVGProps<SVGSVGElement>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708L7 7.707v1.086l-4.292 4.293a2 2 0 0 0 0 2.829l1.379 1.378a2 2 0 0 0 2.828 0L11.207 13h1.086l4.853 4.854a.5.5 0 0 0 .708-.708l-15-15Zm12.667 9.132l-1.06 1.061l.648.65a.5.5 0 0 0 .244-.135l1.44-1.44a2 2 0 0 0 0-2.828l-5.38-5.379a2 2 0 0 0-2.828 0l-1.44 1.44a.5.5 0 0 0-.133.244l.653.653l1.627-1.63a1 1 0 0 1 1.415 0l5.378 5.38a1 1 0 0 1 0 1.413l-.567.568l.003.003Zm-7.668 1.576a.5.5 0 1 0-.707-.707l-1 1a.5.5 0 1 0 .707.707l1-1ZM7.5 9.708l2.793 2.792l-4.086 4.086a1 1 0 0 1-1.414 0l-1.379-1.378a1 1 0 0 1 0-1.415L7.5 9.708Z"
      />
    </svg>
  );
}
export default FlashlightOff;