import React, { SVGProps } from "react";

export function Megaphone(props: SVGProps<SVGSVGElement>) {
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
        d="M18 4.802a1.5 1.5 0 0 0-1.887-1.45l-13 3.467A1.5 1.5 0 0 0 2 8.269v2.51a1.5 1.5 0 0 0 1.026 1.423L5 12.86v.89a3.25 3.25 0 0 0 6.27 1.2l4.756 1.586A1.5 1.5 0 0 0 18 15.113V4.802Zm-7.68 9.832A2.251 2.251 0 0 1 6 13.75v-.556l4.32 1.44Zm6.051-10.316a.5.5 0 0 1 .629.484v10.31a.5.5 0 0 1-.658.475l-13-4.333A.5.5 0 0 1 3 10.779V8.27a.5.5 0 0 1 .371-.484l13-3.467Z"
      />
    </svg>
  );
}
export default Megaphone;
