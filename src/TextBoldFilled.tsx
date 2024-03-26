import React, { SVGProps } from "react";

export function TextBoldFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M5 4.5A1.5 1.5 0 0 1 6.5 3h3.88c2.364 0 4.12 1.934 4.12 4.12c0 .819-.247 1.606-.68 2.269c.842.749 1.427 1.849 1.427 3.241c0 2.775-2.318 4.37-4.367 4.37H6.5A1.5 1.5 0 0 1 5 15.5v-11ZM8 6v2.25h2.38c.625 0 1.12-.516 1.12-1.13A1.12 1.12 0 0 0 10.38 6H8Zm0 5.25V14h2.88a1.36 1.36 0 0 0 1.367-1.37c0-.84-.684-1.38-1.367-1.38H8Z"
      />
    </svg>
  );
}
export default TextBoldFilled;