import React, { SVGProps } from "react";

export function PersonLightbulb(props: SVGProps<SVGSVGElement>) {
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
        d="M6 6a4 4 0 1 1 8 0a4 4 0 0 1-8 0Zm4-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6ZM3 13c0-1.113.903-2 2.009-2h6.526a3.97 3.97 0 0 0-.409 1H5.009C4.448 12 4 12.447 4 13c0 1.309.622 2.284 1.673 2.953C6.743 16.636 8.265 17 10 17c.91 0 1.763-.1 2.521-.294l.197.982c-.844.21-1.764.312-2.718.312c-1.855 0-3.583-.386-4.865-1.203C3.833 15.967 3 14.69 3 13Zm15 0a2.997 2.997 0 0 1-1.294 2.468L16.6 16h-3.2l-.107-.532A3 3 0 1 1 18 13Zm-4.4 4l.24 1.196a1 1 0 0 0 .98.804h.36a1 1 0 0 0 .98-.804L16.4 17h-2.8Z"
      />
    </svg>
  );
}
export default PersonLightbulb;
