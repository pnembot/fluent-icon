import React, { SVGProps } from "react";

export function CouchFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M14 4H6a2 2 0 0 0-2 2v1a3 3 0 0 1 2.829 2h6.342A3 3 0 0 1 16 7V6a2 2 0 0 0-2-2Zm2 4a2 2 0 0 0-1.938 1.505c-.068.268-.286.495-.562.495h-7c-.276 0-.494-.227-.562-.495A2 2 0 0 0 2 10v2a2 2 0 0 0 2 2v1.5a.5.5 0 0 0 1 0V14h10v1.5a.5.5 0 0 0 1 0V14a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Z"
      />
    </svg>
  );
}
export default CouchFilled;
