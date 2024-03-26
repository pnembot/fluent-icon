import React, { SVGProps } from "react";

export function ColorLineFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M15.243 2.54a2.263 2.263 0 0 0-3.07.126L6.206 8.66l-.106.12a1.5 1.5 0 0 0-.283.564l-.792 3.071l-.015.084a.5.5 0 0 0 .618.527l3.086-.76l.157-.049a1.5 1.5 0 0 0 .547-.35l5.963-5.989l.12-.13a2.276 2.276 0 0 0 0-2.952l-.127-.136l-.13-.12ZM4.098 12H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5.304l-.57.573c-.259.26-.57.458-.912.583l-.026.01l-.21.064l-3.111.766c-1.021.252-1.941-.587-1.854-1.584l.004-.042l.028-.165l.053-.205Z"
      />
    </svg>
  );
}
export default ColorLineFilled;
