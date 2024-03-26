import React, { SVGProps } from "react";

export function CityFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M11 2a.5.5 0 0 1 .5.5V4l1 .001a1.5 1.5 0 0 1 1.5 1.5v2.553a2.5 2.5 0 0 0-2 2.45V18h-2V8.004a2 2 0 0 0-2-2v-.503a1.5 1.5 0 0 1 1.5-1.5h1V2.5A.5.5 0 0 1 11 2ZM8.644 7.239c-.28-.197-.48-.204-.648-.153a.77.77 0 0 0-.135.064L4.728 9.03A1.5 1.5 0 0 0 4 10.316V16.5A1.5 1.5 0 0 0 5.5 18H9V8.004a.998.998 0 0 0-.356-.765ZM15.5 9v.004h-1a1.5 1.5 0 0 0-1.5 1.5V18h3.5a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 16.5 9h-1Z"
      />
    </svg>
  );
}
export default CityFilled;
