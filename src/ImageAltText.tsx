import React, { SVGProps } from "react";

export function ImageAltText(props: SVGProps<SVGSVGElement>) {
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
        d="M3 1a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3Zm.5 5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1ZM3 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM3 14v-4h1v4c0 .373.102.721.28 1.02l4.669-4.588a1.5 1.5 0 0 1 2.102 0l4.67 4.588A1.99 1.99 0 0 0 16 14V6a2 2 0 0 0-2-2h-3V3h3a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3Zm3 2h8c.37 0 .715-.1 1.012-.274l-4.662-4.58a.5.5 0 0 0-.7 0l-4.662 4.58A1.99 1.99 0 0 0 6 16Zm6.5-7a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3Zm.5-1.5a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0Z"
      />
    </svg>
  );
}
export default ImageAltText;
