import React, { SVGProps } from "react";

export function CommentError(props: SVGProps<SVGSVGElement>) {
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
        d="M19 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0ZM14.5 3a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.125a.625.625 0 1 0 0-1.25a.625.625 0 0 0 0 1.25ZM17 10.4v1.876c0 .853-.704 1.566-1.6 1.566h-4.92L6.206 17H6.2v-3.158H4.6c-.896 0-1.6-.713-1.6-1.566v-6.71C3 4.713 3.704 4 4.6 4h4.607c.099-.349.23-.683.393-1h-5C3.164 3 2 4.149 2 5.566v6.71c0 1.418 1.164 2.566 2.6 2.566h.6v2.171c0 .213.07.42.2.591c.33.437.957.526 1.399.2l4.011-2.962h4.59c1.436 0 2.6-1.149 2.6-2.566V9.743a5.507 5.507 0 0 1-1 .657Z"
      />
    </svg>
  );
}
export default CommentError;