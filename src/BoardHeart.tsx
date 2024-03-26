import React, { SVGProps } from "react";

export function BoardHeart(props: SVGProps<SVGSVGElement>) {
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
        d="M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h4.92l-.879-.885A3.535 3.535 0 0 1 9.932 16H6a2 2 0 0 1-2-2V8.058l5.5-.053v3.746a3.586 3.586 0 0 1 1-1.09V4H14a2 2 0 0 1 2 2v4.027c.332-.041.67-.035 1 .018V6a3 3 0 0 0-3-3H6ZM4 6a2 2 0 0 1 2-2h3.5v3.005L4 7.058V6Zm13 5.063a2.54 2.54 0 0 1 1.249.694a2.598 2.598 0 0 1 0 3.653l-3.431 3.457a.448.448 0 0 1-.636 0L10.75 15.41a2.6 2.6 0 0 1 0-3.654a2.55 2.55 0 0 1 3.626 0l.123.124l.123-.123A2.546 2.546 0 0 1 17 11.063Z"
      />
    </svg>
  );
}
export default BoardHeart;