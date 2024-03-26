import React, { SVGProps } from "react";

export function ImageReflection(props: SVGProps<SVGSVGElement>) {
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
        d="M7 3a3 3 0 0 0-3 3v6c0 1.043.533 1.963 1.341 2.5A2.997 2.997 0 0 0 4 17a.5.5 0 0 0 1 0a2 2 0 0 1 2-2a.5.5 0 0 0 0-1c-.37 0-.718-.101-1.016-.277l3.521-3.52a.7.7 0 0 1 .99 0l3.521 3.52A1.991 1.991 0 0 1 13 14a.5.5 0 0 0 0 1a2 2 0 0 1 2 2a.5.5 0 0 0 1 0a2.997 2.997 0 0 0-1.341-2.5A2.997 2.997 0 0 0 16 12V6a3 3 0 0 0-3-3H7Zm1.798 6.495l-3.521 3.521A1.99 1.99 0 0 1 5 12V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6c0 .37-.101.718-.277 1.016l-3.52-3.521a1.7 1.7 0 0 0-2.405 0ZM9.5 14a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1ZM13 7a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"
      />
    </svg>
  );
}
export default ImageReflection;
