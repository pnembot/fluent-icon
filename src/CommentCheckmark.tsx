import React, { SVGProps } from "react";

export function CommentCheckmark(props: SVGProps<SVGSVGElement>) {
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
        d="M19 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.854-1.854L13.5 6.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708Zm.854 8.63V10.4a5.507 5.507 0 0 0 1-.657v2.533c0 1.418-1.164 2.566-2.6 2.566h-4.59l-4.011 2.961a1.009 1.009 0 0 1-1.4-.199a.978.978 0 0 1-.199-.59v-2.172h-.6c-1.436 0-2.6-1.149-2.6-2.566v-6.71C2 4.149 3.164 3 4.6 3h5a5.463 5.463 0 0 0-.393 1H4.6C3.704 4 3 4.713 3 5.566v6.71c0 .853.704 1.566 1.6 1.566h1.6V17h.003l.002-.001l4.276-3.157H15.4c.896 0 1.6-.713 1.6-1.566Z"
      />
    </svg>
  );
}
export default CommentCheckmark;