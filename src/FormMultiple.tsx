import React, { SVGProps } from "react";

export function FormMultiple(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <g fill="currentColor">
        <path d="M5.5 6a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm1 6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Zm0-1a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1Zm3-1a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z" />
        <path d="M3 6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm3-2a2 2 0 0 0-2 2v6a1.99 1.99 0 0 0 .984 1.723C5.282 13.9 5.629 14 6 14h6a1.991 1.991 0 0 0 1.723-.984C13.9 12.718 14 12.371 14 12V6a2 2 0 0 0-2-2H6Z" />
        <path d="M8 17a2.992 2.992 0 0 1-2.236-1H12.5a3.5 3.5 0 0 0 3.5-3.5V5.764c.614.55 1 1.348 1 2.236v4.5a4.5 4.5 0 0 1-4.5 4.5H8Z" />
      </g>
    </svg>
  );
}
export default FormMultiple;
