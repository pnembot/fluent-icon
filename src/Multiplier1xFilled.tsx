import React, { SVGProps } from "react";

export function Multiplier1xFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M8.5 6.75a.75.75 0 0 0-1.385-.398l-.048.076c-.214.341-.36.574-.575.811c-.225.247-.547.52-1.128.868a.75.75 0 1 0 .772 1.286c.34-.204.623-.397.864-.588v4.445a.75.75 0 0 0 1.5 0v-6.5Zm2.78 3.47a.75.75 0 1 0-1.06 1.06l.72.72l-.72.72a.75.75 0 1 0 1.06 1.06l.72-.72l.72.72a.75.75 0 1 0 1.06-1.06l-.72-.72l.72-.72a.75.75 0 0 0-1.06-1.06l-.72.72l-.72-.72Z"
      />
    </svg>
  );
}
export default Multiplier1xFilled;
