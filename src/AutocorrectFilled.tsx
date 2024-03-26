import React, { SVGProps } from "react";

export function AutocorrectFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M2.167 14.752L8.034 4.16c.856-1.547 3.08-1.547 3.936 0L14.097 8h3.153a.75.75 0 0 1 0 1.5h-2.26a4.25 4.25 0 1 1-2.888-1.486A.754.754 0 0 1 12.25 8h.03l-1.843-3.247a.5.5 0 0 0-.87 0L3.476 15.486l-.07.126a.75.75 0 1 1-1.308-.737l.07-.123ZM9 12.25a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 0 0-5.5 0Z"
      />
    </svg>
  );
}
export default AutocorrectFilled;
