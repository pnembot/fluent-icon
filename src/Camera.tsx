import React, { SVGProps } from "react";

export function Camera(props: SVGProps<SVGSVGElement>) {
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
        d="M10 6a4 4 0 1 0 0 8a4 4 0 0 0 0-8Zm-3 4a3 3 0 1 1 6 0a3 3 0 0 1-6 0Zm1.124-8a1.5 1.5 0 0 0-1.34.826L6.194 4h-1.69a2.5 2.5 0 0 0-2.5 2.5v8a2.5 2.5 0 0 0 2.5 2.5h11a2.5 2.5 0 0 0 2.5-2.5v-8a2.5 2.5 0 0 0-2.5-2.5h-1.69l-.584-1.17A1.5 1.5 0 0 0 11.888 2H8.124Zm-.447 1.275A.5.5 0 0 1 8.124 3h3.764a.5.5 0 0 1 .448.276l.723 1.447a.5.5 0 0 0 .447.276h1.999a1.5 1.5 0 0 1 1.5 1.5V14.5a1.5 1.5 0 0 1-1.5 1.5h-11a1.5 1.5 0 0 1-1.5-1.5v-8a1.5 1.5 0 0 1 1.5-1.5h1.998a.5.5 0 0 0 .446-.276l.728-1.449Z"
      />
    </svg>
  );
}
export default Camera;
