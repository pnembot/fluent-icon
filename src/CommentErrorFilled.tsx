import React, { SVGProps } from "react";

export function CommentErrorFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M19 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0ZM14.5 3a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.125a.625.625 0 1 0 0-1.25a.625.625 0 0 0 0 1.25ZM18 9.743A5.5 5.5 0 0 1 9.6 3h-5C3.164 3 2 4.149 2 5.566v6.71c0 1.418 1.164 2.566 2.6 2.566h.6v2.171c0 .213.07.42.2.591c.33.437.957.526 1.399.2l4.011-2.962h4.59c1.436 0 2.6-1.149 2.6-2.566V9.743Z"
      />
    </svg>
  );
}
export default CommentErrorFilled;
